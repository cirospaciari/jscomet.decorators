var z____memoryImport = z____memoryImport || {};

z____memoryImport['/core/AbstractDecorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
﻿
var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var AbstractDecorator = (function(Decorator){
"use strict";

var ___privateStatic___ = {};
function AbstractDecorator(){
	JSComet.checkClass(this, AbstractDecorator);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Decorator.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.onClass =  (function onClass(target,  type,  baseType){
  var  z____return = (function onClass(target, type, baseType){
        
		if (target.constructor === type)
			throw new TypeError((target.constructor.name)+" - Cannot construct abstract instances directly");
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onProperty =  (function onProperty(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onProperty(target, key, descriptor, superDescriptor){
        
	
		var abstractError = function(){
			throw new TypeError((target.constructor.name)+"#"+(key)+" - Cannot call abstract properties directly");
		};
		
		var newProperty = {};
		
		if(typeof descriptor.set != "undefined")
			newProperty.set = abstractError;
		if(typeof descriptor.get != "undefined")
			newProperty.get = abstractError;
			
		return this.cloneDescriptor(descriptor, newProperty);
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onFunction =  (function onFunction(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onFunction(target, key, descriptor, superDescriptor){
        
		return this.cloneDescriptor(descriptor, {
			value: function(){
				throw new TypeError((target.constructor.name)+"#"+(key)+" - Cannot call abstract functions directly");
			}
		});
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        
	 if(typeof Decorator != 'undefined') __callSuperConstructor__.call(this);
		this.name = "abstract";
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(AbstractDecorator, Decorator);

return AbstractDecorator;
})(Decorator);


module.exports['default'] = AbstractDecorator;

return module.exports;
}
};

z____memoryImport['/core/Decorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
﻿var Decorator = (function(){
"use strict";

var ___privateStatic___ = {};
function Decorator(){
	JSComet.checkClass(this, Decorator);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'name', get: (function(){ var z____return = (function name(){return ___private___.z____name;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Decorator#name - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function name(value){

if((value != null) &&(typeof value != 'string'))
 throw "Decorator#name - the property 'value' must be 'string'";
 ___private___.z____name = value; }).apply(___self___, arguments);}) });

		___private___.z____name = null;
___self___.onClass =  (function onClass(target,  type,  baseType){
  var  z____return = (function onClass(target, type, baseType){
        
		throw new SyntaxError((target.constructor.name)+" - Classes cannot be marked as "+(this.name));
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onFunction =  (function onFunction(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onFunction(target, key, descriptor, superDescriptor){
        
		throw new SyntaxError((target.constructor.name)+"#"+(key)+" - Functions cannot be marked as "+(this.name));
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onField =  (function onField(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onField(target, key, descriptor, superDescriptor){
        
		throw new SyntaxError((target.constructor.name)+"#"+(key)+" - Fields cannot be marked as "+(this.name));
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onProperty =  (function onProperty(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onProperty(target, key, descriptor, superDescriptor){
        
		throw new SyntaxError((target.constructor.name)+"#"+(key)+" - Properties cannot be marked as "+(this.name));
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.cloneDescriptor =  (function cloneDescriptor(){if(arguments.length == 1){
  var  z____return = (function cloneDescriptor(descriptor){


if((descriptor != null) &&(typeof descriptor != 'object'))
 throw "Decorator#cloneDescriptor - the parameter 'descriptor' must be 'object'";

        
		return this.cloneDescriptor(description, null);
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 2){
  var  z____return = (function cloneDescriptor(descriptor, informationToBind){


if((descriptor != null) &&(typeof descriptor != 'object'))
 throw "Decorator#cloneDescriptor - the parameter 'descriptor' must be 'object'";

if((informationToBind != null) &&(typeof informationToBind != 'object'))
 throw "Decorator#cloneDescriptor - the parameter 'informationToBind' must be 'object'";

        
		var newDescriptor = Object.create(null);
		
		for(var i in descriptor){
			newDescriptor[i] = descriptor[i];
		}
		
		if(informationToBind){
			for(var i in informationToBind){
				newDescriptor[i] = informationToBind[i];
			}
		}
		
		return newDescriptor;
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Decorator#cloneDescriptor - No overload function takes '+arguments.length+' arguments';});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        
		this.name = this.constructor.name;
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

___privateStatic___.isDescriptor =  (function isDescriptor(desc){ return  (function isDescriptor(desc){
  var  z____return = (function isDescriptor(desc){
        
		
		if(typeof desc != "object")
			return false;
		
		
		for(var i in desc){
			if(i == "value" || i == "get" || i == "set")
				return true;
		}
		return false;
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "Decorator#isDescriptor - the return type must be 'boolean'";
return z____return;}).apply(this, arguments);});
___privateStatic___.isInstanceOf =  (function isInstanceOf(target,  classz){ return  (function isInstanceOf(target,  classz){
  var  z____return = (function isInstanceOf(target, classz){
        
		try{
			return target instanceof classz;
		}catch(ex){
			return false;
		}
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "Decorator#isInstanceOf - the return type must be 'boolean'";
return z____return;}).apply(this, arguments);});
Decorator.decorate =  (function decorate(decorator){
  var  z____return = (function decorate(decorator){


if(decorator !== null && !(decorator instanceof Function))
 throw "Decorator#decorate - the parameter 'decorator' must be 'Function'";

        
	
		var isInstanceOf = ___privateStatic___.isInstanceOf;
		var isDescriptor = ___privateStatic___.isDescriptor;
		var decoratorAction = function(){
			if(arguments.length == 3 && 
			  typeof arguments[0] == "object" && 
			  isInstanceOf(arguments[0], arguments[1]) && 
			  (arguments[2] == null || isInstanceOf(arguments[0], arguments[2]))){
				
				
				var decoratorObj = this ? this : new decorator();
				if(!(decoratorObj instanceof Decorator))
					throw new TypeError("The decorator parameter must inherit the type Decorator");
					
				return decoratorObj.onClass.apply(decoratorObj, arguments);
				
			}else if((arguments.length == 3 || arguments.length == 4) && 
					 isDescriptor(arguments[2]) && 
					 (!arguments[3] || isDescriptor(arguments[3]))){
				
				
				var decoratorObj = this ? this : new decorator();
				if(!(decoratorObj instanceof Decorator))
					throw new TypeError("The decorator parameter must inherit the type Decorator");
					
				var desc = arguments[2];
				
				if(desc.get || desc.set)
					return decoratorObj.onProperty.apply(decoratorObj, arguments);
				if(typeof desc.value == "function")
					return decoratorObj.onFunction.apply(decoratorObj, arguments);
			
				return decoratorObj.onField.apply(decoratorObj, arguments);
				
			}else{
				
				Array.prototype.unshift.call(arguments, null);
				
				var decoratorObj = new (Function.prototype.bind.apply(decorator, arguments));
				if(!(decoratorObj instanceof Decorator))
					throw new TypeError("The decorator parameter must inherit the type Decorator");
					
				return function(){
					return decoratorAction.apply(decoratorObj, arguments);
				};
			}				
		};
		return decoratorAction;
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
return Decorator;
})();
		


module.exports['default'] = Decorator;

return module.exports;
}
};

z____memoryImport['/core/DeprecatedDecorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
﻿
var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var DeprecatedDecorator = (function(Decorator){
"use strict";

var ___privateStatic___ = {};
function DeprecatedDecorator(){
	JSComet.checkClass(this, DeprecatedDecorator);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Decorator.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

		___private___.defaultMessage =  "This function will be removed in future versions.";
___self___.onFunction =  (function onFunction(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onFunction(target, key, descriptor, superDescriptor){
        
	
		var methodSignature = (target.constructor.name)+"#"+(key);
		var message = this.message;
		if (this.options.url) {
			message += "\n\n    See "+(this.options.url)+" for more details.\n\n";
		}
		var error = this.options.error === true;
		return this.cloneDescriptor(descriptor, {
			value: function(){
				  if(error)
					throw new Error("DEPRECATION "+(methodSignature)+" - "+(message));
				  else
					console.warn("DEPRECATION "+(methodSignature)+": "+(message));
				  return descriptor.value.apply(this, arguments);
			}
		})
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 0){
  var  z____return = (function constructor(){
        
	 __callThisConstructor__.call(this, ___private___.defaultMessage, null);
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 1){
  var  z____return = (function constructor(message){


if((message != null) &&(typeof message != 'string'))
 throw "DeprecatedDecorator#constructor - the parameter 'message' must be 'string'";

        
	 __callThisConstructor__.call(this,message, null);
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 2){
  var  z____return = (function constructor(message, options){


if((message != null) &&(typeof message != 'string'))
 throw "DeprecatedDecorator#constructor - the parameter 'message' must be 'string'";

if((options != null) &&(typeof options != 'object'))
 throw "DeprecatedDecorator#constructor - the parameter 'options' must be 'object'";

        
	 if(typeof Decorator != 'undefined') __callSuperConstructor__.call(this);
		this.name = "deprecated";
		this.message = message || ___private___.defaultMessage;
		this.options = options || {};
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'DeprecatedDecorator#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(DeprecatedDecorator, Decorator);

return DeprecatedDecorator;
})(Decorator);

		

module.exports['default'] = DeprecatedDecorator;

return module.exports;
}
};

z____memoryImport['/core/HttpRequestDecorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var HttpRequestDecorator = (function(Decorator){
"use strict";

var ___privateStatic___ = {};
function HttpRequestDecorator(){
	JSComet.checkClass(this, HttpRequestDecorator);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Decorator.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.onFunction =  (function onFunction(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onFunction(target, key, descriptor, superDescriptor){
        

    var url = this.url;
    if (target && target.constructor)
      url = url.replace("@className", target.constructor.name);
    else
      url = url.replace("@className", "");

    url = url.replace("@methodName", key);

    
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

      var value = ___privateStatic___.settings[appSetting.split(':').pop()];

      url = url.replace(appSetting, value || "");
    }
    var headers = {};
    for (var i in this.options.headers)
      headers[i] = this.options.headers[i];
    var options = this.options;

    var self = this;
    
    function request(url, options, values) {
      if (typeof XMLHttpRequest != "undefined") {
        return new Promise(((function(_this){ return (function(){return (function (resolve, reject){
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
        }).apply(_this,arguments)});})(this)));
      } else {
        return new Promise(((function(_this){ return (function(){return (function (resolve, reject){
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

          require("request")(config, ((function(_this){ return (function(){return (function (error, response, body){
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
          }).apply(_this,arguments)});})(this)));
        }).apply(_this,arguments)});})(this)));
      }
    }
    return this.cloneDescriptor(descriptor, {
      value: function () {
        var values = {};
        var requestUrl = url;
        function replaceUrlHeaderParameter(name, value) {
          if (requestUrl.indexOf("{" + name + "}") != -1)
            requestUrl = requestUrl.replace("{" + name + "}", encodeURIComponent((value || "").toString()));
          else if (headers) {
            for (var i in headers) {
              if (headers[i] == "{" + name + "}") {
                headers[i] = value;
              }
            }
          }
        }
        
        for (var i = 0; i < arguments.length; i++) {
          if (typeof arguments[i] == "object") {
            for (var j in arguments[i]) {
              
              values[j] = arguments[i][j];
              replaceUrlHeaderParameter(j, arguments[i][j]);
            }
          } else { 
            replaceUrlHeaderParameter(i, arguments[i]);
          }
        }
        return new Promise(((function(_this){ return (function(){return (function (resolve, reject){
          HttpRequestDecorator.lastError = null;
          request(requestUrl, options, values).then(((function(_this){ return (function(){return (function (response){
            resolve(response);
          }).apply(_this,arguments)});})(this)))["catch"](((function(_this){ return (function(){return (function (error){
            HttpRequestDecorator.lastError = error;
            resolve(descriptor.value.apply(this, arguments));
          }).apply(_this,arguments)});})(this)));
        }).apply(_this,arguments)});})(this)));
      }
    });
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 1){
  var  z____return = (function constructor(url){


if((url != null) &&(typeof url != 'string'))
 throw "HttpRequestDecorator#constructor - the parameter 'url' must be 'string'";

        
    __callThisConstructor__.call(this,url, null);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 2){
  var  z____return = (function constructor(url, options){


if((url != null) &&(typeof url != 'string'))
 throw "HttpRequestDecorator#constructor - the parameter 'url' must be 'string'";

if((options != null) &&(typeof options != 'object'))
 throw "HttpRequestDecorator#constructor - the parameter 'options' must be 'object'";

        
    if(typeof Decorator != 'undefined') __callSuperConstructor__.call(this);
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
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'HttpRequestDecorator#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

HttpRequestDecorator.loadSettings =  (function loadSettings(settings){
  var  z____return = (function loadSettings(settings){


if((settings != null) &&(typeof settings != 'object'))
 throw "HttpRequestDecorator#loadSettings - the parameter 'settings' must be 'object'";

        
    ___privateStatic___.settings = settings;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
HttpRequestDecorator.getLastError =  (function getLastError(){
  var  z____return = (function getLastError(){
        
    return HttpRequestDecorator.lastError;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___privateStatic___.settings =  {};
HttpRequestDecorator.lastError =  null;
JSComet.inherits(HttpRequestDecorator, Decorator);

return HttpRequestDecorator;
})(Decorator);
var httpRequest = Decorator.decorate(HttpRequestDecorator);
httpRequest.loadSettings = HttpRequestDecorator.loadSettings;
httpRequest.getLastError = HttpRequestDecorator.getLastError;

module.exports['default'] = httpRequest;








return module.exports;
}
};

z____memoryImport['/core/MemoryCacheDecorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var MemoryCacheDecorator = (function(Decorator){
"use strict";

var ___privateStatic___ = {};
function MemoryCacheDecorator(){
	JSComet.checkClass(this, MemoryCacheDecorator);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Decorator.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.onFunction =  (function onFunction(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onFunction(target, key, descriptor, superDescriptor){
        
    var cacheTemplate = (target.constructor.name)+"#"+(key);
    var duration = this.duration;
    var Cache = ___privateStatic___.Cache;
    return this.cloneDescriptor(descriptor, {
      value: function () {
        var cacheKey = cacheTemplate + "("+ JSON.stringify(arguments) + ")";
        if(Cache[cacheKey]){
          if((new Date().getTime() - Cache[cacheKey].timeStamp) <= duration){
            if(Cache[cacheKey].isPromise){
              return new Promise(((function(_this){ return (function(){return (function (resolve, reject){
                  if(Cache[cacheKey].isRejected){
                    reject.apply(null, Cache[cacheKey].value);
                  }else{
                    resolve.apply(null, Cache[cacheKey].value);
                  }
              }).apply(_this,arguments)});})(this)));
            }else{
              return Cache[cacheKey].value;
            }
          }
        }
        delete Cache[cacheKey];
        var response = descriptor.value.apply(this, arguments);
        if(response instanceof Promise){
          return new Promise(((function(_this){ return (function(){return (function (resolve, reject){
            response.then(((function(_this){ return (function(){return (function (){
              Cache[cacheKey] = {
                  isPromise: true,
                  timeStamp: new Date().getTime(),
                  value: arguments,
                  isRejected: false
              };
              resolve.apply(null, arguments);
            }).apply(_this,arguments)});})(this)))["catch"](((function(_this){ return (function(){return (function (){
              Cache[cacheKey] = {
                  isPromise: true,
                  timeStamp: new Date().getTime(),
                  value: arguments,
                  isRejected: true
              };
              reject.apply(null, arguments);
            }).apply(_this,arguments)});})(this)));
          }).apply(_this,arguments)});})(this)));
        }else{
          Cache[cacheKey] = {
              isPromise: false,
              timeStamp: new Date().getTime(),
              value: response
          };
          return response;
        }
      }
    });
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 0){
  var  z____return = (function constructor(){
        
    __callThisConstructor__.call(this,1);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 1){
  var  z____return = (function constructor(duration){


if((typeof duration != 'number') ||
 duration !== parseInt(duration, 10)|| isNaN(duration)
 || duration > 2147483647
 || duration < -2147483648)
 throw "MemoryCacheDecorator#constructor - the parameter 'duration' must be a integer between -2147483648 and 2147483647";

        
    if(typeof Decorator != 'undefined') __callSuperConstructor__.call(this);
    this.name = "memoryCache";

    this.duration = duration;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'MemoryCacheDecorator#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

MemoryCacheDecorator.clear =  (function clear(){
  var  z____return = (function clear(){
        

  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___privateStatic___.Cache =  {};
JSComet.inherits(MemoryCacheDecorator, Decorator);

return MemoryCacheDecorator;
})(Decorator);
var memoryCache = Decorator.decorate(MemoryCacheDecorator);

module.exports['default'] = memoryCache;






return module.exports;
}
};

z____memoryImport['/core/SealedDecorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
﻿
var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var SealedDecorator = (function(Decorator){
"use strict";

var ___privateStatic___ = {};
function SealedDecorator(){
	JSComet.checkClass(this, SealedDecorator);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Decorator.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.onClass =  (function onClass(target,  type,  baseType){
  var  z____return = (function onClass(target, type, baseType){
        
		if (target.constructor != type)
		   throw new TypeError((target.constructor.name)+" - Sealed types cannot be inherited");
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        
	 if(typeof Decorator != 'undefined') __callSuperConstructor__.call(this);
		this.name = "sealed";
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(SealedDecorator, Decorator);

return SealedDecorator;
})(Decorator);
		

module.exports['default'] = SealedDecorator;

return module.exports;
}
};

z____memoryImport['/core/UserInRuleDecorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var ____imported = JSComet.include('jscomet.core', false, z____memoryImport);

var Controller = ____imported.Controller;;

var UserInRuleDecorator = (function(Decorator){
"use strict";

var ___privateStatic___ = {};
function UserInRuleDecorator(ruleName){
	JSComet.checkClass(this, UserInRuleDecorator);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Decorator.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.onFunction =  (function onFunction(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onFunction(target, key, descriptor, superDescriptor){
        
    if(!(target instanceof Controller)){
		throw new TypeError("userInRule decorator can only be used in jscomet.core@Controller actions");
	}
	var toAsync = function(result){
		if(result instanceof Promise)
			return result;
		return new Promise(((function(_this){ return (function(){return (function (resolve){
			resolve(result);
		}).apply(_this,arguments)});})(this)));
	}
	var ruleName = this.ruleName;
    return this.cloneDescriptor(descriptor, {
      value: function () {
		var parameters = arguments;
		var controller = this;
		return new Promise(((function(_this){ return (function(){return (function (resolve, reject){
			var ruleResult = UserInRuleDecorator.userIsInRule.call(null, controller, ruleName);
			toAsync(ruleResult)
			.then(((function(_this){ return (function(){return (function (isInRule){
				var result = null;
				if(isInRule === true){
					result = descriptor.value.apply(controller, parameters);		
				}else{
					result = isInRule;
				}
				
				toAsync(result)
				.then(((function(_this){ return (function(){return (function (actionResult){
    return resolve(actionResult);}).apply(_this,arguments)});})(this)))
				.catch(((function(_this){ return (function(){return (function (error){
    return reject(error);}).apply(_this,arguments)});})(this)));
			}).apply(_this,arguments)});})(this)))
			.catch(((function(_this){ return (function(){return (function (error){
    return reject(error);}).apply(_this,arguments)});})(this)));
		}).apply(_this,arguments)});})(this)));
      }
    });
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(ruleName){


if((ruleName != null) &&(typeof ruleName != 'string'))
 throw "UserInRuleDecorator#constructor - the parameter 'ruleName' must be 'string'";

        
    if(typeof Decorator != 'undefined') __callSuperConstructor__.call(this);
    this.name = "userInRule";

    this.ruleName = ruleName;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

UserInRuleDecorator.userIsInRule =  (function userIsInRule(){
  var  z____return = (function userIsInRule(){
        
	  return true;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
UserInRuleDecorator.setRuleValidator =  (function setRuleValidator(action){
  var  z____return = (function setRuleValidator(action){


if(action !== null && !(action instanceof Function))
 throw "UserInRuleDecorator#setRuleValidator - the parameter 'action' must be 'Function'";

        
	if(!action){
		throw new TypeError("userInRule#setRuleValidator action parameter need to be a Function");
	}
	UserInRuleDecorator.userIsInRule = action;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
JSComet.inherits(UserInRuleDecorator, Decorator);

return UserInRuleDecorator;
})(Decorator);
var userInRule = Decorator.decorate(UserInRuleDecorator);
userInRule.setRuleValidator = UserInRuleDecorator.setRuleValidator;

module.exports['default'] = userInRule;








return module.exports;
}
};


var ____imported = JSComet.include('./core/Decorator', false, z____memoryImport);

var Decorator = ____imported.default;;

var ____imported = JSComet.include('./core/AbstractDecorator', false, z____memoryImport);

var AbstractDecorator = ____imported.default;;

var ____imported = JSComet.include('./core/SealedDecorator', false, z____memoryImport);

var SealedDecorator = ____imported.default;;

var ____imported = JSComet.include('./core/DeprecatedDecorator', false, z____memoryImport);

var DeprecatedDecorator = ____imported.default;;

var ____imported = JSComet.include('./core/HttpRequestDecorator', false, z____memoryImport);

var httpRequest = ____imported.default;;

var ____imported = JSComet.include('./core/MemoryCacheDecorator', false, z____memoryImport);

var memoryCache = ____imported.default;;

var ____imported = JSComet.include('./core/UserInRuleDecorator', false, z____memoryImport);

var userInRule = ____imported.default;;

var abstract = Decorator.decorate(AbstractDecorator);
module.exports.abstract = abstract;

var sealed = Decorator.decorate(SealedDecorator);
module.exports.sealed = sealed;

var deprecated = Decorator.decorate(DeprecatedDecorator);
module.exports.deprecated = deprecated;



function httpPost(url, options){
	options = options || {};
	options["method"] = "POST";
	return httpRequest(url, options);
}
function httpGet(url, options){
	options = options || {};
	options["method"] = "GET";
	return httpRequest(url, options);
}


module.exports.httpRequest = httpRequest;


module.exports.httpGet = httpGet;


module.exports.httpPost = httpPost;


module.exports.memoryCache = memoryCache;


module.exports.userInRule = userInRule;


module.exports.Decorator = Decorator;
