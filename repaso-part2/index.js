// Repaso part 2


// CREAR UNA Funcion que se llame operacionBancaria que :
// -reciba un parametro que indique si va a retirar o depositar
// -reciba la cantidad a retirar o depositar
// -Deberas retornanr el objeto del usuario con el dinero resultante despues de la operacionBancaria

// ----pseudo codigo-----
// crear una funcion que reciba dos parametros y que se llame operacionBancaria
// agregar el primer parametro que nos va indicar que tipo de operacion vamos hacer
// agregar un segundo parametro para saber que cantidad vamos utilizar en la operacion
// si el parametro es igual a depositar vamos a sumar el monto a la propiedad de saldo del objeto user
// si el parametro es igual a retirar vamos a restar el monto a la propiedad de saldo del objeto user
// solo se puede retirar si el saldo del usuario es igual o mayor a la cantidad a retirar
// actualizar la propiedad de user.saldo
// regresar el objeto user actualizado

const user = {
    cuenta: 1567436,
    saldo: 4000,
    nombre: 'Freddy Krueger',
};

const operacionBancaria = (operacion, monto) => {
    if(operacion === 'retirar' && monto > user.saldo) {
       return 'saldo insuficiente';
    }

    if(operacion === 'depositar'){
        user.saldo = monto + user.saldo
    }

    if(operacion === 'retirar') {
        user.saldo = user.saldo - monto;
    }

    return user;
};

const resultado = operacionBancaria('retirar', 1000);

// input
// depositar, 1000

// output
// const user = {
//     cuenta: 1567436,
//     saldo: 6000,
//     nombre: 'Freddy Krueger',
// };



//Callbacks ------------------------


const pedidoPreparado = () => {
    console.log('tu pedido ya esta en camino')
};


const ordenar = (callback) => {
    console.log('tu platillo esta en preparacion');
    console.log('terminamos de preparar tu platillo');

    setTimeout(() => {
        callback()
    }, 3000)
    
};

ordenar(pedidoPreparado)

setTimeout(() => {
    callback()
}, 4000)

//------------------------

//Scope ------------------------

const cocina = () => {
    const estufa = true;
    const refrigerador = true;
};

const micuarto = () => {
    const discos = true;
    const videojuego = true;
};

const sala = () => {
    const television = true;
    const planta = true;
};





