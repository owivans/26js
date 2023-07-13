const form = document.querySelector('#user-form');
const users = [];

form.addEventListener('submit', (event) => {

    event.preventDefault();
    console.log(event)

    // obtener los valores de los inputs
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');

    const userInfo = {
        email: email.value,
        password: password.value,
    };

    users.push(userInfo)
    console.log(users);
});

