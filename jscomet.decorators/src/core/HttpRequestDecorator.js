import Decorator from './core/Decorator.js';

class HttpRequestDecorator extends Decorator {
  private static settings = {};
  static lastError = null;
  constructor(url: string) {
    this(url, null);
  }
  constructor(url: string, options: object) {
    super();
    this.name = "httpRequest";
    this.url = url;
    var defaultOptions = {
      method: "get",
      responseType: "text",
      contentType: "json",
      headers: {}
    };

    if (options) {
      for (var i in options) {
        defaultOptions[i] = options[i];
      }
    }
    this.options = defaultOptions;
  }
  onFunction(target, key, descriptor, superDescriptor) {

    var url = this.url;
    if (target && target.constructor)
      url = url.replace("@className", target.constructor.name);
    else
      url = url.replace("@className", "");

    url = url.replace("@methodName", key);

    //replace nas tags de app seting
    while (url.indexOf("@setting") != -1) {
      var index = url.indexOf("@setting");
      var barra = url.indexOf('/');
      if (barra == -1)
        barra = url.indexOf('\\');
      if (barra == -1)
        barra = url.indexOf('?');
      if (barra == -1)
        barra = url.length;

      var appSetting = url.substring(index, barra);

      var value = HttpRequestDecorator.settings[appSetting.split(':').pop()];

      url = url.replace(appSetting, value || "");
    }
    var headers = {};
    for (var i in this.options.headers)
      headers[i] = this.options.headers[i];
    var options = this.options;

    var self = this;
    // const methodSignature = `${target.constructor.name}#${key}`;
    function request(url, options, values) {
      if (typeof XMLHttpRequest != "undefined") {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.open(options.method, url);
          xhr.onload = function () {
            if (xhr.status === 200) {
              if ((options.responseType || "").toLowerCase() == "json") {

                try {
                  resolve(JSON.parse(xhr.responseText));
                } catch (ex) {
                  reject({
                    exception: ex,
                    response: xhr
                  });
                }
              } else {
                resolve(xhr.responseText);
              }
            } else {
              reject({
                exception: xhr.responseText,
                response: xhr
              });
            }
          };
          xhr.timeout = options.timeout;
          if (options.headers) {
            for (var i in options.headers) {
              xhr.setRequestHeader(i, options.headers[i]);
            }
          }
          if (values) {
            switch ((options.contentType || "").toLowerCase()) {
            case "json":
              xhr.send(JSON.stringify(values));
              break;
            default:
              var form = new FormaData();
              for (var i in values) {
                form.append(i, values[i]);
              }
              xhr.send(form);
              break;
            }
          } else {
            xhr.send();
          }
        });
      } else {
        return new Promise((resolve, reject) => {
          var config = {
            url: url,
            headers: headers,
            method: options.method,
            timeout: options.timeout
          };
          switch ((options.contentType || "").toLowerCase()) {
          case "json":
            config.json = values;
            break;
          default:
            config.form = values;
            break;
          }

          require("request")(config, (error, response, body) => {
            if (!error && response.statusCode == 200) {
              if ((options.responseType || "").toLowerCase() == "json" && response.headers["content-type"] != "application/json") {
                try {
                  resolve(JSON.parse(body));
                } catch (ex) {
                  reject({
                    exception: ex,
                    response: response
                  });
                }
              } else {
                resolve(body);
              }
            } else {
              reject({
                exception: error,
                response: response
              });
            }
          });
        });
      }
    }
    return this.cloneDescriptor(descriptor, {
      value: function () {
        var values = {};

        function replaceUrlHeaderParameter(name, value) {
          if (url.indexOf("{" + name + "}") != -1)
            url = url.replace("{" + name + "}", encodeURIComponent((value || "").toString()));
          else if (headers) {
            for (var i in headers) {
              if (headers[i] == "{" + name + "}") {
                headers[i] = value;
              }
            }
          }
        }
        //cria parametros na url e valores a serem enviados por get ou post
        for (var i = 0; i < arguments.length; i++) {
          if (typeof arguments[i] == "object") {
            for (var j in arguments[i]) {
              //replace and add data to send
              values[j] = arguments[i][j];
              replaceUrlHeaderParameter(j, arguments[i][j]);
            }
          } else { //only replace url parameters and headers
            replaceUrlHeaderParameter(i, arguments[i]);
          }
        }
        return new Promise((resolve, reject) => {
          HttpRequestDecorator.lastError = null;
          request(url, options, values).then((response) => {
            resolve(response);
          })["catch"]((error) => {
            HttpRequestDecorator.lastError = error;
            resolve(descriptor.value.apply(this, arguments));
          });
        });
      }
    });
  }

  static loadSettings(settings: object) {
    HttpRequestDecorator.settings = settings;
  }
  static getLastError() {
    return HttpRequestDecorator.lastError;
  }
}
var httpRequest = Decorator.decorate(HttpRequestDecorator);
httpRequest.loadSettings = HttpRequestDecorator.loadSettings;
httpRequest.getLastError = HttpRequestDecorator.getLastError;
export default httpRequest;
