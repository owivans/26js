// Scope de las variables
const casa = true;
const mueble = true;


const sala = (mueble) => {
    const television = true;
    const planta = true;
    console.log(mueble)
};

sala('cuadro')

const cocina = () => {
    const estufa = true;
    const refrigerador = true;
    
};

const micuarto = () => {
    const discos = true;
    const videojuego = true;

    const caja = () => {
        const lapices = true;
    };

    console.log(lapices)
};

micuarto()

















// Caso 1 

const x = 10;

function imprimir() {
  let y = 20;
  //console.log(y); // ¿Cuál es el valor de x aquí?
  //sconsole.log(y);
}

imprimir();
console.log(y); // ¿Cuál es el valor de x aquí?
// console.log(y); // ¿Qué sucede aquí?



function contar() {
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
    console.log(i); // ¿Qué sucede aquí?
  }
  
  contar();