function BoardMember(name, homeState, training, veto){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = function(){
    var result = 'No, I must disagree'
    return result}
  this.approve = function(){
    let result = "You can do that!" 
    return result}
  this.doChartiy = function(){let result = "You can do that!" return result};
  this.releasePressStatement = function(){console.log("You will see great things from Scuber.")};
  this.sayHi = function(){console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`)};
}
