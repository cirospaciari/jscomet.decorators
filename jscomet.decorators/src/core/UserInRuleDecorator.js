import Decorator from './core/Decorator.js';
import { Controller } from 'jscomet.core';

class UserInRuleDecorator extends Decorator {
  
  constructor(ruleName: string) {
    super();
    this.name = "userInRule";

    this.ruleName = ruleName;
  }
  
  onFunction(target, key, descriptor, superDescriptor) {
    if(!(target instanceof Controller)){
		throw new TypeError("userInRule decorator can only be used in jscomet.core@Controller actions");
	}
	var toAsync = function(result){
		if(result instanceof Promise)
			return result;
		return new Promise((resolve)=>{
			resolve(result);
		});
	}
	var ruleName = this.ruleName;
    return this.cloneDescriptor(descriptor, {
      value: function () {
		var parameters = arguments;
		var controller = this;
		return new Promise((resolve, reject)=>{
			var ruleResult = UserInRuleDecorator.userIsInRule.call(null, controller, ruleName);
			toAsync(ruleResult)
			.then((isInRule)=>{
				var result = null;
				if(isInRule === true){
					result = descriptor.value.apply(controller, parameters);		
				}else{
					result = isInRule;
				}
				
				toAsync(result)
				.then((actionResult)=> resolve(actionResult))
				.catch((error)=> reject(error));
			})
			.catch((error)=> reject(error));
		});
      }
    });
  }
  
  static userIsInRule(){
	  return true;//default
  }
  
  static setRuleValidator(action: Function){
	if(!action){
		throw new TypeError("userInRule#setRuleValidator action parameter need to be a Function");
	}
	UserInRuleDecorator.userIsInRule = action;
  }
}
var userInRule = Decorator.decorate(UserInRuleDecorator);
userInRule.setRuleValidator = UserInRuleDecorator.setRuleValidator;
export default userInRule;
