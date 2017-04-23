import Decorator from './core/Decorator.js';

class AbstractDecorator extends Decorator{
	
	constructor(){
		super();
		this.name = "abstract";
	}
	
	onClass(target, type, baseType){
		if (target.constructor === type)
			throw new TypeError(`${target.constructor.name} - Cannot construct abstract instances directly`);
	}
	onProperty(target, key, descriptor, superDescriptor){
	
		var abstractError = function(){
			throw new TypeError(`${target.constructor.name}#${key} - Cannot call abstract properties directly`);
		};
		
		var newProperty = {};
		
		if(typeof descriptor.set != "undefined")
			newProperty.set = abstractError;
		if(typeof descriptor.get != "undefined")
			newProperty.get = abstractError;
			
		return this.cloneDescriptor(descriptor, newProperty);
	}
	onFunction(target, key, descriptor, superDescriptor){
		return this.cloneDescriptor(descriptor, {
			value: function(){
				throw new TypeError(`${target.constructor.name}#${key} - Cannot call abstract functions directly`);
			}
		});
	}
}

export default AbstractDecorator;