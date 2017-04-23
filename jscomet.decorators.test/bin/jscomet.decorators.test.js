global.JSComet = require('./libs/jscomet.js')['default'];


var ____imported = JSComet.include('./libs/jscomet.decorators.js', false);

var abstract = ____imported.abstract;
var sealed = ____imported.sealed;
var deprecated = ____imported.deprecated;
var Decorator = ____imported.Decorator;;
 
var Test = (function(){
"use strict";

var ___privateStatic___ = {};
function Test(){
	JSComet.checkClass(this, Test);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

	abstract(___self___, Test, null);

JSComet.defineProperty(___self___, { enumerable: false, key: 'name', get: (function(){ var z____return = (function name(){return ___private___.z____name;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Test#name - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function name(value){

if((value != null) &&(typeof value != 'string'))
 throw "Test#name - the property 'value' must be 'string'";
 ___private___.z____name = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'surname', get: (function(){ var z____return = (function surname(){return ___private___.z____surname;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Test#surname - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function surname(value){

if((value != null) &&(typeof value != 'string'))
 throw "Test#surname - the property 'value' must be 'string'";
 ___private___.z____surname = value; }).apply(___self___, arguments);}) });

		___private___.z____name =  "ciro";
		___private___.z____surname =  "spaciari";
___self___.test =  (function test(code){
  var  z____return = (function test(code){


if((typeof code != 'number') ||
 code !== parseInt(code, 10)|| isNaN(code)
 || code > 2147483647
 || code < -2147483648)
 throw "Test#test - the parameter 'code' must be a integer between -2147483648 and 2147483647";

        
    
    }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});(function($super){	
var desc = Object.getOwnPropertyDescriptor(this || Test, 'test');
	
 var superDescriptor = null;
	
desc =deprecated("This function will be removed in future versions. DON'T USE THIS!", { error: true })(this, 'test', desc) || desc;
	
Object.defineProperty(this || Test, 'test', desc);
}).call(___self___);

		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Test;
})();
 
var Test2 = (function(Test){
"use strict";

var ___privateStatic___ = {};
function Test2(){
	JSComet.checkClass(this, Test2);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Test.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

	sealed(___self___, Test2, Test);

JSComet.defineProperty(___self___, { enumerable: false, key: 'name', get: (function(){ var z____return = (function name(){return ___private___.z____name;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Test2#name - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function name(value){

if((value != null) &&(typeof value != 'string'))
 throw "Test2#name - the property 'value' must be 'string'";
 ___private___.z____name = value; }).apply(___self___, arguments);}) });

		___private___.z____name =  "ciro";
		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
            if(typeof Test != 'undefined') __callSuperConstructor__.call(this);}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(Test2, Test);

return Test2;
})(Test);

var Test3 = (function(Test2){
"use strict";

var ___privateStatic___ = {};
function Test3(){
	JSComet.checkClass(this, Test3);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Test2.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
            if(typeof Test2 != 'undefined') __callSuperConstructor__.call(this);}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(Test3, Test2);

return Test3;
})(Test2);

function logTest(executor){
	
	try{
		console.log(executor());
	}catch(ex){
		console.error(ex);
	}
}



logTest(((function(_this){ return (function(){return (function (){
    return new Test();}).apply(_this,arguments)});})(this)));

logTest(((function(_this){ return (function(){return (function (){
    return new Test2();}).apply(_this,arguments)});})(this)));

logTest(((function(_this){ return (function(){return (function (){
    return new Test2().test();}).apply(_this,arguments)});})(this)));

logTest(((function(_this){ return (function(){return (function (){
    return new Test3();}).apply(_this,arguments)});})(this)));



