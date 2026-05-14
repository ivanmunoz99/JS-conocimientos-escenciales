/*
	📌 El Browser Object Model nos permite poder acceder a propiedades y metodos del navegador web.
	Ejemplos de cosas que nos permite hacer:
	- Acceder a la ventana para conocer su tamaño
	- Trabajar con la barra de direcciones
	- Mostrar alertas
	- etc
*/

/*
	📌 Window Object
	Representa la ventana del navegador.
	Las variables y funciones globales son parte del objeto de window
*/

// Accediendo al metodo alerta de Window
// window.alert();

// Funcion global
// alert();

// Podemos conocer todas las propiedades y metodos
// console.log(window);

// Esto no incluye las barras de herramientas, marcadores, barras de scroll
console.log(`la ventana mide ${window.innerWidth} de ancho`)
console.log(`la ventana mide ${window.innerHeight} de alto`)

/*
	📌 Trabajar con ventanas
	Con el BOM podemos:
	- Abrir y cerrar ventanas.
	- Mover ventanas.
	- Cambiar el tamaño de ventanas.
*/

/* 
	📌 window.open()
	Nos permite abrir ventanas del navegador
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones

	Nos devuelve un objeto para aceder a esa ventana
*/

let ventana;
const abrirVentana = () => {
    ventana = window.open('https://www.youtube.com', 'yultul', 'width=500, height=500');
    // ventana.document.write('nueva ventana');

    // 📌 Podemos abrir pestañas
	// window.open('https://google.com');
}

/* 
	📌 Cerramos una ventana
	Nota: Solo podemos cerrar ventanas que hayan sido abriertas por un script.
*/

const cerrarVentana = () => {
    ventana.close();
};

/*
	📌 Screen Object
	Representa la pantalla del usuario.
*/

// Alto y ancho de pantalla
console.log(`ancho de pantalla: ${window.screen.width}`);
console.log('ancho de pantalla:', window.screen.width);

console.log(`ancho de pantalla: ${window.screen.availWidth}`);
console.log(`alto de pantalla: ${window.screen.availHeight}`);


