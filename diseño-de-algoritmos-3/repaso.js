

/* 
    Arreglos
*/

const comidas = ['Pozole', 'Quesadillas', 'Tacos'];

/* 
    Length
*/

console.log(comidas.length);

/* 
    push (agrega al final)
    pop (quita un elemento del final)
    unshift (agrega al inicio)
    shift (quita un elemento al inicio)
*/

console.log('PUSH: se agrega un elemento al final')
comidas.push('Tortas');
console.log(comidas);

console.log('UNSHIFT: se agrega un dato al inicio')
comidas.unshift('Tamales');
console.log(comidas);

console.log('POP: Quita un elemnto al final')
comidas.pop();
console.log(comidas);

console.log('SHIFT: quita un elemnto al inicio')
comidas.shift();
console.log(comidas);

/* 
    forEach - nos puede servir para realizar una accion por cada
    elemento de nuestro arreglo
*/

/* console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
 */
comidas.forEach(function (el) {
    console.log(el)
})

const numeros = [1, 4, 7, 8];
console.log(numeros);

numeros.forEach(function (el1) {
    let suma = el1 + 1;
    console.log(suma);
})

console.log(numeros);


//Ejercicio
const arr = [];

function suma(num) {
    let sumNum = num + 1;
    return arr.unshift(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);
console.log(arr);

