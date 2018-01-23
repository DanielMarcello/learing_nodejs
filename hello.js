var http = require("http");

var manejador = function(solicitud, respuesta){
	console.log("hola mundo en terminal");
	respuesta.end("hola mundo");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);