/*
	📌 Herencia
	La herencia nos permite crear clases tomando las propiedades y metodos de otras clases.
*/

class Usuario {
	constructor(usuario, password) {
		this.usuario = usuario;
		this.password = password;
	}

	obtenerPosts() {
		const posts = ['post1', 'post2'];
		return posts;
	}
}

class Moderador extends Usuario {
    constructor(usuario, password, permisos) {
        // Super nos permite copair todos los metodos y propiedades de la clase original.
		// Incluyendo el constructor, por eso le pasamos los parametros usuario y password.
        super(usuario, password);
        this.permisos = permisos;
    }

    borrarPost(id) {
        if(this.permisos.includes('borrar')) {
            console.log(`se borro el post con el id ${id}.`)
        }else {
            console.log('No tiene permisos')
        }
    }
}

const usuario = new Usuario('Ivan', 123);
console.log(usuario);
console.log(usuario.obtenerPosts());

const moderador = new Moderador('Dario', 456, ['borrar', 'editar']);
// Tambien puede acceder a los metodos y propiedades de la clase Usuario.
console.log(moderador.obtenerPosts());
moderador.borrarPost(2)