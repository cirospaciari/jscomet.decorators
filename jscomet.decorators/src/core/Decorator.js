class Decorator{
	
	name:string;
	
	constructor(){
		this.name = this.constructor.name;
	}
	
	onClass(target, type, baseType){
		throw new SyntaxError(`${target.constructor.name} - Classes cannot be marked as ${this.name}`);
	}
	
	onFunction(target, key, descriptor, superDescriptor){
		throw new SyntaxError(`${target.constructor.name}#${key} - Functions cannot be marked as ${this.name}`);
	}
	
	onField(target, key, descriptor, superDescriptor){
		throw new SyntaxError(`${target.constructor.name}#${key} - Fields cannot be marked as ${this.name}`);
	}
	
	onProperty(target, key, descriptor, superDescriptor){
		throw new SyntaxError(`${target.constructor.name}#${key} - Properties cannot be marked as ${this.name}`);
	}
	
	cloneDescriptor(descriptor: object){
		return this.cloneDescriptor(description, null);
	}
	
	cloneDescriptor(descriptor: object, informationToBind: object){
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
	}
	
	private static isDescriptor(desc) : boolean {
		
		if(typeof desc != "object")
			return false;
		
		
		for(var i in desc){
			if(i == "value" || i == "get" || i == "set")
				return true;
		}
		return false;
	}
	
	private static isInstanceOf(target, classz): boolean {
		try{
			return target instanceof classz;
		}catch(ex){
			return false;
		}
	}

	static decorate(decorator: Function){
	
		var isInstanceOf = Decorator.isInstanceOf;
		var isDescriptor = Decorator.isDescriptor;
		var decoratorAction = function(){
			if(arguments.length == 3 && 
			  typeof arguments[0] == "object" && 
			  isInstanceOf(arguments[0], arguments[1]) && 
			  (arguments[2] == null || isInstanceOf(arguments[0], arguments[2]))){
				//is class call (no arguments in constructor)
				
				var decoratorObj = this ? this : new decorator();
				if(!(decoratorObj instanceof Decorator))
					throw new TypeError("The decorator parameter must inherit the type Decorator");
					
				return decoratorObj.onClass.apply(decoratorObj, arguments);
				
			}else if((arguments.length == 3 || arguments.length == 4) && 
					 isDescriptor(arguments[2]) && 
					 (!arguments[3] || isDescriptor(arguments[3]))){
				//is description call (no arguments in constructor)
				
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
				//is constructor call (with arguments in constructor)
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
	}
}
		

export default Decorator;