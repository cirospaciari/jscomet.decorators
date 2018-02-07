import Decorator from './core/Decorator';
import AbstractDecorator from './core/AbstractDecorator';
import StaticDecorator from './core/StaticDecorator';
import SealedDecorator from './core/SealedDecorator';
import DeprecatedDecorator from './core/DeprecatedDecorator';
import httpRequest from './core/HttpRequestDecorator';
import memoryCache from './core/MemoryCacheDecorator';
import userInRule from './core/UserInRuleDecorator';

export var abstract = Decorator.decorate(AbstractDecorator);
export var sealed = Decorator.decorate(SealedDecorator);
export var deprecated = Decorator.decorate(DeprecatedDecorator);
export var static = Decorator.decorate(StaticDecorator);

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
export userInRule;
export Decorator;
export static;
