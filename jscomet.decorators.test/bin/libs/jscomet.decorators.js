var z____memoryImport = z____memoryImport || {};

z____memoryImport['/core/AbstractDecorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
﻿
var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var AbstractDecorator = (function(Decorator){
"use strict";

var ___privateStatic___ = {};
function AbstractDecorator(){
	JSComet.checkClass(this, AbstractDecorator);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Decorator.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.onClass =  (function onClass(target,  type,  baseType){
  var  z____return = (function onClass(target, type, baseType){
        
		if (target.constructor === type)
			throw new TypeError((target.constructor.name)+" - Cannot construct abstract instances directly");
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onProperty =  (function onProperty(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onProperty(target, key, descriptor, superDescriptor){
        
	
		var abstractError = function(){
			throw new TypeError((target.constructor.name)+"#"+(key)+" - Cannot call abstract properties directly");
		};
		
		var newProperty = {};
		
		if(typeof descriptor.set != "undefined")
			newProperty.set = abstractError;
		if(typeof descriptor.get != "undefined")
			newProperty.get = abstractError;
			
		return this.cloneDescriptor(descriptor, newProperty);
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onFunction =  (function onFunction(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onFunction(target, key, descriptor, superDescriptor){
        
		return this.cloneDescriptor(descriptor, {
			value: function(){
				throw new TypeError((target.constructor.name)+"#"+(key)+" - Cannot call abstract functions directly");
			}
		});
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        
	 if(typeof Decorator != 'undefined') __callSuperConstructor__.call(this);
		this.name = "abstract";
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(AbstractDecorator, Decorator);

return AbstractDecorator;
})(Decorator);


module.exports['default'] = AbstractDecorator;

return module.exports;
}
};

z____memoryImport['/core/Decorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
﻿var Decorator = (function(){
"use strict";

var ___privateStatic___ = {};
function Decorator(){
	JSComet.checkClass(this, Decorator);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'name', get: (function(){ var z____return = (function name(){return ___private___.z____name;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Decorator#name - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function name(value){

if((value != null) &&(typeof value != 'string'))
 throw "Decorator#name - the property 'value' must be 'string'";
 ___private___.z____name = value; }).apply(___self___, arguments);}) });

		___private___.z____name = null;
___self___.onClass =  (function onClass(target,  type,  baseType){
  var  z____return = (function onClass(target, type, baseType){
        
		throw new SyntaxError((target.constructor.name)+" - Classes cannot be marked as "+(this.name));
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onFunction =  (function onFunction(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onFunction(target, key, descriptor, superDescriptor){
        
		throw new SyntaxError((target.constructor.name)+"#"+(key)+" - Functions cannot be marked as "+(this.name));
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onField =  (function onField(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onField(target, key, descriptor, superDescriptor){
        
		throw new SyntaxError((target.constructor.name)+"#"+(key)+" - Fields cannot be marked as "+(this.name));
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onProperty =  (function onProperty(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onProperty(target, key, descriptor, superDescriptor){
        
		throw new SyntaxError((target.constructor.name)+"#"+(key)+" - Properties cannot be marked as "+(this.name));
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.cloneDescriptor =  (function cloneDescriptor(){if(arguments.length == 1){
  var  z____return = (function cloneDescriptor(descriptor){


if((descriptor != null) &&(typeof descriptor != 'object'))
 throw "Decorator#cloneDescriptor - the parameter 'descriptor' must be 'object'";

        
		return this.cloneDescriptor(description, null);
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 2){
  var  z____return = (function cloneDescriptor(descriptor, informationToBind){


if((descriptor != null) &&(typeof descriptor != 'object'))
 throw "Decorator#cloneDescriptor - the parameter 'descriptor' must be 'object'";

if((informationToBind != null) &&(typeof informationToBind != 'object'))
 throw "Decorator#cloneDescriptor - the parameter 'informationToBind' must be 'object'";

        
		var newDescriptor = Object.create(null);
		
		for(var i in descriptor){
			newDescriptor[i] = descriptor[i];
		}
		
		if(informationToBind){
			for(var i in informationToBind){
				newDescriptor[i] = informationToBind[i];
			}
		}
		
		return newDescriptor;
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Decorator#cloneDescriptor - No overload function takes '+arguments.length+' arguments';});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        
		this.name = this.constructor.name;
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

___privateStatic___.isDescriptor =  (function isDescriptor(desc){ return  (function isDescriptor(desc){
  var  z____return = (function isDescriptor(desc){
        
		
		if(typeof desc != "object")
			return false;
		
		
		for(var i in desc){
			if(i == "value" || i == "get" || i == "set")
				return true;
		}
		return false;
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "Decorator#isDescriptor - the return type must be 'boolean'";
return z____return;}).apply(this, arguments);});
___privateStatic___.isInstanceOf =  (function isInstanceOf(target,  classz){ return  (function isInstanceOf(target,  classz){
  var  z____return = (function isInstanceOf(target, classz){
        
		try{
			return target instanceof classz;
		}catch(ex){
			return false;
		}
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "Decorator#isInstanceOf - the return type must be 'boolean'";
return z____return;}).apply(this, arguments);});
Decorator.decorate =  (function decorate(decorator){
  var  z____return = (function decorate(decorator){


if(decorator !== null && !(decorator instanceof Function))
 throw "Decorator#decorate - the parameter 'decorator' must be 'Function'";

        
	
		var isInstanceOf = ___privateStatic___.isInstanceOf;
		var isDescriptor = ___privateStatic___.isDescriptor;
		var decoratorAction = function(){
			if(arguments.length == 3 && 
			  typeof arguments[0] == "object" && 
			  isInstanceOf(arguments[0], arguments[1]) && 
			  (arguments[2] == null || isInstanceOf(arguments[0], arguments[2]))){
				
				
				var decoratorObj = this ? this : new decorator();
				if(!(decoratorObj instanceof Decorator))
					throw new TypeError("The decorator parameter must inherit the type Decorator");
					
				return decoratorObj.onClass.apply(decoratorObj, arguments);
				
			}else if((arguments.length == 3 || arguments.length == 4) && 
					 isDescriptor(arguments[2]) && 
					 (!arguments[3] || isDescriptor(arguments[3]))){
				
				
				var decoratorObj = this ? this : new decorator();
				if(!(decoratorObj instanceof Decorator))
					throw new TypeError("The decorator parameter must inherit the type Decorator");
					
				var desc = arguments[2];
				
				if(desc.get || desc.set)
					return decoratorObj.onProperty.apply(decoratorObj, arguments);
				if(typeof desc.value == "function")
					return decoratorObj.onFunction.apply(decoratorObj, arguments);
			
				return decoratorObj.onField.apply(decoratorObj, arguments);
				
			}else{
				
				Array.prototype.unshift.call(arguments, null);
				
				var decoratorObj = new (Function.prototype.bind.apply(decorator, arguments));
				if(!(decoratorObj instanceof Decorator))
					throw new TypeError("The decorator parameter must inherit the type Decorator");
					
				return function(){
					return decoratorAction.apply(decoratorObj, arguments);
				};
			}				
		};
		return decoratorAction;
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
return Decorator;
})();
		


module.exports['default'] = Decorator;

return module.exports;
}
};

z____memoryImport['/core/DeprecatedDecorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
﻿
var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var DeprecatedDecorator = (function(Decorator){
"use strict";

var ___privateStatic___ = {};
function DeprecatedDecorator(){
	JSComet.checkClass(this, DeprecatedDecorator);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Decorator.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

		___private___.defaultMessage =  "This function will be removed in future versions.";
___self___.onFunction =  (function onFunction(target,  key,  descriptor,  superDescriptor){
  var  z____return = (function onFunction(target, key, descriptor, superDescriptor){
        
	
		var methodSignature = (target.constructor.name)+"#"+(key);
		var message = this.message;
		if (this.options.url) {
			message += "\n\n    See "+(this.options.url)+" for more details.\n\n";
		}
		var error = this.options.error === true;
		return this.cloneDescriptor(descriptor, {
			value: function(){
				  if(error)
					throw new Error("DEPRECATION "+(methodSignature)+" - "+(message));
				  else
					console.warn("DEPRECATION "+(methodSignature)+": "+(message));
				  return descriptor.value.apply(this, arguments);
			}
		})
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 0){
  var  z____return = (function constructor(){
        
	 __callThisConstructor__.call(this, ___private___.defaultMessage, null);
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 1){
  var  z____return = (function constructor(message){


if((message != null) &&(typeof message != 'string'))
 throw "DeprecatedDecorator#constructor - the parameter 'message' must be 'string'";

        
	 __callThisConstructor__.call(this,message, null);
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 2){
  var  z____return = (function constructor(message, options){


if((message != null) &&(typeof message != 'string'))
 throw "DeprecatedDecorator#constructor - the parameter 'message' must be 'string'";

if((options != null) &&(typeof options != 'object'))
 throw "DeprecatedDecorator#constructor - the parameter 'options' must be 'object'";

        
	 if(typeof Decorator != 'undefined') __callSuperConstructor__.call(this);
		this.name = "deprecated";
		this.message = message || ___private___.defaultMessage;
		this.options = options || {};
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'DeprecatedDecorator#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(DeprecatedDecorator, Decorator);

return DeprecatedDecorator;
})(Decorator);

		

module.exports['default'] = DeprecatedDecorator;

return module.exports;
}
};

z____memoryImport['/core/SealedDecorator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
﻿
var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var SealedDecorator = (function(Decorator){
"use strict";

var ___privateStatic___ = {};
function SealedDecorator(){
	JSComet.checkClass(this, SealedDecorator);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Decorator.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.onClass =  (function onClass(target,  type,  baseType){
  var  z____return = (function onClass(target, type, baseType){
        
		if (target.constructor != type)
		   throw new TypeError((target.constructor.name)+" - Sealed types cannot be inherited");
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        
	 if(typeof Decorator != 'undefined') __callSuperConstructor__.call(this);
		this.name = "sealed";
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(SealedDecorator, Decorator);

return SealedDecorator;
})(Decorator);
		

module.exports['default'] = SealedDecorator;

return module.exports;
}
};


var ____imported = JSComet.include('./core/Decorator.js', false, z____memoryImport);

var Decorator = ____imported.default;;

var ____imported = JSComet.include('./core/AbstractDecorator.js', false, z____memoryImport);

var AbstractDecorator = ____imported.default;;

var ____imported = JSComet.include('./core/SealedDecorator.js', false, z____memoryImport);

var SealedDecorator = ____imported.default;;

var ____imported = JSComet.include('./core/DeprecatedDecorator.js', false, z____memoryImport);

var DeprecatedDecorator = ____imported.default;;


var abstract = Decorator.decorate(AbstractDecorator);
module.exports.abstract = abstract;

var sealed = Decorator.decorate(SealedDecorator);
module.exports.sealed = sealed;

var deprecated = Decorator.decorate(DeprecatedDecorator);
module.exports.deprecated = deprecated;

		

module.exports.Decorator = Decorator;
