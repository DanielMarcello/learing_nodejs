function parse(req){
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

	return parametros;
}

module.exports.parse = parse