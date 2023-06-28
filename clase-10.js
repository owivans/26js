
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
    console.log(date.getSeconds())

}, 1000);