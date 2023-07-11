
let edad = prompt('Que edad tienes')
console.log(edad > 18)
if(edad > 18){
    console.log('es mayor de edad')
}


// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********

// *
// **
// ***
// ****

const printTree = (lines, type) => {
    let accum = ''; 

    if(type === 'revert') {
        for(let index = 10; index >= 1; index-- ) {
            console.log('*'.repeat(index))
        };
    } else {
        for(let index = 0; index < lines; index++ ) {
            accum = accum + '*';
            console.log(accum)
        };
    }
};

printTree(10)


// const date = new Date('08/27/1991');
// console.log(date)

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())

console.log('21:12:06')
console.log('21:12:07')
console.log('21:12:08')
console.log('21:12:09')

setInterval(() => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const time = hours + ':' + minutes + ':' + seconds
    console.log(time)
}, 1000);


console.log(Math.ceil(7.1)) // te redondea hacia arriba
console.log(Math.round(7.4)) // te redondea hacia el entero mas cercanos
console.log(Math.floor(7.9)) // te redondea hacia abajo
console.log(Math.trunc(9.912312312)) // te remueve los numeros decimales
console.log(Math.random());
let numberRadom = Math.random() * (9 - 7) + 7;

console.log(Math.trunc(numberRadom))
console.log(Math.max(10,5,4,6,7));
console.log(Math.min(10,5,4,6,7));


'2' === 2
let number = parseInt('2');
number = toString(number)
console.log(typeof number)
const test =prompt('que edad tienes ')
