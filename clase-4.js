


const persona = {
    nombre: 'Jason',
    edad: 45,
    apellido: 'Vorhess',
    conversar: () => {
        console.log('wara wara')
    },
    direccion: {
        calle: 'Valle de nacar',
        colonia: 'Estancias valle de plata',
        numero: {
            exterior: 123,
            interior: 34
        }
    }
};
// operador de acceso
console.log(persona.direccion.numero.exterior)
// notacion de corchetes



const prop = 'nombre'

persona[prop] // notacion de corchetes
persona.apellido
console.log(console)

// --------------------- Ejercicios ----------------------
// Crea objetos javascript que representen los siguientes objetos de la vida real (con todo y metodos)
// una casa
// un mentor
// un koder
// una computadora

const RickAndMortyCharacters = {
    info: {
      count: 826,
      pages: 42,
      next: "https://rickandmortyapi.com/api/character?page=2",
      prev: null
    },
    results: {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
            name: "unknown",
            url: ""
        },
        location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: 'Sugar Castle',
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z"
    }
}

// Accede a las propiedades que correspondan a los siguientes valores
 826     
'Citadel of Ricks'
'Alive'
'https://rickandmortyapi.com/api/character/avatar/2.jpeg'


// Escribe el codigo necesario para ejecutar su metodo de acelerar
const automovil = {
	marca: "FIAT",
	modelo: "500",
	acelerar: () => console.log("ruuuun!")
}
automovil.marca = 'Mazda'
automovil.color = 'rojo'
console.log(automovil)

// Crea una funcion que retorne un objeto con la ayuda de 2 parametros
// input: nombre, apellido
// output: {
//     nombre: 'Benito',
//     apellido: 'Doe',
// }
const nombre = 'Jason';
const apellido = 'Juarez';



const crearNombre = (nombre, apellido) => {
    const persona = {
        nombre: nombre,
        apellido: apellido,
        saltar: () => {
            console.log('wujuuu')
        }
    }   
    return persona;
};

const resultado = crearNombre(nombre, apellido)

console.log(resultado.saltar())


const afuera = 'esto esta fuera'

const test = () => {
    console.log(afuera)
    const texto = 'este es un texto';
};

if(3 > 4){
    console.log(afuera)
    let resultado = true;
}

const auto = {
    nombre: 'test',
}

// Metodos de string

// Encontar coincidencias en un string
console.log('Este es un texto de prueba'.includes('PRUEBA')) 

console.log('Este es un teXto De Prueba'.toLowerCase())



const string = '      Este es un teXto De Prueba    ';

const nuevoString = string.toLowerCase();
console.log(string.toUpperCase());

console.log(string)
console.log(nuevoString)

const name = 'Ivan';
const lastName = 'Diaz';
// console.log(name.concat(' ',lastName));


// console.log(string.trim());

console.log(name.length)

'B'

' AAAAB '

'asd'.trim()
'asd'.trimEnd()