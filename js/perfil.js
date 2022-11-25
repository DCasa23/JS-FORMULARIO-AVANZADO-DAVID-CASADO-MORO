console.log("La contraseña introducido: " +sessionStorage.getItem('fecha'));

$('#nombreCliente').text("Nombre del Cliente:"+sessionStorage.getItem('nombre'));



$('#usuarioCliente').text("Nombre de Usuario del Cliente:"+sessionStorage.getItem('usuario'));

$('#passwordCliente').text("Contraseña elegida del Cliente:"+sessionStorage.getItem('password'));

$('#fechaCliente').text("Fecha de Nacimiento del Cliente:"+sessionStorage.getItem('fecha'));
console.log("El usuario: "+sessionStorage.getItem('usuario'));
console.log("La contraseña: "+sessionStorage.getItem('password'));