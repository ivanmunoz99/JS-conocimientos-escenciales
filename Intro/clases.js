/*
	📌 Clases
	Las clases son plantillas que podemos usar para crear objetos.
	Sirven para encapsular código.
*/

/*
	📌 Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/

// class NombreDeLaClase {
// 	constructor() {
// 		//... Código del constructor
// 	}
// }

class Usuario {
    /* Propiedades
		Son variables dentro de la clase.
		Sirven para guardar informacion relacionada y que la clase pueda utilizarla.
	*/
    tipo = 'usuario';

    /*  📌 Metodo constructor
		Se ejecuta automaticamente cada vez que hacemos un nuevo objeto con la clase.
		Se usa para inicializar las propiedades.
		En este caso toma el nombre y apellido y establece los valores en las propiedades.
	*/

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('usuario nuevo')
    }

    // Metodos
    obtenerDatos() {
        console.log('obteniendo Datos de la DB');
        return `${this.nombre} ${this.apellido}`
    }
}

// Con la clase podemos crear objetos:
const usuario = new Usuario('Ivan', 'Muñoz');
// Accedemos a los metodos
console.log(usuario.obtenerDatos());

const usuario2 = new Usuario('Dario', 'Andrade');
// Accedemos a los metodos
console.log(usuario2.obtenerDatos());

// Accedemos a las propiedades
console.log(usuario.tipo);
console.log(usuario.apellido);