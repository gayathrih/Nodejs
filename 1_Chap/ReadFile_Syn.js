
//Reading text file and printing on console

/* fs (FileSystem) - Node core module*/

 var myFileSystem = require("fs");//import java.io.*;
 
  console.log("Prg started..!");
    var fileData=myFileSystem.readFileSync("data.txt");
	  console.log(fileData.toString());
	  console.log("Prg ended!!!!");
 

