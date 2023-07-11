// Crear una funcion que se encargue de decirnos la cancion con mas reproducciones
// Crear una funcion que nos indique cual es la cancion mas vieja
// Utilizar el forEach

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
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
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
        album:'asdas',
        image: 'wwww..asd'
    }
]

//['¿Dónde jugarán los niños?', 'La muralla verde', 'Te Ví En Un Tren']

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Michael" }
  ];

const userList = users.map((item) => {
    const element = {
        id: item.id,
    };
    return element
});
console.log(userList);
[ { id: 1 }, { id: 2 }, { id: 3 } ]
[
    {
        id:1
    },
    {
        id:2,
    },
    {
        id:3,
    }
]






const songNames = songsData.map((item) => {
    return item.name.toUpperCase();
});
console.log(songNames)



const filterSongByRelease = (year) => {
    // songsData.forEach((song, index) => {
    //     if(parseInt(song.releaseYear) === year){
    //         console.log(song.name)
    //         console.log(true)
    //     }
    // });

    const result = songsData.find((item) => parseInt(item.releaseYear) === year);
    console.log(result)



};
filterSongByRelease(2023);


const list = [1,2,3,4,5,6,7];

const listFiltered = list.filter((item) => {
    return item > 100
});

console.log(listFiltered, 'filter');



const result = list.find((item,) => item > 100);

console.log(result, 'find')

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('duck'));


const arr = [1, 2, 3, 4, 5];

const resultMap = arr.map((item) =>{
    console.log(item)
    return item * 2


});
console.log(resultMap);

