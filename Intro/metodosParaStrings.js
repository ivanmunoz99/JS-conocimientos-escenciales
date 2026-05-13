/*
	📌 Métodos y propiedades para cadenas de texto
*/

/*
	📌 .length - Devuelve el numero de caracteres de una cadena de texto 
*/
/* const texto = 'Hola yo soy Carlos!';
console.log(texto.length);  // 19
 */
// ------------------------------------------------------------------------------------------

/*
	📌  .indexOf() 
        .lastIndexOf() 
        - Devuelve el index del primer/último caracter especificado.
*/
/* const texto = 'Hola yo soy Carlos!';
console.log(texto.indexOf('o')); // 1
console.log(texto.lastIndexOf('o')); // 16
 */
// ------------------------------------------------------------------------------------------

/*
	📌 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/
const texto = 'Hola yo soy Carlos!';
const index = texto.indexOf('C'); // obtiene el index en este caso 12
const lastIndex = texto.lastIndexOf('s'); // obtiene el ultimo index en este caso 17
console.log(texto.slice(index, lastIndex + 1)); // trae Carlo y se suma uno para traer hasta el index 18
console.log(texto.slice(12, 18)); // Carlos

// La cadena de texto original no es modificada.
// Si solo establecemos el primer parametro cortara desde esa posición.
// Si ponemos un valor negativo indicamos que queremos empezar de derecha a izquierda.
//console.log(texto.slice(-7, -1)); // Carlos

// ------------------------------------------------------------------------------------------

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/
const texto2 = 'Hola yo soy Carlos!';
console.log(texto2.replace('Carlos', 'Arturo')); // Hola yo soy Arturo!

// -------------------------------------------------------------------------------------------

/*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/
const texto3 = 'Hola yo soy Carlos!';
console.log(texto3.split(' ')); // un espacio para indicar donde cortar cada elemento

// -------------------------------------------------------------------------------------------

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
const texto4 = 'Hola yo soy Carlos!';
console.log(texto4.toUpperCase());
console.log(texto4.toLowerCase());

// --------------------------------------------------------------------------------------------

/*
	📌 Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.

	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/
const texto5 = '    Hola yo soy Carlos!   ';
console.log(texto5);

console.log(texto5.trim());
console.log(texto5.trimStart());
console.log(texto5.trimEnd());