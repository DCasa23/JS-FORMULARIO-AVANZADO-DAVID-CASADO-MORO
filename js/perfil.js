$('#nombreCliente').text("Nombre del Cliente: "+localStorage.getItem('nombre'));

$('#usuarioCliente').text("Nombre de Usuario del Cliente: "+localStorage.getItem('usuario'));

$('#passwordCliente').text("Contraseña elegida del Cliente: "+localStorage.getItem('password'));

$('#fechaCliente').text("Fecha de Nacimiento del Cliente: "+localStorage.getItem('fecha'));

$('#apellidosCliente').text("Apellidos del Cliente: "+localStorage.getItem('apellidos'));

$('#correoCliente').text("Correo del Cliente: "+localStorage.getItem('correo'));

$('#DNICliente').text("DNI del Cliente: "+localStorage.getItem('DNI'));

$('#telefonoCliente').text("Telefono del Cliente: "+localStorage.getItem('telefono'));

$('#direccionCliente').text("Dirección del Cliente: "+localStorage.getItem('direccion'));

$('#CPCliente').text("Código Postal del Cliente: "+localStorage.getItem('CP'));

$('#ciudadCliente').text("Ciudad del Cliente: "+localStorage.getItem('ciudad'));

$('#paisCliente').text("País del Cliente: "+localStorage.getItem('pais'));

$('#IBANCliente').text("IBAN del Cliente: "+localStorage.getItem('IBAN'));

$('#SWIFTCliente').text("SWIFT del Cliente: "+localStorage.getItem('SWIFT'));

console.log("El usuario: "+localStorage.getItem('usuario'));
console.log("La contraseña: "+localStorage.getItem('password'));
console.log("El equipo contrario: "+localStorage.getItem('equipoEnemigo'));
console.log("El equipo elegido: "+localStorage.getItem('equipoFavorito'));

$("#contenedor").append("<img src=" + localStorage.getItem('equipoFavorito') + " style=\"width:200px;height:200px;float: left;margin-left: 15%;margin-right: 50px\";><h1 style=\"float: left;margin: 100px 50px\";><span style=\"background-color:grey;margin-right:50px;-webkit-text-stroke: 0.2px white;color: black;\">&nbsp;&nbsp;VS&nbsp;&nbsp;</span></h1><img src=" + localStorage.getItem('equipoEnemigo') + " style=\"width:200px;height:200px;float: left;margin:0px 50px\";>");

$("#BotonInicio").click(function () {
    window.location.href = 'html/inicio.html';
})