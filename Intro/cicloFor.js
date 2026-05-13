/* 
	📌 Ciclos
	Los ciclos son estructuras que nos van a permitir repetir 
	un bloque de código cuantas veces necesitemos.
*/

const nombres = ['Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel'];
const obtener = nombres.forEach((nombre) => {
    // console.log(nombre);
});
// console.log(`Hola ${nombres[0]}`);
// console.log(`Hola ${nombres[1]}`);
// console.log(`Hola ${nombres[2]}`);
// Ahora imaginemos que tenemos 100 nombres, o 1000.

/* 
	📌 Ciclo For
	Repite un bloque de código mientras se cumpla una condición.

	Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
	Expresión 2: Una condicion, mientras se cumpla se ejecutara el bloque de código.
	Expresión 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque de código.
*/

// for(expresion1 ; expresion2 ; expresion3){
//     Bloque de código a repetir
// }

/* 
	📌 Ejemplo de bloque sencillo donde contamos del 1 al 10
*/
for (let numero = 1; numero < 11; numero++) {
	// console.log(numero);
}
// ---------------------------------------------------------------------
/* 
	📌 Contar del 1 al 100 con incrementos de 5
*/
// ---------------------------------------------------------------------
for (let numero = 5; numero <= 100; numero = numero + 5) {
	// console.log(numero);
}
// for (let numero = 5; numero <= 100; numero += 5) {  // otra opcion
// 	console.log(numero);
// }
// ----------------------------------------------------------------------
/* 
	📌 Contar del 50 al 1
*/
// ----------------------------------------------------------------------
for (let numero = 50; numero > 0; numero--) {
	// console.log(numero);
}
// ----------------------------------------------------------------------
/* 
	📌 Recorrer un arreglo con el ciclo for
*/
for (let i = 0; i < nombres.length; i++) {
	// console.log(nombres[i]);
}
