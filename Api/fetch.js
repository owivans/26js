// const response = fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
//     method: 'GET'
// });

// response
// .then((data) => data.json())
// .then((json) => {
//     console.log(json)
// })

// async / await 

const getInfo = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
            method: 'GET'
        });

        if(response.status === 200) {
            const data = await response.json();
            createEmails(data);
        } else {
            alert('No se pudo obtener los emails')
        }
    } catch (error) {
        console.error(error, 'asdasd');
    }

};

getInfo()

const createEmails = (array) => {
    const newList = array.map((item) => {
        return item.email
    });
    //console.log(newList);
};


// const entrarConcina = async() => {
//     try {
//         const calentarComida = await calentar()

//         const lavarPlatos = await lavar()

   

//     } catch (error) {
//         console.log(error);
//     }
// };

// entrarConcina()


// Hacer una peticion a la api de rick & morty y mostrar en el dom la imagen de cada personaje
// https://rickandmortyapi.com/api/character

const persona = {
    name: 'Jason voorhes',
    age: 34,
};



const createData = async() => {
    const response = await fetch('https://test2-4a6fd-default-rtdb.firebaseio.com/.json', {
        method: 'POST',
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(persona),
    });

};

const getData = async() => {
    const response = await fetch('https://test2-4a6fd-default-rtdb.firebaseio.com/.json', {
        method: 'GET',
    });
    const data = await response.json();

    const array = Object.entries(data);

    const parseData = array.map((item) => {
        const object = {
            id: item[0],
            age: item[1].age,
            name: item[1].name
        };
        console.log(object)
    });
    return parseData;
};

//createData()
//getData()


const getDataByHash = async(hash) => {
    const response = await fetch(`https://test2-4a6fd-default-rtdb.firebaseio.com/${hash}.json`,{
        method: 'GET'
    });
    const data = await response.json()
    console.log(data)
};

getDataByHash('-NaK2iQQpYMjsOlJ5f8y');


// PUT sobreescribe el registro
// PATCH actualiza solo lo que le envies en el body
const updateDataById = async() => {
    const response = await fetch('https://test2-4a6fd-default-rtdb.firebaseio.com/-NaK1wqcFEV-NKZLr2dh.json',{
        method: 'PATCH',
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ name: 'actualizado'})
    });
    const data = await response.json()
    console.log(data)
};
updateDataById();

// {
//     "-NaK1wqcFEV-NKZLr2dh": {
//         "age": 18,
//         "name": "freddy Krueger"
//     },
//     "-NaK2iQQpYMjsOlJ5f8y": {
//         "age": 18,
//         "name": "freddy Krueger"
//     },
//     "-NaK32olVYQZXxAF7iRB": {
//         "age": 34,
//         "name": "Jason voorhes"
//     }
// }

[
    {
        id:"-NaK1wqcFEV-NKZLr2dh",
        age:18,
        name: 'Freddy krueger'
    }
]

