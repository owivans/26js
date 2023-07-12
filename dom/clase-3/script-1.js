const usd = 19;

const suma = () => {
    console.log('sumando')
};
const resta = () => {
    console.log('restando')
};

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

// export default fileName

export { usd, suma, resta, buildCard };

