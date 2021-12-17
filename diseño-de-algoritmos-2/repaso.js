/*
condicionales

    if(condicion){
        bloque
        de
        codigo
    }else if(){
    
    }else{
    
    }
*/

/*
FUNCION
Bloque de codigo reutilizable

    function nombre(parametros){
        return
    }
    nombre(argumentos);

*/

function procesadorDeFrutas(manzanas, naranjas) {
    let jugo = 'Jugo de ' + manzanas + ' manzanas y ' +
        naranjas + ' naranjas. ';
    return jugo;
} 

let jugoDeManzana = procesadorDeFrutas(4, 0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas(0, 5);
console.log(jugoDeNaranja)