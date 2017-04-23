# Decoratos using JSComet
 
Here are some examples of implementing decorators using jscomet.
The implementation of decorators used by js comet does not follow ES6 / ES7 in the future adaptations will be made for compatibility

To install jscomet use the command bellow for more [click here](https://www.npmjs.com/package/jscomet):
```sh
npm install jscomet -g
```
For use this decorators you must install the package using the command:
```sh
npm install jscomet.decorators
```

### How use
 
##### Using existing decorators
Some decorators were implemented for use as abstract, sealed, and deprecated. More decorators will be implemented for AOP and more features like log, http request, serialization and validation.
```javascript
import { abstract, sealed, deprecated } from 'jscomet.decorators';
 
//abstract decorators do not allow this class to be instanced only inherited
@abstract
class Test{
    name: string = "ciro";
    surname: string = "spaciari";
    
    //when this function is called this error will be thrown, if you not set error: true a warning will be thrown
    @deprecated("This function will be removed in future versions. DON'T USE THIS!", { error: true })
    test(code: int){
    
    }
}
//sealed decorators do not allow this class to be inherited any more
@sealed
class Test2 extends Test{
    name: string = "ciro";
}
```
##### Creating more decorators
This package contains a Decorator class. This class can be inherited for easier implementation.
```javascript
import { Decorator } from 'jscomet.decorators'; 
class MyDecorator extends Decorator{
    constructor(){
		super();
		this.name = "myDecorator";
	}
	//onClass function is called when a class marked with this decorator is instantiated
	onClass(target, type, baseType){
		throw new SyntaxError(`${target.constructor.name} - Classes cannot be marked as ${this.name}`);
	}
	//onFunction function is called  when a function marked with this decorator is called
	onFunction(target, key, descriptor, superDescriptor){
		throw new SyntaxError(`${target.constructor.name}#${key} - Functions cannot be marked as ${this.name}`);
	}
	//onField function is called when a class with a property marked with this decorator is instantiated
	onField(target, key, descriptor, superDescriptor){
		throw new SyntaxError(`${target.constructor.name}#${key} - Fields cannot be marked as ${this.name}`);
	}
	//onProperty function is called when a class with a property marked with this decorator is instantiated
	onProperty(target, key, descriptor, superDescriptor){
		throw new SyntaxError(`${target.constructor.name}#${key} - Properties cannot be marked as ${this.name}`);
	}
	//Helper function to clone decorator in new properties/functions/fields/instances
	cloneDescriptor(descriptor: object, informationToBind: object){
	}
}
export var myDecorator = Decorator.decorate(MyDecorator);
```
For example here are some decorators implemented:

Sealed:
```javascript
import { Decorator } from 'jscomet.decorators'; 

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
export var sealed = Decorator.decorate(SealedDecorator);
```

Deprecated:
```javascript
import { Decorator } from 'jscomet.decorators'; 

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

export var deprecated = Decorator.decorate(DeprecatedDecorator);
```

Abstract:
```javascript
import { Decorator } from 'jscomet.decorators'; 

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
export var abstract = Decorator.decorate(AbstractDecorator);
```