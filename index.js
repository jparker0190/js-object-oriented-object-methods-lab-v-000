function BoardMember(name, homeState, training, veto){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = function(){
    var result = 'No, I must disagree'
    return result}
  this.doChartiy = function(){console.log(`You can do that!`)};
  this.releasePressStatement = function(){console.log("You will see great things from Scuber.")};
  this.sayHi = function(){console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`)};
}
