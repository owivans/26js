// const element = document.createElement('h1');
// element.textContent = 'Este es child desde JS'
// const div = document.createElement('div');

// div.appendChild(element);

// console.log(div);

// document.body.appendChild(div);


// const container = document.querySelector('#container');

// const firstElement = document.createElement('li');
// const secondElement = document.createElement('li');

// firstElement.textContent = 'first';
// secondElement.textContent = 'second';
// console.log(firstElement)

// container.appendChild(firstElement);
// container.appendChild(secondElement);

// const list = ['jason', 'freddy', 'penny', 'pepe', 'nuevo elemento'];

// const render = (tag, content) => {
//    const element =  document.createElement(tag);
//    document.body.appendChild(element);
//    element.textContent = content;
// };

// list.forEach((name) => {
//     render('li', name);
// });


// const img = document.createElement('img');
// img.src = 'https://res.cloudinary.com/practicaldev/image/fetch/s---UXjdvws--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wixrm7ejmrua4su7agha.jpg'
// console.log(img);

// document.body.appendChild(img);

const RickAndMortyCharacters = [
    {
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
    }, {
        "id":40,
"name":"Beth's Mytholog",
"status":"Dead",
"species":"Mythological Creature",
"type":"Mytholog",
"gender":"Female",
"origin":{
"name":"Nuptia 4",
"url":"https://rickandmortyapi.com/api/location/13"
},
"location":{
"name":"Nuptia 4",
"url":"https://rickandmortyapi.com/api/location/13"
},
"image":"https://rickandmortyapi.com/api/character/avatar/40.jpeg",
"episode":[
"https://rickandmortyapi.com/api/episode/18"
],
"url":"https://rickandmortyapi.com/api/character/40",
"created":"2017-11-05T10:02:26.701Z"
    },
    {
        "id":21,
"name":"Aqua Morty",
"status":"unknown",
"species":"Humanoid",
"type":"Fish-Person",
"gender":"Male",
"origin":{
"name":"unknown",
"url":""
},
"location":{
"name":"Citadel of Ricks",
"url":"https://rickandmortyapi.com/api/location/3"
},
"image":"https://rickandmortyapi.com/api/character/avatar/21.jpeg",
"episode":[
"https://rickandmortyapi.com/api/episode/10",
"https://rickandmortyapi.com/api/episode/22"
],
"url":"https://rickandmortyapi.com/api/character/21",
"created":"2017-11-04T22:39:48.055Z"
    }
];

const buildCard = (character) => {
    // Se estan creando los elementos
    const container = document.createElement('div');
    const img = document.createElement('img');

    const info = document.createElement('div');
    const name = document.createElement('h2');
    const especie = document.createElement('h3');

    // se le agrega contenido a los elementos
    img.src = character.image;
    img.width = 150;
    name.textContent = character.name;
    especie.textContent = character.species;

    // se agregan clases a los elementos
    container.className = 'container';
    info.className = 'info';

// Esta inyectando los elementos en el lugar correspondiente
    container.appendChild(img);
    container.appendChild(info);
    info.appendChild(name)
    info.appendChild(especie)

    document.body.appendChild(container);
};

RickAndMortyCharacters.forEach((personaje) => {
    buildCard(personaje)
});





const koders = [
    {
      name: 'Arnold',
      generation: 11,
      age: 19,
      signatures: [
          {
              module: 'JS',
              average: 9
          },
          {
              module: 'HTML',
              average: 9
          },
          {
              module: 'React',
              average: 10
          }
      ]
    },
    {
      name: 'Gelga',
      generation: 12,
      age: 17,
      signatures: [
          {
              module: 'JS',
              average: 4
          },
          {
              module: 'HTML',
              average: 6
          },
          {
              module: 'React',
              average: 6
          }
      ]
    },
    {
      name: 'Gerald',
      generation: 12,
      age: 20,
      signatures: [
          {
              module: 'JS',
              average: 7
          },
          {
              module: 'HTML',
              average: 7
          },
          {
              module: 'React',
              average: 7
          }
      ]
    },
  ];




