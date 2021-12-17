/*
    CONDICIONALES 
    
    Condicionales se utilizan para decisiones de nuestro 
    programa

if (condicion) {
    codigo
    codigo
    codigo
    codigo
}

*/

let edad =parseInt (prompt('Ingrese su edad: '));

if (edad >= 18 && edad < 30) {
    document.write("Eres un joven ");
} else if (edad >= 30 && edad < 60) {
    document.write("Eres un adulto ");
} else if (edad >= 60){
    document.write("Eres un viejo ")
} else {
    document.write("Eres un niño ")
}

