/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/

var obtenerNumeroLetras = (nombre) => {
	var numero = nombre.length;

	// Podemos acceder dentro de la función al numero
	console.log(`${nombre} tiene ${numero} letras`);

	// Podemos acceder a numero dentro desde cualquier parte DENTRO de la función
	// Incluso otra funcion
	var funcionAnidada = () => {
		// Podemos acceder a numero porque sigue estando dentro de la funcion donde fue definida.
		console.log(numero);
	};
	funcionAnidada();
};

obtenerNumeroLetras('ivan');

// Fuera de la funcion no podemos acceder a la variable numero.
console.log(numero); // variable is not defined