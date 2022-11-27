/*let nombreMemoria=localStorage.nombre;
let usuarioMemoria=localStorage.usuario;
let passwordMemoria=localStorage.password;*/
console.log("El usuario: "+localStorage.getItem('usuario'));
console.log("La contraseña: "+localStorage.getItem('password'));
$('#usuarioCliente').text("Nombre de Usuario del Cliente: "+localStorage.getItem('usuario'));

$('#passwordCliente').text("Contraseña elegida del Cliente: "+localStorage.getItem('password'));
$("#BotonInicio").click((function (e) {
    e.preventDefault();
    if(document.getElementById("usuarioform").value!=localStorage.getItem('usuario') || document.getElementById("passwordform").value!=localStorage.getItem('password')){
    $("#mensajeCrear").show();
    $("#mensajeCrear").animate({right: '75%'});
    }else{
        window.location.href = 'html/perfil.html';
    }}))
$("#botonCrear").click(function() {
    window.location.href = 'html/crear.html';
})