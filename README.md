# Decorators using JSComet
 
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

##### @abstract
Abstract decorators do not allow this class to be instanced only inherited, when applied in a function or property throw a exception if not overrided. Can be used in classes, functions and properties.
```javascript
import { abstract  } from 'jscomet.decorators';
@abstract
class Test{
    name: string = "ciro";
    @abstract
    surname: string;
    
    @abstract
    getMessage(){
    }
}
```

##### @sealed
Sealed decorators do not allow this class to be inherited any more. Can be only in classes.
```javascript
import { sealed  } from 'jscomet.decorators';

@sealed
class Test2 extends Test{
    name: string = "ciro";
}
```

##### @deprecated(message: string, options: object)
Deprecated decorators can be used to throw a exception or log a warning, options parameter is optional

```javascript
import { deprecated  } from 'jscomet.decorators';

class Test{
    //throw a exception: This function will be removed in future versions. DON'T USE THIS!
    @deprecated("This function will be removed in future versions. DON'T USE THIS!", { error: true })
    test(code: int){
    
    }
    //log a warning: This function will be removed in future versions.
    @deprecated
    test2(code: int){
    
    }
    //log a warning: This function will be removed in future versions. See http://mysite.com/deprecated/test3 for more details.
    @deprecated("This function will be removed in future versions. DON'T USE THIS!", { url: "http://mysite.com/deprecated/test3" })
    test3(code: int){
    
    }
}
//sealed decorators do not allow this class to be inherited any more 
@sealed
class Test2 extends Test{
    name: string = "ciro";
}
```

##### @memoryCache(duration: int)
Create a cache in memory using a static object, you can use in class functions and this decorators support async functions.

```javascript
import { memoryCache } from 'jscomet.decorators';

class User{
    //this will create a result cache using function arguments as key for X milliseconds
    @memoryCache(60 * 1000)
    getUserByID(userID){
    }
    //You can use in functions that returns a Promise or async functions
    @memoryCache(60 * 1000)
    async getUsersByName(name){
        return await DAL.User.getUsersByName(name);
    }
}
```

##### @httpRequest(url: string, options: object)
HttpRequest decorator is a helper to consume Rest API`s. If a function use this decorator the function will return a Promise and hers body only will be called if the request is NOT successfully.
Parameter url contains a url format to execute a http request:

```javascript
import { httpRequest } from 'jscomet.decorators';

class Sample{
    @httpRequest("http://httpbin.org/get?s={0}")
    getSample(search){
    }
    // {search: "value"}
    @httpRequest("http://httpbin.org/get?s={search}")
    getSample2(data: object){
        //the function body only is called if a http error as throw
        console.error(httpRequest.getLastError());
        //return default value
        return {};
    }
    @httpRequest("http://httpbin.org/post", { method: "post"})
    postSample(data: object){
    }
}

```
The @setting:MySettingName format can be used to add a value in url for not keep the base url hard coded.

```javascript
import { httpRequest } from 'jscomet.decorators';

httpRequest.loadSettings({
    "myUrl": "http://httpbin.org/get"
});

class Sample{
    @httpRequest("@setting:myUrl?s={0}")
    getSample(search){
    }
}
```

Parameter options is optional and can contains the struct bellow:
```javascript
{
      method: "get", //method can be get, post, head, put, update, delete etc (get as default)
      responseType: "text", //responseType can be text or json (text as default)
      contentType: "json", //contentType can be text or json (json as default)
      //can be passed headers ({} as default)
      headers: {
        "MyHeaderName": "MyHeaderValue",
        "MyHeaderName2": "{0}", //use arguments index 0 as value
        "MyHeaderName3": "{headerParam}", //use property headerParam of arguments passed
      }
}
```
##### @httpGet(url: string, options: object)
Just a shortcut for httpRequest with default method as get.

##### @httpPost(url: string, options: object)
Just a shortcut for httpRequest with default method as post.
### Creating more decorators
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