let nombreMemoria=localStorage.nombre;
let usuarioMemoria=localStorage.usuario;
let passwordMemoria=localStorage.password;
console.log("El usuario: "+usuarioMemoria);
console.log("La contraseña: "+passwordMemoria);
$("#BotonInicio").click((function (e) {
    e.preventDefault();
    if(document.getElementById("usuarioform").value!="capibara"){
    $("#parrafo").append("Comida");
    }else{
        $("#parrafo").append("Kebab");
    }}))