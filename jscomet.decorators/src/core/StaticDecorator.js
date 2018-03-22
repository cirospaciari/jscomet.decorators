import Decorator from './core/Decorator.js';

class StaticDecorator extends Decorator{
	
	constructor(){
		super();
		this.name = "static";
	}
	
	onClass(target, type, baseType){
		throw new TypeError(`${target.constructor.name} - Cannot construct static instances`);
	}
}

export default StaticDecorator;