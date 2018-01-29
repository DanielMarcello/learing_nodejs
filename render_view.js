function render(html, parametros){
	var html_string = html.toString();
	var variables = html_string.match(/[^\{\}]+(?=\})/g);

	//asigna a variable {nombre} del html el valor ingresado en el input "nombre"
	for (var i = 0; i < variables.length; i++) {
		var value = parametros["nombre"];
		html_string = html_string.replace("{"+variables[i]+"}", value)
	}

	return html_string;
}

module.exports.render = render;