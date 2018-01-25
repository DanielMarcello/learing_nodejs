var http = require("http");
var fs = require("fs");

//crea servidor con puerto 8080
http.createServer(function(req,res){
	// lee archivo html
	fs.readFile("./index2.html", function(err,html){
		var html_string = html.toString();
		var variables = html_string.match(/[^\{\}]+(?=\})/g);

		var url_parametros = [];
		var parametros = {};

		
		//evalua si recibe parametros en la url
		if(req.url.indexOf("?") > 0)
		{
			var url_data = req.url.split("?"); //extrae el string de parametros
			url_parametros = url_data[1].split("&"); //divide los parametros en un arreglo
		}

		
		//crea JSON de los parametros extraidos
		for (var i = 0; i < url_parametros.length; i++) {
			var split_params = url_parametros[i].split("=");
			parametros[split_params[0]] = split_params[1];
		}
		
		
		//asigna a variable {nombre} del html el valor ingresado en el input "nombre"
		for (var i = 0; i < variables.length; i++) {
			var value = parametros["nombre"];
			html_string = html_string.replace("{"+variables[i]+"}", value)
		}

		res.writeHead(200,{
			'Content-Type': 'text/html'
		})
		res.write(html_string);
		res.end();
	});
}).listen(8080);
