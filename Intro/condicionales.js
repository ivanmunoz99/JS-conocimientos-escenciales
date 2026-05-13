/* 📌 Las condicionales son un tipo de bloque que nos permite ejecutar código dependiendo de si se cumple una condición o no 
	Normalmente se utilizan operadores de comparación.
*/

// 📌 Estructura de una condicional
/* Condición */
if (true) {
	// Código a ejecutar
}

// 📌 Ejemplo #1:
/* const usuario = {
	edad: 17,
	pais: 'mexico',
	ticket: true,
};

if (usuario.edad >= 18) {
    console.log('puede entrar');
}else {
    console.log('NO puede entrar');
}; */

// 📌 Ejemplo #2 - combinando operadores
const usuario = {
	edad: 27,
	pais: 'colombia',
	ticket: false,
};

/* if (usuario.edad >= 18 && usuario.ticket) {
    console.log('puede entrar')
}else {
    console.log('NO tienen ticket o es menor de edad')
} */

// 📌 Ejemplo #3 - Anindando condicionales

/* if (usuario.edad >=18) {
    if (usuario.ticket) {
        console.log('el usuario es mayor de edad y tiene ticket')
    }else {
        console.log('el usuario es mayor de edad pero NO tiene ticket')
    }
}else {
    console.log('el usaurio es menor de edad')
};
 */
// 📌 Ejemplo #4 - elseif

if (usuario.pais === 'mexico') {
    console.log('mexicano')
}else if (usuario.pais === 'colombia') {
    console.log('colombiano')
}else {
    console.log('no esta el pais registrado')
}