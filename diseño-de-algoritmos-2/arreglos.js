/* 
    MATRICES 

*/

//Manera 1
const arreglo1 = [];
console.log(arreglo1);

//Manera 2
const arreglo2 = Array.of(1, 'Hola', true);
console.log(arreglo2);

//Manera 3
const arreglo3 = new Array(3, true, 'adios');
console.log(arreglo3);


const frutas = ['manzana', 'naranjas', 'uvas', 'sandia', [1,2,3,4,5, ['A', 'B', 'C']]];
//notacion de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);

frutas[4][5].push('D');
console.log(frutas);

//METODOS

/* 
    length = longitud
*/

const letras = ['A', 'B', 'C', 'D'];
console.log(letras);
console.log('La longuitud del arreglo es: ' + letras.length);

/* 
    push = añadimos un elemento al final de un areglo
*/

letras.push('E');
console.log(letras);

/* 
    pop = elimina el ultimo elemento
*/

letras.pop();
console.log(letras);

/* 
    unshift = se agrega un elemento al inicio
*/

letras.unshift(1);
console.log(letras);

/* 
    shift = elimina el primer elemento
*/

letras.shift();
console.log(letras);

 