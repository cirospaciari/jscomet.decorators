import Decorator from './core/Decorator.js';

class MemoryCacheDecorator extends Decorator {
  private static Cache = {};
  constructor() {
    this(1);
  }
  constructor(duration: int) {
    super();
    this.name = "memoryCache";

    this.cacheKey = ('xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    }));

    this.duration = duration;
  }
  onFunction(target, key, descriptor, superDescriptor) {
    var cacheTemplate = `${this.cacheKey}-${target.constructor.name}#${key}`;
    var duration = this.duration;
    var Cache = MemoryCacheDecorator.Cache;
    return this.cloneDescriptor(descriptor, {
      value: function () {
        var cacheKey = cacheTemplate + "("+ JSON.stringify(arguments) + ")";
        if(Cache[cacheKey]){
          if((new Date().getTime() - Cache[cacheKey].timeStamp) <= duration){
            if(Cache[cacheKey].isPromise){
              return new Promise((resolve, reject)=>{
                  if(Cache[cacheKey].isRejected){
                    reject.apply(null, Cache[cacheKey].value);
                  }else{
                    resolve.apply(null, Cache[cacheKey].value);
                  }
              });
            }else{
              return Cache[cacheKey].value;
            }
          }
        }
        delete Cache[cacheKey];
        var response = descriptor.value.apply(this, arguments);
        if(response instanceof Promise){
          return new Promise((resolve, reject)=>{
            response.then(()=>{
              Cache[cacheKey] = {
                  isPromise: true,
                  timeStamp: new Date().getTime(),
                  value: arguments,
                  isRejected: false
              };
              resolve.apply(null, arguments);
            })["catch"](()=>{
              Cache[cacheKey] = {
                  isPromise: true,
                  timeStamp: new Date().getTime(),
                  value: arguments,
                  isRejected: true
              };
              reject.apply(null, arguments);
            });
          });
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
  }
  static clear(){

  }
}
var memoryCache = Decorator.decorate(MemoryCacheDecorator);
export default memoryCache;
