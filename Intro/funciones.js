/*
	Las funciones son bloques de código que nos permiten repetir acciones sin tener que duplicar código.
	Un ejemplo muy común de donde se utilizan es cuando presionamos un boton, invocamos una funcion y ejecuta el codigo.
*/

// 📌 Forma #1
/* function saludo() {
    console.log('Hola!');
} */
// saludo(); // Invocamos la funcion

/* 📌 Invocamos la funcion
	Podemos invocar las funciones dentro de nuestro código, o con diferentes eventos.
	Por ejemplo cuando el usuario de click en un boton.
	
	Nota: Los parentesis son lo que invoca la función. Si no usamos parentesis solo tenemos una referencia de la función.
*/

// 📌 Forma #2 - Asignando una funcion a una variable.
/* const saludo = function () {
    console.log('saludo desde una variable');
}; */

// 📌 Forma #3 - Función de tipo flecha
const saludo = () => {
    console.log('saludo desde una funcion tipo flecha');
}

//   -------------->  pasar a parametros.js para ver parametros y Argumentos de funcion  <--------------------------------