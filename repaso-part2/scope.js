// Scope de las variables
const casa = true;
const mueble = true;

const sala = (mueble) => {
  const television = true;
  const planta = true;
  console.log(mueble);
};

sala("cuadro");

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

  console.log(lapices);
};

micuarto()[
  //forEach

  (2, 4, 6, 7, 8, 9, 0)
];




// input arreglo

//output
// [
//   {
//     prenda: "camisa",
//     color: "azul",
//   },
//   {
//     prenda: "pantalon",
//     color: "rojo",
//   },
// ]

// Crear una funcion que retorne un arreglo con las siguientes especificaciones:
// - Todas las camisas tiene que ser azul
// - Todos los pantalones denebn ser rojos


crear la funcion pintarPrendas
declaramos los parametros
    - arreglo de prendas
ejecutar funcion con el array como argumento
iterar prenda por prenda
si la prenda es una camisa cambios el valor de la propiedad color a azul
si la prenda es un pantalon cambiamos el valor de la propiedad color a rojo 
guardar las prendas ya modificadas en una variable
retornar esa lista de prendas

const ropa = [
    {
      prenda: "camisa",
      color: "negro",
    },
    {
      prenda: "pantalon",
      color: "cafe",
    },
    {
      prenda: "pantalon",
      color: "negro",
    },
    {
      prenda: "calcetas",
      color: "blanco",
    },
    {
      prenda: "camisa",
      color: "rojo",
    },
  ];
const pintarPrendas = (prendas) => {

    const list = prendas.map((element) => {
        if(element.prenda === 'camisa'){
            element.color = 'azul';
        }

        if(element.prenda === 'pantalon') {
            element.color = 'rojo'
        }
        return element
    });

    return list;

};

const result = pintarPrendas(ropa)
console.log(result)



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


Ejercicio 2: Cálculo de precios con impuestos
Supongamos que tienes un arreglo de precios de productos y deseas calcular el precio final después de aplicar un descuento del 10%. 

// Porcentaje = (precio * 10) / 100;

const carrito = [
	{
		producto: 'Tshirt Vans',
		price: 750,
	},
	{
		producto: 'Libro Clean Code',
		price: 300,
	},
	{
		producto: 'TV Samsung 50 Pulgadas',
		price: 9000,
	},
];

[
	{
		producto: 'Tshirt Vans',
		price: 750 - 10%,
	},
	{
		producto: 'Libro Clean Code',
		price: 300 -10%,
	},
	{
		producto: 'TV Samsung 50 Pulgadas',
		price: 9000 -10%,
	},
];