
 function add(arg1 , arg2){
     console.log("Addition  = "+(arg1+arg2));
 }

 function sub(arg1 , arg2){
    console.log(" sub  = "+(arg1-arg2));
}

//Istead of concatinationopera
// function mul(a , b){
//      console.log(`Mul = ${a * b}`);
// }

exports.addOpe = add;
exports.subOpe = sub;
//Lamda Expreseeions
exports.mulOpe =  (a , b)=>{
                         console.log(`Mul = ${a * b}`);
                        };