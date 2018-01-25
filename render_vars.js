var http = require("http");
var fs = require("fs");

fs.readFile("./index2.html", function(err,html){
	http.createServer(function(req,res){
		var html_string = html.toString();

		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var nombre = "Daniel";
		
		//reemplaza palabras que estan entre "{}"
		for (var i = 0; i <= variables.length; i++) {
			var value = eval(variables[i]);
			html_string = html_string.replace("{"+variables[i]+"}", value)
		}

		res.writeHead(200,{
			'Content-Type': 'text/html'
		})
		res.write(html_string);
		res.end();
	}).listen(8080);
});
