/*
	Métodos más importantes para trabajar con numeros
*/

/*
	📌 .toString()
*/
// const numero = 10;
// console.log(numero, typeof numero);
// const texto = numero.toString();
// console.log(numero, typeof texto);

// --------------------------------------------------------------------------------

/*
	📌 .toFixed()
	Permite obtener un numero con la cantidad de decimales especificados
*/
const numero = 3.141516;
console.log(numero.toFixed()); // 3
console.log(numero.toFixed(1)); // 3.1
console.log(numero.toFixed(10)); // 3.1415000000

// ---------------------------------------------------------------------------------

/*
	📌 .parseInt()
	Intenta transformar un valor a un entero.
*/
// Muy útil para transformar de una cadena de texto a numero.
// Por ejemplo al trabajar con formularios.

// Ejemplo donde en vez de sumar los numeros, los concatena por ser cadenas de texto
// const numero1 = prompt('Escribe un numero');
// const numero2 = prompt('Escribe otro numero');
// console.log(numero1 + numero2);

// Solución:
// const numero1 = parseInt(prompt('Escribe un numero'));
// const numero2 = parseInt(prompt('Escribe otro numero'));
// console.log(numero1 + numero2);
// Nota: no podemos sumar decimales!

// ---------------------------------------------------------------------------------

/*
	📌 .parseFloat()
	Intenta transformar un valor a un numero con decimales.
*/
// Ejemplo anterior pero permitiendo sumar decimales.
// const numero1 = parseFloat(prompt('Escribe un numero con decimales'));
// const numero2 = parseFloat(prompt('Escribe otro numero con decimales'));
// console.log(numero1 + numero2);

// ---------------------------------------------------------------------------------

/*
	📌 Math.random()
	Genera un numero al azar entre 0 y 1
*/
const numero1 = Math.random();
console.log(numero1);

// --------------------------------------------------------------------------------

/*
	📌 Math.floor()
	Redondea hacia abajo un numero.
*/
// console.log(Math.floor(10.1)); // 10
// console.log(Math.floor(10.99)); // 10

// --------------------------------------------------------------------------------

/*
	📌 Math.ceil()
	Redondea hacia arriba un numero.
*/
console.log(Math.ceil(10.1)); // 11
console.log(Math.ceil(10.99)); // 11

// -------------------------------------------------------------------------------

/*
	📌 Math.round()
	Redondea hacia el entero mas cercano
*/
console.log(Math.round(10.1)); // 10
console.log(Math.round(10.99)); // 11

// -------------------------------------------------------------------------------

/*
	📌 Ejemplo de numero al azar de 0 a 100
*/
// Obtenemos un numero de 0 a 1 y lo multiplicamos por 101

const numeroAlzar = Math.random();
console.log(numeroAlzar); // Numero al azar
console.log(numeroAlzar * 101)

// // Redondeamos hacia abajo el numero.
// console.log(Math.floor(numero * 101));

