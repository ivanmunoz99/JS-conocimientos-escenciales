/*
	📌 Async y Await 
	Son sentencias que nos permitiran poder trabajar con codigo asíncrono
	de una forma mas sencilla.

	Async - nos permite definir que dentro de una funcion trabajaremos con codigo asyncrono.
	Await - nos permite detener la ejecución de codigo y esperar a que se resuelva una promesa.
*/

const obtenerPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let post = ['posts1', 'Posts2'];
            const error = false;

            if(error) {
                console.log('error al obtener');
            }else {
                console.log(post);
            }
        } ,2000)
    });
};

const mostrarPost = async () => {
    try {
        const posts = await obtenerPost();
        console.log(posts);
    }catch(errors) {
        console.log(errors);
    }
};

mostrarPost();