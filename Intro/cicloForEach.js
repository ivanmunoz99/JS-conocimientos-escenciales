/*
	📌 Ciclo forEach
	Es un metodo de los arreglos que podemos usar para recorrer los elementos.
*/

const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.forEach((amigo, index) => console.log(`El amigo #${index} es: ${amigo}`));

// -------------------------------------------------------------------------------------------

/*
	📌 Ciclo for in
	Nos permite recorrer las propiedades de un objeto.
*/
const persona = {
	nombre: 'Carlos',
	edad: 27,
	correo: 'correo@correo.com',
};

for (valores in persona) { // for(nombre que quiera in poner el objeto){}
    // Ejemplo para borrar los valores de todas las propiedades.
    persona[valores] = '';
}
console.log(persona)

// ------------------------------------------------------------------------------------------

/*
	📌 Ciclo for of
	Nos permite recorrer los valores de un objeto iterable.
	Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
*/
// Obtenemos una colección HTML de las etiquetas.
const etiquetas = document.head.children;

// Las mostramos en pantalla.
for (elemento of etiquetas) {
	// console.log(elemento);
}

// Esto no funciona, porque etiquetas no tiene el metodo forEach.
// etiquetas.forEach((e) => console.log(e));

// Un truco para seguir usando forEach y no for of es transformar la colección a un arreglo
[...etiquetas].forEach((e) => console.log(e));

