global.JSComet = require('./libs/jscomet.js')['default'];


var ____imported = JSComet.include('./libs/jscomet.decorators.js', false);

var abstract = ____imported.abstract;
var sealed = ____imported.sealed;
var deprecated = ____imported.deprecated;
var httpRequest = ____imported.httpRequest;
var httpGet = ____imported.httpGet;
var httpPost = ____imported.httpPost;
var memoryCache = ____imported.memoryCache;
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
	
desc =deprecated("This function will be removed in future versions. DON'T USE THIS!", {error: true })(this, 'test', desc) || desc;
	
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

function logTest(executor) {

  try {
    console.log(executor());
  } catch (ex) {
    console.error(ex);
  }
}

httpRequest.loadSettings({
  
  httpBinTestGet: "http://httpbin.org/get",
  httpBinTestPost: "http://httpbin.org/post"
});
var Site = (function(){
"use strict";

var ___privateStatic___ = {};
function Site(){
	JSComet.checkClass(this, Site);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

		this.counter =  0;
___self___.google =  (function google(search){
  var  z____return = (function google(search){


if((search != null) &&(typeof search != 'string'))
 throw "Site#google - the parameter 'search' must be 'string'";

        
	   console.log("error :c", httpRequest.getLastError());
    return null;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});(function($super){	
var desc = Object.getOwnPropertyDescriptor(this || Site, 'google');
	
 var superDescriptor = null;
	
desc =httpRequest("@setting:httpBinTestGet?s={0}")(this, 'google', desc) || desc;
	
Object.defineProperty(this || Site, 'google', desc);
}).call(___self___);

___self___.google2 =  (function google2(data){
  var  z____return = (function google2(data){


if((data != null) &&(typeof data != 'object'))
 throw "Site#google2 - the parameter 'data' must be 'object'";

        
	 console.log("error :c", httpRequest.getLastError());
    return null;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});(function($super){	
var desc = Object.getOwnPropertyDescriptor(this || Site, 'google2');
	
 var superDescriptor = null;
	
desc =httpPost("@setting:httpBinTestPost?s={search}")(this, 'google2', desc) || desc;
	
Object.defineProperty(this || Site, 'google2', desc);
}).call(___self___);

___self___.add =  (function add(){
  var  z____return = (function add(){
        
	  this.counter++;
	  return this.counter;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});(function($super){	
var desc = Object.getOwnPropertyDescriptor(this || Site, 'add');
	
 var superDescriptor = null;
	
desc =memoryCache(1000)(this, 'add', desc) || desc;
	
Object.defineProperty(this || Site, 'add', desc);
}).call(___self___);

___self___.addAsync =  (function addAsync(){
  var  z____return = (function addAsync(){return __async(function*(){
        
      this.counter++;
	  return this.counter;
  }.call(this))}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});(function($super){	
var desc = Object.getOwnPropertyDescriptor(this || Site, 'addAsync');
	
 var superDescriptor = null;
	
desc =memoryCache(10000)(this, 'addAsync', desc) || desc;
	
Object.defineProperty(this || Site, 'addAsync', desc);
}).call(___self___);

___self___.addWithoutCache =  (function addWithoutCache(){
  var  z____return = (function addWithoutCache(){
        
	  this.counter++;
	  return this.counter;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Site;
})();



	




	
	



	






	
	





	
		
	





new Site().google("jscomet").then(((function(_this){ return (function(){return (function (a){
    return console.log("resposta!", a, typeof a);}).apply(_this,arguments)});})(this)));











function __async(g){return new Promise(function(s,j){function c(a,x){try{var r=g[x?"throw":"next"](a)}catch(e){j(e);return}r.done?s(r.value):Promise.resolve(r.value).then(c,d)}function d(e){c(e,1)}c()})}
