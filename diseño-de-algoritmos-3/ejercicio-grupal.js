


const numero = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado = [];

for (let i = 0; i < numero.length; i++){
    let mult = numero[i] * 2;
    resultado.push(mult);
    console.log(resultado[i]);
}

console.log(resultado);


/* const numero = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado = [];

numero.forEach(function (el) {
    resultado.push(el * 2);
})

resultado.forEach(function (el1) {
    console.log(el1);
})
 */
