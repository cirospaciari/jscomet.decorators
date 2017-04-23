import Decorator from './core/Decorator.js';
import AbstractDecorator from './core/AbstractDecorator.js';
import SealedDecorator from './core/SealedDecorator.js';
import DeprecatedDecorator from './core/DeprecatedDecorator.js';


export var abstract = Decorator.decorate(AbstractDecorator);
export var sealed = Decorator.decorate(SealedDecorator);
export var deprecated = Decorator.decorate(DeprecatedDecorator);
		
export Decorator;