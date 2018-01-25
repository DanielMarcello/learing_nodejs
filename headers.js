var http = require("http");
var fs = require("fs");

fs.readFile("./index.html", function(err,html){
	http.createServer(function(req,res){
		res.writeHead(200,{
			'Content-Type': 'application/json'
		})
		res.write(JSON.stringify({nombre:"Daniel", username:"daniel"}));
		res.end();
	}).listen(8080);
});
