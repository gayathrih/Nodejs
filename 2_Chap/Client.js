
var myModule=require("./currentDate");

    var myhttp=require("http");
	  myhttp.createServer(  function(req , res){
		  
		      res.writeHead(200 , {"content-type":"text/html"});
			  res.write("Today Date : "+myModule.mydate());
	  }).listen(1234);