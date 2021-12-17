//  13-12-2021

/* 
    CICLOS - LOOPS
    -while
    -do while
    -for

*/

//While
/* 
    let condicion = 1; (valor inicial)
    while(condicion){
        CODIGO
        CODIGO
        CODIGO
        modificacion a nuestro valor inicial
    }

*/

//Imprimir todos los numeros del 1 al 10

let condicion = 1;

while (condicion <= 10) {
    console.log(condicion);
    condicion++;
}

let numero = 1;
numero++;
numero++;
numero++;
numero--;
numero--;
numero--;
console.log(numero);


/* 
    do while

*/
console.log('CICLO:   DO WHILE')
let numero1 = 1; 

do {
    console.log(numero1);
    numero1++;
} while (numero1 <= 10);

/* 
    ciclo FOR
    utiliza contador
*/

console.log('Ciclo FOR');

for (let control = 1; control <= 10; control++) {
    console.log(control);
    
}

const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];

for(let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}



