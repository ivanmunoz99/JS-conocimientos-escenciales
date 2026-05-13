const usuario = {
	nombre: 'Carlos',
	edad: 27,
	amigos: ['Alejandro', 'Cesar', 'Manuel'],
	saludo: () => {
		console.log('Hola!');
	},
};

/*
	📌 Métodos propios
	Los objetos pueden tener métodos personalizados.
*/
usuario.saludo();

// ----------------------------------------------------------------------------

/*
	📌 Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
const resultado = Object.keys(usuario);
console.log(resultado);

// -----------------------------------------------------------------------------

/*
📌 Object.values()
Nos devuelve un arreglo con los valores (values) del objeto.
*/
const resultado2 = Object.values(usuario);
console.log(resultado2);

// -----------------------------------------------------------------------------

/*
	📌 Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
const resultado3 = Object.entries(usuario);
console.log(resultado3);

/*
	Con estos métodos se pueden hacer muchas cosas,
	como por ejemplo usarlos para contar el numero de propiedades.
*/
const entradas = Object.entries(usuario);
console.log(`El objeto tiene ${entradas.length} propiedades`);

