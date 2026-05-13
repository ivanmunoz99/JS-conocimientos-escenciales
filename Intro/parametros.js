/*
	📌 En las funciones podemos definir parametros, que son valores que la funcion puede utilizar.
*/

// curso 20 del curso 

/*
 - Parametros: los valores especificados en la definición
 - Argumentos: los valores que le pasamos a la función cuando la invocamos.
*/

const saludo = (nombre = 'amigo') => {
    console.log(`Hola ${nombre}`)
}

saludo('Ivan');
saludo('andre');
saludo('kevin');
saludo();

/*
	📌 Multiples parametros
*/
/* const operacion = (numero1, numero2) => {
    console.log(numero1 + numero2);
};

operacion(41, 40); */

const operacion = (tipo, numero1, numero2) => {
    if (tipo === 'suma') {
        console.log(numero1 + numero2)
    }else if (tipo === 'resta') {
        console.log(numero1 - numero2)
    }else {
        console.log('No especifica operacion')
    }
};

operacion('suma',40, 30);
operacion('resta',15, 10);