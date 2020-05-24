
var myHttpModule = require("http");
    
     var myserver= myHttpModule.createServer( function(req,res){
		                              res.writeHead(200 , {"content-type" : "text/plain"});
									  res.end("Welcome to Node Server Application");
	                              }
	                           );
   console.log("Server started....");
	myserver.listen(1212);
	console.log("server stopped!!!!");