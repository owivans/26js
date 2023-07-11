// Metodos de array


const test = [];
const list = [1,2,3];

// list.unshift(4);

// console.log(list)

// list.pop();
// console.log(list)
//list.shift();
// list.reverse();
console.log(list)


let tareas = [
    'tarea 1',
    'tarea 2',
    'tarea 3',
    'tarea 4',
    'tarea 5',
    'tarea 6',
    'tarea 7'
];

const transform = tareas.join('-');
console.log(transform)

'civic' => arreglo ['c','i','v', 'i','c']

console.log('civic'.split(''));

// crear funcion y recibir una palabra como parametro
// dentro de la funcion vamos aconvertir el string en un arreglo
// invertgir el arreglo del resultado de split
// aplicar el metodo join al arreglo como resultado


const compareString = (string) => {
    let textTransform = string.split('').reverse().join('').toUpperCase();
    const isPalindrome = string.toUpperCase() === textTransform;
    console.log(isPalindrome)
};

compareString('aNna')
'string'.toUpperCase




[
    {
        element: 'c',
        index: 0
    },
    {
        element: 'i',
        index: 1
    },
    {
        element: 'v',
        index: 2
    },
]

let text = ['c','i','v', 'i','c'];
let accum = [];

text.forEach((element, index) => {
    const info = {
        element: element,
        index: index
    };
    console.log(info)
    accum.push(info)
});
console.log(accum)
// text.forEach( (element, posicion, array) => {
//     if (element === 'i') {
//         accum.push(element)
//     }
// });
// console.log(accum)




// console.log(text.slice(0, 2))
console.log(text.splice(1, 2))
console.log(text)



// Crear una funcion que se encargue de decirnos la cancion con mas reproducciones
// Crear una funcion que nos indique cual es la cancion mas vieja








const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
];
const transformSongs = () => {
    const date = new Date();
    const CURRENT_YEAR = date.getFullYear();

    const result = songsData.reduce((accum, item,) => {
        const vigencia = CURRENT_YEAR - item.releaseYear;
        const song = {
            name: item.name,
            band: item.band,
            releaseYear: item.releaseYear,
            vigencia: vigencia,
            statistics: item.statistics
        };
        if(vigencia > 20){
            accum.push(song)
        };
        return accum;

    }, []);
    console.log(result)
    return result;
};
transformSongs()


console.log(window)


// [
//     {
//         name: "¿Dónde jugarán los niños?",
//         band: "Maná",
//         releaseYear: "1992",
//         vigencia: 2023 - 1992,
//         statistics: {
//             likes: 20000,
//             reproductions: 8000
//         },
//     },
// ]

const resultLikes = songsData.reduce((accum, item) => {
    item.statistics.likes
    songsData.length
    
    return accum + item.statistics.likes / songsData.length
}, 0);
console.log(Math.floor(resultLikes))






const getSong2 = () => {
    let currentSong;
    songsData.forEach((item) => {
        if(!currentSong){
            currentSong = item;
        }

        if(currentSong.releaseYear > item.releaseYear){
            currentSong = item
        }
    });
    console.log(currentSong)
};

getSong2()

const getSong = () => {
    let currentReleaseYear = 2023;
    let currentSong = {};

    songsData.forEach((item) => {
        if( parseInt(item.releaseYear) < currentReleaseYear ){
            currentReleaseYear = item.releaseYear;
            currentSong = item;
        }
    });
    console.log(currentSong)
};
getSong()

// Crear una funcion que nos indique cual es la cancion mas vieja
// output: {
//     name: "No dejes que...",
//     band: "Jaguares",
//     releaseYear: "1999",
//     statistics: {
//         likes: 12345,
//         reproductions: 10000
//     },
// }

// const getSong = () => {
//     let accumReproductions = 0;
//     let nameSong = ''
//     songsData.forEach((item) => {
//         if(item.statistics.reproductions > accumReproductions ){
//             accumReproductions = item.statistics.reproductions;
//             nameSong = item.name;
//         }
//     });
//     console.log(nameSong + accumReproductions)
// };

// getSong();


const numberList = [1,2,3,4,5];

const resultReduce = numberList.reduce((accum, item) => {
    return accum + item
}, 0);

console.log(resultReduce)