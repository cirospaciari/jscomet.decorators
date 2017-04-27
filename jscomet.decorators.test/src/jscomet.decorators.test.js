global.JSComet = require('./libs/jscomet.js')['default'];

import { abstract, sealed, deprecated, httpRequest, httpGet, httpPost, memoryCache, Decorator } from './libs/jscomet.decorators.js';

@abstract
class Test {

  name: string = "ciro";
  surname: string = "spaciari";

  @deprecated("This function will be removed in future versions. DON'T USE THIS!", {error: true })
  test(code: int) {

  }
}

@sealed
class Test2 extends Test {
  name: string = "ciro";
}

class Test3 extends Test2 {

}

function logTest(executor) {

  try {
    console.log(executor());
  } catch (ex) {
    console.error(ex);
  }
}

httpRequest.loadSettings({
  //googleUrl: "https://www.google.com.br"
  httpBinTestGet: "http://httpbin.org/get",
  httpBinTestPost: "http://httpbin.org/post"
});
class Site {
  counter = 0;
  
  @httpGet("@setting:httpBinTestGet?s={0}")
   google(search: string) {
	   console.log("error :c", httpRequest.getLastError());
    return null;
  }

  //@httpRequest("@setting:googleUrl?s={search}", { method: "post" })
  @httpPost("@setting:httpBinTestPost?s={search}")
  google2(data: object) {
	 console.log("error :c", httpRequest.getLastError());
    return null;
  }
  
  @memoryCache(1000)
  add(){
	  this.counter++;
	  return this.counter;
  }
  
  @memoryCache(10000)
  async addAsync(){
      this.counter++;
	  return this.counter;
  }
  addWithoutCache(){
	  this.counter++;
	  return this.counter;
  }
}

var site = new Site();
for(var i = 0; i < 1000; i++)
	site.add();

console.log("cached value", site.counter);

setTimeout(function(){
	site.add();
	console.log("new cached value", site.add());
}, 1500);
site = new Site();
for(var i = 0; i < 1000; i++){
	site.addWithoutCache();
}
console.log("without cache value", site.counter);

site = new Site();
var promises = [];
site.addAsync().then(function(){
	for(var i = 0; i < 1000; i++){
	promises.push(site.addAsync());
}
});


Promise.all(promises).then(()=>{
	site.addAsync().then(function(counter){
		console.log("promise cached value", counter);
	});
})


//logTest(() => new Site().google("jscomet"));
//new Site().google2({search: "jscomet"}, { name: "ciro" }).then((a)=> console.log("resposta!", a, typeof a));
// new Site().google("jscomet").then((a)=> console.log("resposta!", a, typeof a));

//[TypeError: Test - Cannot construct abstract instances directly]
// logTest(() => new Test());

// logTest(() => new Test2());
// //[Error: DEPRECATION Test2#test - This function will be removed in future versions. DON'T USE THIS!]
// logTest(() => new Test2().test());
// //[TypeError: Test3 - Sealed types cannot be inherited]
// logTest(() => new Test3());
