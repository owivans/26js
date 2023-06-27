const otherFunction = () => {
    console.log('otherFunction');
};

const firstFunction = () => {
    console.log('firstFunction')
};

const secondFunction = () => {
    console.log('secondFunction')
};

// firstFunction
// secondFunction
// otherFunction

const myFunction = (firtsCB, secondCB, otherCB) => {
    firtsCB();
    otherCB();
    secondCB();
};
sincronia


myFunction(firstFunction, secondFunction, otherFunction);


- Crear una funcion que que se encargue de saludar, esta funcion debe recibir el tipo de Saludo y dos callbacks como parametro
- si el saludo es de tipo formal se debera ejecutar una funcion con el saludo formal
-si el saludo es de tipo casual se debera ejecutar una funcion con el saludo casual

const saludoFormal = (nombre) => {
    console.log('Buen dia' + ' ' + nombre);

    'Buen dia' + ' ' + nombre
console.log(`        Buen dia ${nombre ? nombre : 'señor'}`);
};

const saludoCasual = (nombre) => {
    console.log('Que 11'+ ' ' + nombre);
};

const saludar = (formal, casual, typo, nombre) => {
    console.log(formal, casual, typo);
    if(typo === 'formal'){
        formal(nombre)
    }

    if(typo === 'casual'){
        casual(nombre)
    }

};

saludar(saludoFormal, saludoCasual, 'formal', 'ivan')

const test = () => {
    console.log('se ejecuto el test2')
}

setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, 1000);
  
setTimeout(test, 2000 );

setInterval(() => {
    test()
}, 2000);

// higher order function

// Higher-Order Functions son funciones que reciben como parametro otra funcion osea un callback
// Callback son funciones que son pasadas como parametros


- Crear una funcion que te salude cada 2 segundos
- Crea una funcion que te salude y haz que se ejecute despues de 10 segundos de espera


Crear una funcion que se encargue de saludar a cada persona de un arreglo, debera recibir el arreglo y un callback que se encargara de crear el saludo
Crear una funcion  que se encargue de recibir un arreglo de numeros y un callback, el callback se encargara de sumarle +1 a cada numero
/Crear una funcion que se encargue de saludar a cada persona de un arreglo, debera recibir el arreglo y un callback que se encargara de crear el saludo
nombres = ["Marin","Irving","Andres","Alexis"];
const armarSaludo = (nombre) => "Hola " + nombre;
const salu2 = (nombres) =>{
    for(const nombre of nombres){
        console.log(armarSaludo(nombre));
    }
}
salu2(nombres);
//Crear una funcion  que se encargue de recibir un arreglo de numeros y un callback, el callback se encargara de sumarle +1 a cada numero
numbers= [10,5,7,8,1];
const masUno = (numero) => numero+1;
const sumarle = (numeros) =>{
    for(const numero of numeros){
        console.log(numero+" + 1 ="+masUno(numero));
    }
}
sumarle(numbers);




const functionA = () => {
    setTimeout(() => console.log('esta es la funcion a'), 2000);
}

const functionB = () => {
    setTimeout(() => console.log('esta es la funcion b'), 1000);
};

functionA();
functionB();




-Crear una funcion que se encargue de saludar a cada persona de un arreglo, debera recibir el arreglo y un callback que se encargara de crear el saludo



//Crear una funcion que se encargue de saludar a cada persona de un arreglo, 
//debera recibir el arreglo y un callback que se encargara de crear el saludo


-Crear una funcion
-crear un arreglo
-crear ese callback, es una funcion que su tarea es crear ese saludo
-ese callback necesita recibir el nombre como parametro

const personas = ['ivan', 'freddy', 'jason'];

//const saludos = ['Hola ivan', 'Hola freddy', 'Hola jason'];

const crearSaludo = (persona) => {
    return 'Hola' + ' ' + persona;
};

const saludarPorPersona = (personas, crearSaludo) => {
    const saludos = [];
    for(const persona of personas){
        const saludo = crearSaludo(persona);
        saludos.push(saludo);
    };
    return saludos;
};

console.log(saludarPorPersona(personas, crearSaludo))


- Crear una funcion  que se encargue de recibir un arreglo de numeros y un callback, el callback se encargara de sumarle +1 a cada numero

const numeros = [1,45,7,2,7];

const incrementarNumero = (numero) => {
    return ++numero;
};

const calcularPorNumero = (incrementarNumero, numeros) => {
    const numerosIncrementados = [];
    for(const numero of numeros){
        const resultado = incrementarNumero(numero);
        numerosIncrementados.push(resultado)
    };
    return numerosIncrementados;
};

console.log(calcularPorNumero(incrementarNumero, numeros))

