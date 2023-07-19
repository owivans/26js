// hoisting - es el mecanismo que usa javascript para reordenar codigo mediante palabras reservadas

function myfunction (propiedad, param2) {
    const direccion = {
        nombre: "Juan",
        edad: 25,
        email: "juan@example.com",
        telefono: {
            casa: "123456789",
            mobile: "123456789",
        },
    };

    if (param2) {

        console.log(direccion[propiedad][param2])
         return direccion[propiedad][param2];
    } else {

        console.log(direccion[propiedad])
        return direccion[propiedad];
    }
};  
myfunction('telefono', 'casa');

// La palabra return se agrega cuando el cuerpo de la funcion es de mas de 1 linea de codigo
const myArrowfunction = (propiedad, param2) => {
    const direccion = {
        nombre: "Juan",
        edad: 25,
        email: "juan@example.com",
        telefono: {
            casa: "123456789",
            mobile: "123456789",
        },
    };

    if (param2) {

        console.log(direccion[propiedad][param2])
         return direccion[propiedad][param2];
    } else {

        console.log(direccion[propiedad])
        return direccion[propiedad];
    }
};
myArrowfunction();


// Funcion anonima
const otherFunction = function () {
    console.log('otherFunction')
};
otherFunction();



// -Agrega un método al objeto "persona" llamado "saludar" que imprima un mensaje de saludo en la consola, 
//  utilizando un nombre que reciba por parametro. 
// - Llama a este método para

crear un objeto que se llame persona
agregar un metodo al objeto persona
imprimir saludo 

const persona = {
    llamar: () => {}
}



const arrow = (name) => {
    return 'Hola' + ' ' + nombre
};

const persona = {
    nombre: 'Freddy Krueger',
    saludar: (nombre) => 'Hola' + ' ' + nombre,
};

console.log(persona.saludar('Jason'));















// CREAR UNA Funcion que se llame operacionBancaria que :
// -reciba un parametro que indique si va a retirar o positar
// -reciba la cantidad a retirar o depositar
// -Deberas retornanr el objeto del usuario con el dinero resultante despues de la operacionBancaria

// const user = {
//     cuenta: 1567436,
//     saldo: 4000,
//     nombre: 'Freddy Krueger',
// }
