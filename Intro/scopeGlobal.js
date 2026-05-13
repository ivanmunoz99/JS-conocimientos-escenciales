/*
	El scope de javascript (ambito de las variables) determina si podemos
	 acceder a una variable o no en ciertas partes de nuestro código.
*/
/*
	- Global Scope o Variables Globales - Podemos acceder a las variables desde cualquier parte del código.
	- Function Scope - Las variables creadas dentro de una funcion solo pueden ser accedidas dentro de la función.
	- Block Scope (desde ES6) - Las variables creadas dentro de un bloque { } no pueden ser accedidas fuera del bloque.
		- Utilizamos const y let
*/

/* 📌 Global Scope o Variables Globales
	- Son las variables declaradas fuera de una funcion.
	- Podemos acceder a ellas desde cualquier parte del código.
	- Podemos usar const, let y var.
*/

var nombre = 'Carlos'; // Variable global

// Podemos acceder a la variable fuera de una función
console.log(nombre); // Carlos

const saludo = () => {
	// Podemos acceder a la variable dentro de una función
	console.log('Hola ' + nombre); // Hola Carlos

	// Podemos cambiar su valor.
	nombre = 'Arturo';
	console.log(`El nuevo nombre es: ${nombre} `);
};
saludo();