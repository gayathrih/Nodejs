//Read- Write file  using Sync

  var myFileSystem=require("fs");
    console.log("...prg started..");
	
	 myFileSystem.mkdirSync("app2");
	      console.log("...Directory Created..");
		  
	myFileSystem.writeFileSync(".//app2//src.txt" ,"we are performing file operations using fs module","utf8");
         console.log("..File created with text ..");

    var data = myFileSystem.readFileSync(".//app2//src.txt");
	console.log(data.toString());
	
	myFileSystem.unlinkSync(".//app2//src.txt");
	   console.log("..File si deleted");
	   
	 myFileSystem.rmdirSync("app2");  
	 console.log("..Dir deleted");
	
	   console.log("Done!!!!!");