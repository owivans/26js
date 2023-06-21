// -Crear una función que recibe un string y regresa false si el string contiene al menos una letra mayúscula
const busquedaPatron = (contenido, regex) => {
    return regex.test(contenido);
};
const resultado = busquedaPatron('tablE footb0all',/[0-9]/)
console.log(resultado)


// -Crear una función que recibe un arreglo de números y devuelve el valor mas grande que se encuentra en el arreglo. 
const listNumbers2 = [1,23,5,8,5,3];
const buscarNumero = (array) => {
    let accum = 0

    for(const element of array){
        console.log(accum)
        if(element > accum){
            accum = element
        }
    }
};

buscarNumero(listNumbers2)



// -Crear una función que pueda contar cuantos elementos de un arreglo son mayores a X valor dado en los parámetros.

const listNumbers = [1,23,5,8,5,3];

const contarNumeros = (list, number) => {
    let counter = 0;
    for(let index = 0; index < list.length; index++){
        const element = list[index];
        if(element > number){
            counter++
        }
    }
    return counter;
};
const resultadoCounter = contarNumeros(listNumbers, 5);
console.log(resultadoCounter)


const listName = ['Freddy', 'Penny', 'jason'];

for(let index = 0; index < listName.length; index++){
     console.log(listName[index])
}

// for(let index = listName.length -1 ; index >= 0 ; index--){
//     console.log(listName[index])
// }


// -Crear una función que reciba un arreglo de números y regrese la lista de números pares que se encuentran en el arreglo
// -Crear una función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros
// -Crear una función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra

const listNames = ['ivan', 'mayra', 'Fer'];

const buscarString = (array, string) => {
    let isMatch = false;

    for (const name of array) {
        console.log(name)
        if(name.toUpperCase() === string.toUpperCase()){
            isMatch = true;
            break
        }
    }
    return isMatch;
};

const resultadoBusqueda = buscarString(listNames, 'ivan');

console.log(resultadoBusqueda)

// input : 'tablE football', /[A-Z]/ 
// output: true




const str = 'tablE football9';
const regex = /[A-Z]/;
const regexNumber = /[0-9]/;

console.log(regexNumber.test(str))

{
    name: 'Ivan',
    city: 'Nuevo Leon',
    Fecha: '10/10/10'
}



La persona se llama {=nombre=} que nacio en {fecha} en la ciudad de  {ciudad}

La persona se llama ivan que nacio en 10/10/10 en la ciudad de  Nuevo Leon

let edad = 0;

while(edad < 18){
    edad++
    console.log(edad)
}

[1,3,4]

const persona = {
    name: 'Freddy',
    age: 18,
    address: {
        calle:'asdasd',
        colonia: 'colonia1',
    },
};

for(const key in persona.address){
    console.log(persona.address[key])
}

