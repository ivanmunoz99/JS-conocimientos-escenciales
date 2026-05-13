/* 📌 
	Switch es un bloque de codigo similar a elseif
	que nos permite ejecutar código en base a una condición, en este caso cuando un valor sea igual a otro.
*/

const usuario = {
	edad: 27,
	pais: 'mexico',
};

switch (usuario.pais) {
    case 'mexico':
        console.log('es mexicano');
        break;
    case 'colombia':
        console.log('es colombiano');
        break;
    default:
        console.log('no esta registrado')
}

/*
	Cuando usar else if y cuando switch.

	elseif nos permite tener condiciones mas complejas:
		} else if (usuario.pais === 'españa' && usuario.edad >= 18) {

	switch nos permite ejecutar codigo si una variable contiene X valor:
		case 'españa':
*/