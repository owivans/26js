Mostrar fecha actual con los dias de la semana en espanol con el siguiente formato
24 de julio de 2021

let fecha = new Date();

fecha.getDay();
fecha.getDay();
fecha.getMonth();
fecha.getFullYear();

 let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

 let mes=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'octubre', 'Noviembre', 'Diciembre'];




 const futureDate = new Date();

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);
console.log(futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis))



 mes[fecha.getMonth()];