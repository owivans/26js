// Buscar el elemento que va a cerrar el sidebar
// Buscar el elemento del sidebar
// crear una variable que se llame isOpen para saber cuando esta abierto
// Escuchar un evento de click en el button 
// Cambiar el valor de isOpen dependiente si la accion es cerrar o abrir
// si isOpen es verdadero  
    // debe tener width = 400
    // si es falso 
    // debe tener un width = 0

const onClose = document.querySelector('#onClose')
const sidebar = document.querySelector('#sidebar-container');
let isOpen = true;

onClose.addEventListener('click', () => {
    isOpen = false;
    sidebar.className = 'close-action'
    console.log(isOpen)
});


const response = fetch('https://rickandmortyapi.com/api/character', {
  method: 'GET',
});

console.log(response)