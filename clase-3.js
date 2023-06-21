// Crear una funcion que reciba un nombre y un apellido 
 //y devuelva un saludo 
 // y si no recibe un nombre simplemente llamarlo amigo 

// input: freddy, kruguer
// output: Hola Freddy kruguer
// output: Hola amigo

let nombre = 'Penny'
let apellido = 'Wise';

function crearSaludo (param1, param2) {
    if(param1 && param2 ){
        return 'hola' + ' ' + param1 + ' ' +param2;
    }else{
        return 'Hola amigo';
    }
}

const saludo = crearSaludo(nombre);
//false, 0, "", null, undefined, y NaN
// Crear una funcion que altere el valor de +1 de una variable global cada que se ejecute (no retornar nada)

let counter = 0;

function incrementar () {
    let dentroDeFuncion = true;
    counter++
    console.log(dentroDeFuncion)
};
incrementar ()
console.log(counter)



// Crear un funcion que reciba un parametro de tipo numero y regrese true si el parametro es un numero par o false si es un numero impar
// input: 2
// output true

function evaluarNumero (numero) {
    const esPar = numero % 2 === 0 ? true : false;

    if(numero % 2 === 0){
        return true;  
    }else {
        return false;
    }
};
evaluarNumero(1)
// esta funcion evalua un numero si es par o inpar   -- operador ternario
const evaluarNumero = (numero) => numero % 2 === 0 ? true : false; 

const resultado = evaluarNumero(2);
console.log(resultado)



const mifunction = function () {
    console.log('funcion anonima')
};

mifuncion()


const arrow = () => console.log('esta es una arrow funcion');

const suma = (numero1 = 0, numero2 = 0) => {
    return numero1 + numero2;
}
console.log(suma(4,6));

suma = 'este es un string'

const resultadoSuma = suma(4,6)









