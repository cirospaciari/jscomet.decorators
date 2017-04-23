global.JSComet = require('./libs/jscomet.js')['default'];

import { abstract, sealed, deprecated, Decorator } from './libs/jscomet.decorators.js';
 
@abstract
class Test{
 
    name: string = "ciro";
    surname: string = "spaciari";
    
    @deprecated("This function will be removed in future versions. DON'T USE THIS!", { error: true })
    test(code: int){
    
    }
}
 
@sealed
class Test2 extends Test{
    name: string = "ciro";
}

class Test3 extends Test2{
	
}

function logTest(executor){
	
	try{
		console.log(executor());
	}catch(ex){
		console.error(ex);
	}
}


//[TypeError: Test - Cannot construct abstract instances directly]
logTest(()=> new Test());

logTest(()=> new Test2());
//[Error: DEPRECATION Test2#test - This function will be removed in future versions. DON'T USE THIS!]
logTest(()=> new Test2().test());
//[TypeError: Test3 - Sealed types cannot be inherited]
logTest(()=> new Test3());