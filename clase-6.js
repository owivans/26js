
// Crea una funcion llamada replaceString que reciba un texto como parametro y 
//lo retorne reemplazando todos los espacios de un string por puntos

// input: 'La clave para programar es tener una buena taza de café al lado'
// output: 'La.clave.para.programar.es.tener.una.buena.taza.de.café.al.lado'


crear la funcion llamda replaceString
ejecutar la funcion
crear una variable para almacenar el string a tratar


const string = 'La clave para programar es tener una buena taza de café al lado';
console.log(string.split(''))
const stringOther = 'Hola';

console.log(string[string.length - 1])
string[3];


const replaceString = stringToReplace => stringToReplace.replaceAll(' ', '.');


// Crea una funcion llamada searchContent que que se encargue de buscar contenido especifico, debera retornar true si el texto contiene el contenido a buscar

// input: 'Un gran poder conlleva una gran responsabilidad', 'poder'
// output: true

const searchContent = (content, contentToSearch) => content.includes(contentToSearch);

searchContent('Un gran poder conlleva una gran responsabilidad', 'poder' );


// Escribe una función llamada countCharacters que reciba una cadena como parámetro y devuelva el número total de caracteres (incluyendo espacios) en esa cadena.
// input: 'Esto es Javascript'
// output: 18


const countCharacters = (text, isSpaceCountable) => {
    if(isSpaceCountable){
        return text.length
    }else {
        return text.replaceAll(' ', '').length;
    }
};

console.log(countCharacters('Esto es Javascript', false))

// Escribe una función llamada capitalizeEachWord que reciba una cadena como parámetro y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
// input: 'hola mundo'
// output: 'Hola mundo'

// crea una funcion que cambie la primer letra a mayusculas del parametro que reciba 

const capitalizeEachWord = (text) => {
    const capitalize = text[0].toUpperCase(); // H
    const rest = text.slice(1); // ola
    return capitalize.concat(rest)
};

console.log(capitalizeEachWord('parametro'));

const listName = ['Jon','Jason', 'penni'];
//const listResult = ['JON', 'JASON', 'PENNI'];
const listResult = [];

for(const element of listName) {
    listResult.push(element.toUpperCase());
}

console.log(listName)
console.log(listResult)

 const elementos = ["elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento", "elemento"]

 for(const element of elementos){
    console.log(element)
 }
// loop / ciclos





