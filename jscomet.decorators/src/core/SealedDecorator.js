import Decorator from './core/Decorator.js';

class SealedDecorator extends Decorator{
	
	constructor(){
		super();
		this.name = "sealed";
	}
	
	onClass(target, type, baseType){
		if (target.constructor != type)
		   throw new TypeError(`${target.constructor.name} - Sealed types cannot be inherited`);
	}
	
}
		
export default SealedDecorator;