Mostrar fecha actual con los dias de la semana en espanol con el siguiente formato
24 de julio de 2021

let fecha = new Date();

fecha.getDay();
fecha.getDay();
fecha.getMonth();
fecha.getFullYear();

 let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

 let mes=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'octubre', 'Noviembre', 'Diciembre'];

 mes[fecha.getMonth()];