const i=10;
//No- return value functions
function sayHello(name){
     console.log("Welcome  ... "+name);
}

//calling func
//sayHello("Sam");

//lets export functions
//module is global obect - default Object

module.exports.myFunc = sayHello; //public
module.exports.myvar = i; //public 


//or

exports.myFunc = sayHello;
exports.myvar = i; 

