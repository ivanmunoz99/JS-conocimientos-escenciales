/*
	Una buena practica es que las funciones se encarguen de realizar una sola tarea.
	La funcion anterior hace la operacion y luego la publica. Podemos optimizar el codigo con un return.
*/
/*
	📌 Sentencia Return
	La sentencia return nos permite que la funcion devuelva/retorne un valor.
	El return para la ejecucion del código dentro de la funcion.
*/

/* const operacion = (tipo, numero1, numero2) => {
    if (tipo === 'suma') {
        console.log(numero1 + numero2)
    }else if (tipo === 'resta') {
        console.log(numero1 - numero2)
    }else {
        console.log('No especifica operacion')
    }
};
 */

const operacion = (tipo, numero1, numero2) => {
    let resultado;

    if (tipo === 'suma') {
        resultado = numero1 + numero2;
    }else if (tipo === 'resta') {
        resultado = numero1 - numero2;
    }else{
        return 'NO hay operador'
    }
    return resultado
};

const miVariable = operacion('suma', 10, 5);
console.log(miVariable);

// Ó 

const operacion2 = (tipo, numero1, numero2) => {
    if (tipo === 'suma') {
        return numero1 + numero2;
    }else if (tipo === 'resta') {
        return numero1 - numero2
    }else {
        return 'NO hay nada'
    }
};

const miVariable2 = operacion2('resta', 8, 4);
console.log(miVariable2);
