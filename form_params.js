var http = require("http");
var fs = require("fs");
var parser = require("./params_parser.js");
var render = require("./render_view.js");

//crea servidor con puerto 8080
http.createServer(function(req,res){
	// lee archivo html
	fs.readFile("./index2.html", function(err,html){
		var parametros = parser.parse(req);

		res.writeHead(200,{
			'Content-Type': 'text/html'
		})

		res.write(render.render(html,parametros));
		res.end();
	});
}).listen(8080);
