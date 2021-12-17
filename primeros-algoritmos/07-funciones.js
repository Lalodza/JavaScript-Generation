/* 

    Las funciones nos sirven para escribir bloques de codigo
    que se pueden reautilizar

    function sumar() {
        codigo
        codigo
        codigo
    }

    se llama a la funcion:
    sumar();
*/

let numero1 = 10;
let numero2 = 20;
let suma = numero1 + numero2;
document.write('<h1>' + suma + '<h1>');

let numero3 = 23;
let numero4 = 2135;
let suma2 = numero3 + numero4;
document.write('<h1>' + suma2 + '<h1>');

/* 
function sumar() {
    let numero1 = 10;
    let numero2 = 20;
    let suma = numero1 + numero2;
    document.write('<h1>' + suma + '<h1>');
}

document.write('Esto es con la funcion :) ')
sumar();
 */

function sumar(numero1, numero2) {
    let suma = numero1 + numero2;
    document.write('<h1>' + suma + '<h1>');
}

sumar(12, 12);
sumar(50, 8);
sumar(33, 12);

