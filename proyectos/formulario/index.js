const button = document.querySelector('#send');

console.log(button)

button.addEventListener('click', (event) => {
    event.preventDefault();    

    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const birthdate = document.querySelector('#birthdate');
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.querySelector('#country');
    const description = document.querySelector('#description');

    // const persona = {
    //     firstName,
    //     lastName,
    //     birthdate,
    //     gender,
    //     country,
    //     description
    // };


    const persona = {
        firstName: firstName.value,
        lastName:lastName.value,
        birthdate:birthdate.value,
        gender:gender.value,
        country:country.value,
        description:description.value
    };
    console.log(persona)
});

window.addEventListener('scroll',(event) => {
    const h1 = document.createElement('h1');
    h1.textContent = 'Hizo scroll';
    document.body.appendChild(h1);
    // setTimeout(() => {
    //     cleanDOM();
    // }, 3000)
});

const cleanDOM = () => {
    document.body.innerHTML = '';
};


// escuchar el evento de click en el buton de enviar
// acceder a cada input del formulario
// acceder al valor de cada uno de esos inputs
// crear un objeto y agregarle una propiedad que represente la informacion que va a guardar
// mostrar en la consola

// cuando de click al boton tenemos que recolectar la informacion de los inputs
// guardamos en un objeto

// {
//     firstName,
//     lastName,
//     birthdate,
// }