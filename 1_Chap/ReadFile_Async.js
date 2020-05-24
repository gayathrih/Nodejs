
var myfilesystem=require("fs");
  console.log("Prg started...!");
    myfilesystem.readFile("data.txt",function(err,input){
		                                if(err) 
											console.log(err);
										else
											console.log(input.toString());
		
	                                 }
						);
	  console.log("Prg Ended...!");					
	  
	  
	 /* callback func;
	    function as an argument to another function is called callback function...
		*/