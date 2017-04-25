import Decorator from './core/Decorator';
import AbstractDecorator from './core/AbstractDecorator';
import SealedDecorator from './core/SealedDecorator';
import DeprecatedDecorator from './core/DeprecatedDecorator';
import httpRequest from './core/HttpRequestDecorator';
import memoryCache from './core/MemoryCacheDecorator';

export var abstract = Decorator.decorate(AbstractDecorator);
export var sealed = Decorator.decorate(SealedDecorator);
export var deprecated = Decorator.decorate(DeprecatedDecorator);


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
export httpRequest;
export httpGet;
export httpPost;
export memoryCache;
export Decorator;