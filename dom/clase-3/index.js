import { usd, resta } from './script-1.js';

// const button = document.querySelector('#send');
// console.log(button)


// button.addEventListener('click', () => {
//     console.log('se hizo click')
//     prompt('cual es tu nombre')
// });

const inputName = document.querySelector('#name');
console.log(inputName);

inputName.addEventListener('keypress', (event) => {
    console.log(event.target.value)
});