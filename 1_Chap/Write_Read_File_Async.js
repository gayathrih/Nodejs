//Wrire- Read -File -Async

var myFileSystem=require("fs");
  console.log("prg statered..!");
 myFileSystem.mkdir("mydir2", function(){
	                       myFileSystem.writeFile(".//mydir2//src.txt" ,
						                               "hello hai welcome to Node",
													   "utf8",function(){
														              myFileSystem.readFile(".//mydir2//src.txt",
																	                              function(err,data){
																									 if(err) console.log(err);
                                                                                                      else 
																										 console.log(data.toString());							               																		 
																								  }
																								)
													           }
													   )
	                      
                      }
				);
				
				myFileSystem.unlink(".//mydir2//src.txt",function(){
					                                      myFileSystem.rmdir("mydir2");
														  });
console.log("Prg Ended!!!!!");