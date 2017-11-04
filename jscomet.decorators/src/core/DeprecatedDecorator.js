import Decorator from './core/Decorator.js';

class DeprecatedDecorator extends Decorator{
	
	const defaultMessage = "This function will be removed in future versions.";
	
	constructor(){
		this(this.defaultMessage, null);
	}
	
	constructor(message: string){
		this(message, null);
	}
	
	constructor(message: string, options: object){
		super();
		this.name = "deprecated";
		this.message = message || this.defaultMessage;
		this.options = options || {};
	}
	
	
	onFunction(target, key, descriptor, superDescriptor){
	
		const methodSignature = `${target.constructor.name}#${key}`;
		var message = this.message;
		if (this.options.url) {
			message += `\n\n    See ${this.options.url} for more details.\n\n`;
		}
		var error = this.options.error === true;
		return this.cloneDescriptor(descriptor, {
			value: function(){
				  if(error)
					throw new Error(`DEPRECATION ${methodSignature} - ${message}`);
				  else
					console.warn(`DEPRECATION ${methodSignature}: ${message}`);
				  return descriptor.value.apply(this, arguments);
			}
		})
	}
}

		
export default DeprecatedDecorator;