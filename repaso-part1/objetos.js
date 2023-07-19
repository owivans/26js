const direccion = {
    usuario: {
      nombre: "Juan",
      edad: 25,
      direccion: {
        calle: "Calle Principal",
        numero: 123,
        ciudad: "Ciudad Ejemplo"
      },
      contacto: {
        email: "juan@example.com",
        telefono: {
            casa: "123456789",
            mobile: "123456789",
        },
        llamar: () => {},
      }
    },
  };

  direccion.usuario // con operador de .
 // console.log(direccion.usuario.direccion.ciudad)
const propiedad = 'contacto';
const userEmail = direccion['usuario'][propiedad]['email'];
direccion.usuario.direccion.ciudad
console.log(userEmail)
 // direccion['usario'] // notacion de corchetes
