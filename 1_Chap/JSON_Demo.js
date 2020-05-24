//JSON

var http=require("http");

   var empjsonObj= {name : "Smith",
                    role: "devleoper",
					companyName:"XYZ Company"
					}
  var httpserver= http.createServer( function(req, res){
                   res.writeHead(200 , {"content-type":"application/json"});
				   res.write("This is JSOn Object");
				   res.end(JSON.stringify(empjsonObj));
     });
	 
	 console.log("server started..!");
	 
	 httpserver.listen(1234);
	 
	
	 