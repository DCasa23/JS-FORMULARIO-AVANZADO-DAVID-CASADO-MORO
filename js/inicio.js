/*let nombreMemoria=sessionStorage.nombre;
let usuarioMemoria=sessionStorage.usuario;
let passwordMemoria=sessionStorage.password;*/
console.log("El usuario: "+sessionStorage.getItem('usuario'));
console.log("La contraseña: "+sessionStorage.getItem('password'));
$("#BotonInicio").click((function (e) {
    e.preventDefault();
    if(document.getElementById("usuarioform").value!="capibara"){
    $("#parrafo").append("Comida");
    }else{
        $("#parrafo").append("Kebab");
    }}))