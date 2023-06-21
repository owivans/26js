// tener un numero el cual vamos a deducir
// evaluar si el numero es de tipo numero
// evaluar el numero para deducir el dia
// mostrar el dia o el resultado

const numberDay = 2;
let nameDay = ''

if(typeof numberDay === 'number') {
   
    if(numberDay === 0){
        nameDay = 'Lunes'
    }

    if(numberDay === 1){
        nameDay = 'Martes'
    }

    if(numberDay === 2){
        nameDay = 'Miercoles'
    }
}

switch(numberDay){
    case 0:
        console.log('es lunes');
    break;

    case 1:
        console.log('es martes');
    break;
    default:
        console.log('no es un opcion correcta')
}


// Crear un algoritmo que nos indique la califacion de letra en base a un numero

// input: 50
// output: Califacion F

// F: la calificacion sea menor que 60 
// D: menor que 70
// C menor que 80
// B: menor que 90
// A: menor que 100


//  crear una variable con la calificacion a analizar
// validar que sea numero 
// crear las validacuones para de deducir la califacion
// mostrar el resultado 


let score = 50;
let letterScore = '';
if(typeof score === 'number'){

    if(score <= 60){
        letterScore = 'F'
    }

    if(score > 61 && score <= 70){
        letterScore = 'D'
    }

    if(score > 71 && score <= 80){
        letterScore = 'C'
    }
    if(score > 81 && score <= 90){
        letterScore = 'C'
    }
}
console.log(letterScore)

let test = 0

function sumar (p1, p2 = 0, p3 = 0) {
    let resultado = p1+p2;
    return resultado
};

let sumatoria = sumar(4);



console.log(sumatoria)






// Crear una funcion que reciba un nombre y un apellido y devuelva un saludo y si no recibe un nombre simplemente llamarlo amigo 

// input: freddy, kruguer
// output: Hola Freddy kruguer
// output: Hola amigo


// Crear una funcion que altere el valor de +1 de una variable global cada que se ejecute (no retornar nada)


// Crear un funcion que reciba un parametro de tipo numero y regrese true si el parametro es un numero par o false si es un numero impar
// input: 2
// output true

