const h1 = document.getElementById('element');


// console.log(document.querySelector('#element'))
// console.log(document.querySelector('h1'))
// console.log(document.querySelector('.item'))



const items = document.getElementsByClassName('item')

console.log(items)


const element = document.querySelector('h1');
console.log(element)


const nodeList = document.querySelectorAll('h2');

nodeList.forEach((node, index) => {
node.textContent = 'hackeado' + index
})

const input = document.querySelector('input');
console.log(input)
input.className = 'input-container'
input.id = 'only'
