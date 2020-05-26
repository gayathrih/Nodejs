const pathObj  = require("path");

var res = pathObj.parse(__filename);

console.log(res);

var res2= pathObj.parse(__dirname);
console.log(res2);