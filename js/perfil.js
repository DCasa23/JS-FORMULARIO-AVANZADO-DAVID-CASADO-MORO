let i = 0;

//Por medio de LocalStorage, se obtiene toda la información del Usuario

let fechaFormatoEspañol=localStorage.getItem('fecha').substring(8)+"-"+localStorage.getItem('fecha').substring(5,7)+"-"+localStorage.getItem('fecha').substring(0,4);
$('#nombreCliente').text("Nombre del Cliente: " + localStorage.getItem('nombre'));

$('#usuarioCliente').text("Nombre de Usuario del Cliente: " + localStorage.getItem('usuario'));

$('#passwordCliente').text("Contraseña elegida del Cliente: " + localStorage.getItem('password'));

$('#fechaCliente').text("Fecha de Nacimiento del Cliente: " + fechaFormatoEspañol);

$('#apellidosCliente').text("Apellidos del Cliente: " + localStorage.getItem('apellidos'));

$('#correoCliente').text("Correo del Cliente: " + localStorage.getItem('correo'));

$('#DNICliente').text("DNI del Cliente: " + localStorage.getItem('DNI'));

$('#telefonoCliente').text("Telefono del Cliente: " + localStorage.getItem('telefono'));

$('#direccionCliente').text("Dirección del Cliente: " + localStorage.getItem('direccion'));

$('#CPCliente').text("Código Postal del Cliente: " + localStorage.getItem('CP'));

$('#ciudadCliente').text("Ciudad del Cliente: " + localStorage.getItem('ciudad'));

$('#paisCliente').text("País del Cliente: " + localStorage.getItem('pais'));

$('#IBANCliente').text("IBAN del Cliente: " + localStorage.getItem('IBAN'));

$('#SWIFTCliente').text("SWIFT del Cliente: " + localStorage.getItem('SWIFT'));


//Por medio de un array, vamos mostrando por JQuery todos nuestros equipos seleccionados de forma aleatoria 

const array = JSON.parse(localStorage.getItem('myArray'));


for (i = 0; i < array.length; i++) {

  $("#listaCarrito").append("<li>" + array[i] + "</li>");

};
let azarEquipo = Math.floor(Math.random() * array.length)

$("#fotoAzar").html("<img src=\"../images/Teams/" + array[azarEquipo] + ".png\" width=\'300px\' >");
setInterval(function () {
let azarEquipo = Math.floor(Math.random() * array.length)
$("#fotoAzar").animate({ opacity: '0.0' }, "slow");
setTimeout(function(){
$("#fotoAzar").html("<img src=\"../images/Teams/" + array[azarEquipo] + ".png\" width=\'300px\' >");
$("#fotoAzar").animate({ opacity: '0.8' }, "slow");
},1000);
}, 5000);


//Mostraremos un equipo contra el que se pueda enfrentar nuestro equipo

$("#contenedor").append("<img src=" + localStorage.getItem('equipoFavorito') + " style=\"width:200px;height:200px;float: left;margin-left: 15%;margin-right: 50px\";><h1 style=\"float: left;margin: 100px 50px\";><span style=\"background-color:grey;margin-right:50px;-webkit-text-stroke: 0.2px white;color: black;\">&nbsp;&nbsp;VS&nbsp;&nbsp;</span></h1><img src=" + localStorage.getItem('equipoEnemigo') + " style=\"width:200px;height:200px;float: left;margin:0px 0px 50px 0px\";>");

//Mostrará la equipación del ultimo equipo seleccionado

$("#primeraEquipacion").prepend("<img src=\"../images/Tienda/" + localStorage.getItem('nombreEquipo') + ".png\" width=\'200px\' >");
$("#primeraEquipacion").append("<span>"+localStorage.getItem('nombreEquipo')+" :70€</span>");
$("#segundaEquipacion").prepend("<img src=\"../images/Tienda/" + localStorage.getItem('nombreEquipo') + "2.png\" width=\'200px\' >");
$("#segundaEquipacion").append("<span>"+localStorage.getItem('nombreEquipo')+" :50€</span>");


//Los diferentes enlaces a paginas o al inicio del formulario

$("#BotonInicio").click(function () {
  window.location.href = '../inicio.html';
})
$("#BotonPartidos").click(function () {
  window.location.href = 'https://www.nflgamepass.com/es';
})
$("#BotonTienda").click(function () {
  window.location.href = 'https://europe.nflshop.com/es/?loc=es-ES';
})