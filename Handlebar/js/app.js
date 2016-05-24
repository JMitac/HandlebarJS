// aqui seleccionamos el template y vamos a seleccionar todo este html
var source = $('#template_persona').html();
// despues de eso compilamos el template
var template = Handlebars.compile(source);
// Vamos a crear nuestro propio helpers, le pasamos el nombre del helper(enumeracion) y una function
Handlebars.registerHelper('enumeracion',function(pvalor, operador, svalor){
	pvalor = parseFloat(pvalor);
	svalor = parseFloat(svalor);
	var operadores = {
		'+': pvalor + svalor,
		'*': pvalor * svalor,
		'-': pvalor - svalor
	}
	// Todo Helpers tiene que retornar un valor
	return operadores[operador]
});

$.ajax({
	url: 'https://restcountries-v1.p.mashape.com/all',
	type: 'GET',
	dataType: 'json',
	headers: { 'X-Mashape-Key': 'MRQYcU6WRKmshvqdF1SqGLFoPTknp18JA5HjsnM3NOfZdXkLrE' }
})
.done(function(data){/*voy a decirle que me traiga toda la data*/
	//y que me imprima la data
	var html = template({'country' : data});
	$('.container').html(html);
})
.fail(function(){
	console.log("error");
})
.always(function(){
	console.log("complete");
});

// vamos a declarar un objeto persona
var personas = [
	{
		nombre: "Julio",
		apellido: "Mitac",
		correo: "jmitac@gmail.com"
	},
	{
		nombre: "Carlos",
		apellido: "Casa",
		correo: "carlos123@gmail.com"
	},
	{
		nombre: "Mabel",
		apellido: "Mitac",
		correo: "mabel54@gmail.com"
	}
];
// Importante: Handlebars solo recibe objetos
// El html que vamos a pintar y pasamos el objeto
// en este caso le mandamos un objeto 'personas' con propiedad persona
// var html = template({'persona' : personas});
//Lo vamos a pintar en la clase container
// $('.container').html(html);