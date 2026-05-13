// Los operadores nos permiten asignar elementos, hacer cálculos básicos y comparaciones.

/* 📌 Operadores Aritmeticos
	=	Operador de asignación. Se usa para asignar valores a una variable
	+	Suma
	-	Resta
	*	Multiplicación
	/	Division
	%	Modulo
	++	Aumento
	--	Disminución
*/

// const resultado1 = 10 + 10; // 20
// const resultado2 = 10 - 10; // 0
// const resultado3 = 10 % 3; // 1 (Resto de una división) (% Modulo)

// ++	Aumento una unidad
// --	Disminución una unidad

let numero = 3;
numero++; // Aumentamos el numero en una unidad.
// console.log(numero);
// numero--; // Disminuimos el numero en una unidad.
console.log(numero);

/*📌 Operadores de Asignación
	+=	Suma un numero al valor de una variable.
	-=	Resta un numero al valor de una variable.
	*=	Resta un numero al valor de una variable.
	/=	Resta un numero al valor de una variable.
	%=	Obtiene el sobrante de una division y lo asigna a la variable.
*/

let numero2 = 5;
// numero = numero + 5; // 10
numero2 += 5;

console.log(numero2);

/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que
	===		Igual en valor y typo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario
*/

// const resultado = 5 > 1; // true
// const resultado = 20 <= 20; // true
// const resultado = 10 == 10; //true
// const resultado = 10 == '10'; // True (Solo compara el valor)
// const resultado = 10 === '10'; // false (compara si el valor es igual y si el tipo es igual)
// const resultado = 7 > 1 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';
const resultado = 10 < 9 ? '10 es menor que 9' : '9 es menor que 10'; //condicional de una sola linea
console.log(resultado);