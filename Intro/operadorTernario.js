/*
	El operador ternario nos permite hacer condicionales abarcando menos codigo que si utilizaramos un condicional if.
*/

// Ejemplo de condicional sin operador ternario.
const boleto = 'vip';
let codigoDeAcceso;

boleto === 'vip' ? (codigoDeAcceso = 'vip-789-456'): (codigoDeAcceso = 'regular-123-456');

// Ó

const tipoAcceso = (boleto === 'vip') ? 'vip-789-456--': 'regular-123-456--';

console.log(codigoDeAcceso.toUpperCase());
console.log(tipoAcceso.toUpperCase());