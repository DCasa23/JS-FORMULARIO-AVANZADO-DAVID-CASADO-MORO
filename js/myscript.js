const nombre = document.getElementById("nombreform")
const apellidos = document.getElementById("apellidosform")
const correo = document.getElementById("correoform")
const telefono = document.getElementById("telefonoform")
const dni = document.getElementById("dniform")
const iban = document.getElementById("ibanform")
const swift = document.getElementById("swiftform")
const usuario = document.getElementById("usuarioform")
const fecha = document.getElementById("fechaform")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")
const password = document.getElementById("passwordform")
const direccion = document.getElementById("direccionform")
const ciudad = document.getElementById("ciudadform")
const cp = document.getElementById("cpform")
const pais = document.getElementById("paisform")
const carritoPartidos = document.getElementById("listaCarrito")

let colorequipo = "";
let equipo2 = "";
let equipo3 = "";
let equipo8 = "";
let liga = "";
let contador = 0;
let lineaCompra = "";
let precioTotal = 0;
let arrayEquipos = [];
let valor = 1;
let arrayEquiposFiltro = [];
let contadorbonos = 0;
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regexIBAN = /^(ES\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{2}[ ]\d{10})$/;
let regexDNI = /^(\d{8})([A-z])$/;
let regexMOVIL = /^(\d{3}[ ]\d{3}[ ]\d{3})|(\d{3}[ ]\d{2}[ ]\d{2}[ ]\d{2})$/;
valor = Math.floor(Math.random() * 18)
equipo8 = $("#form5 #equipos ul li:nth-child(" + valor + ")").attr('id');
console.log("Hola: " + equipo8)
/*
function validarTodo(){
    validarApellidos();
    validarCorreoForm();
    validarFechaForm();
    validarTelefonoForm();
    validarUsuarioForm();
    validarName();
}
*/
/*
function AbrirMenu(){
    document.getElementById("sidebar").style.visibility="visible";
    const id = this.getAttribute("id");
    console.log(id);
}
*/
//Crear clase para cada bono

class Bono {
    constructor(equipo, liga, partidos) {
        this.equipo = equipo;
        this.liga = liga;
        this.partidos = partidos;
        if (partidos == "1") {
            this.precio = 3;
        }
        if (partidos == "5") {
            this.precio = 10;
        }
        if (partidos == "10") {
            this.precio = 15;
        }
        if (partidos == "Todos los") {
            this.precio = 24;
        }


    }


}


$("#equipos li").click(function () {
    equipo2 = $(this).attr('id');
    if ($('#form4').find(this).length) {

        liga = "NFC";
    } else {

        liga = "AFC";
    }
    console.log(equipo2);
    $("#sidebar").animate({ opacity: '0.0' }, "high");
    $("#sidebar").animate({ opacity: '0.8' }, "slow");
    $("#sidebar").css('visibility', 'visible');
    $("#tituloEquipo").empty();
    colorequipo = $(this).css('background-image');
    colorequipo = colorequipo.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    console.log(colorequipo);
    $("#tituloEquipo").append("<img src=" + colorequipo + " style=\"width:100px\";\"height:200px\"><h1 style=\"float:right ; background-color:grey;margin-right:50px;-webkit-text-stroke: 0.2px white;color: black;\";>&nbsp;" + equipo2 + "&nbsp;</h1>");

});
$("#botonizq").click(function () {
    if (arrayEquiposFiltro.includes(equipo2)) {
        console.log("NO PUEDES PASAR");
        console.log("contenido: " + arrayEquipos);
    } else {
        arrayEquiposFiltro.push(equipo2);
        lineaCompra = ($('input[name=numero]:checked').val());
        console.log("contenido: " + arrayEquipos);
        console.log("DI AMIGGO");
        equipo3 = equipo2;
        equipo3 = new Bono(equipo2, liga, lineaCompra);
        arrayEquipos.push(equipo3);

        $("#sidebarright").animate({ opacity: '0.0' }, "high");
        $("#sidebarright").animate({ opacity: '0.8' }, "slow");
        $("#sidebarright").css('visibility', 'visible');
        console.log("Hello");

        console.log(equipo2);
        precioTotal = precioTotal + arrayEquipos[contadorbonos].precio;
        $("#listaCarrito").append("<li>" + arrayEquipos[contadorbonos].liga + " - " + arrayEquipos[contadorbonos].equipo + " " + arrayEquipos[contadorbonos].partidos + " partidos:" + arrayEquipos[contadorbonos].precio + "€</li>");
        $('#precioTotal').html("Precio Total:                               " + precioTotal + "€");

        $("#carrito").animate({ scrollTop: $('#carrito')[0].scrollHeight }, 1000);
        contadorbonos++;
    }

});

$("#botonBorrar").click(function () {
    $('#carrito li').remove();
    precioTotal = 0;
    arrayEquipos = [];
    arrayEquiposFiltro = [];
    contadorbonos = 0;
    $('#precioTotal').html("Precio Total:                               " + precioTotal + "€");
})
$("#botonEnviar").click(function () {
    if (precioTotal > 0) {
        window.location.href = 'html/inicio.html';
    } else {
        $("#parrafo").append("<span style='color: black;font-weight: bold;opacity:1.25;'>El carrito esta vacio, pulse comprar cuando haya elegido.</span>");
    }
    $('#carrito li').remove();
    precioTotal = 0;
    $('#precioTotal').html("Precio Total:                               " + precioTotal + "€");
})


function moverNFC() {
    document.getElementById("form4").style.display = "block";
    document.getElementById("form5").style.display = "none";
}
function moverAFC() {
    document.getElementById("form4").style.display = "none";
    document.getElementById("form5").style.display = "block";
}
function validarName() {
    if (nombre.value.length < 5) {
        console.log("Esto esta rojo");
        nombre.style.border = '2px solid red';
        nombre.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El nombre introducido es pequeño o esta vacio</span>";
        document.getElementById("textoNombre").innerHTML = "";

        //warnings += ' El nombre esta vacio <br><br>'
        incorrectoNombre = true;


    } else {
        console.log("Esto esta verde")
        nombre.style.background = ' #3CBC8D';
        nombre.style.color = 'white';
        nombre.style.border = '2px solid green';
        document.getElementById("textoNombre").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoNombre = false;
    }
}
function validarApellidos() {
    if (apellidos.value.length < 5) {
        console.log("Esto esta rojo")
        apellidos.style.background = '#ff99b2';
        apellidos.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El apellido introducido es pequeño o esta vacio</span>";
        document.getElementById("textoApellidos").innerHTML = "";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrectoApellidos = true


    } else {
        console.log("Esto esta verde")

        apellidos.style.background = ' #3CBC8D';
        apellidos.style.color = 'white';
        apellidos.style.border = '2px solid green';
        document.getElementById("textoApellidos").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoApellidos = false;
    }
}
function validarCorreoForm() {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(correoform.value)) {
        console.log("Esto esta rojo")
        correo.style.background = '#ff99b2';
        correo.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El correo tiene un formato inadecuado</span>";
        document.getElementById("textoCorreo").innerHTML = "";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrectoCorreo = true


    } else {
        console.log("Esto esta verde")
        correo.style.background = ' #3CBC8D';
        correo.style.color = 'white';
        correo.style.border = '2px solid green';
        document.getElementById("textoCorreo").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoCorreo = false;
    }
}
function validarPassword() {
    if (password.value.length < 5) {
        console.log("Esto esta rojo");
        password.style.border = '2px solid red';
        password.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El password introducido es pequeño o esta vacio</span>";
        document.getElementById("textoPassword").innerHTML = "";

        //warnings += ' El password esta vacio <br><br>'
        incorrectoPassword = true;


    } else {
        console.log("Esto esta verde")
        password.style.background = ' #3CBC8D';
        password.style.color = 'white';
        password.style.border = '2px solid green';
        document.getElementById("textoPassword").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoPassword = false;
    }
}
function validarTelefonoForm() {
    let regexMOVIL = /^(\d{3}[ ]\d{3}[ ]\d{3})|(\d{3}[ ]\d{2}[ ]\d{2}[ ]\d{2})$/;
    if (!regexMOVIL.test(telefonoform.value)) {
        console.log("Esto esta rojo de telefono")
        telefono.style.background = '#ff99b2';
        telefono.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El telefono tiene un formato inadecuado</span>";
        document.getElementById("textoTelefono").innerHTML = "";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrectoTelefono = true


    } else {
        console.log("Esto esta verde de telefono")
        telefono.style.background = ' #3CBC8D';
        telefono.style.color = 'white';
        telefono.style.border = '2px solid green';
        document.getElementById("textoTelefono").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoTelefono = false;
    }
}
function validarUsuarioForm() {
    if (usuario.value.length < 5) {
        console.log("Esto esta rojo");
        usuario.style.border = '2px solid red';
        usuario.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El usuario introducido es pequeño o esta vacio</span>";
        document.getElementById("textoUsuario").innerHTML = "";

        //warnings += ' El usuario esta vacio <br><br>'
        incorrectoUsuario = true;


    } else {
        console.log("Esto esta verde")
        usuario.style.background = ' #3CBC8D';
        usuario.style.color = 'white';
        usuario.style.border = '2px solid green';
        document.getElementById("textoUsuario").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoUsuario = false;
    }
}


function validarFechaForm() {
    if (fecha.value.substring(0, 4) > 2004 || fecha.value.substring(0, 4) == "") {
        console.log("Esto esta rojo en FECHA")
        fecha.style.background = '#ff99b2';
        fecha.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>La fecha indica que eres menor de edad</span>";
        document.getElementById("textoFecha").innerHTML = "";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrectoFecha = true


    } else {
        console.log("Esto esta verde")
        fecha.style.background = 'white';
        console.log("Esto esta verde")
        fecha.style.background = ' #3CBC8D';
        fecha.style.color = 'white';
        fecha.style.border = '2px solid green';
        document.getElementById("textoFecha").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoFecha = false;
    }
}
function validarDNIForm() {
    let regexDNI = /^(\d{8})([A-z])$/;
    if (!regexDNI.test(dni.value)) {
        console.log("Esto esta rojo");
        dni.style.border = '2px solid red';
        dni.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El dni introducido es pequeño o esta vacio</span>";
        document.getElementById("textoDni").innerHTML = "";

        //warnings += ' El Dni esta vacio <br><br>'
        incorrectoDni = true;

        password
    } else {
        console.log("Esto esta verde")
        dni.style.background = ' #3CBC8D';
        dni.style.color = 'white';
        dni.style.border = '2px solid green';
        document.getElementById("textoDni").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoDni = false;
    }
}

function validarDireccionForm() {
    if (direccion.value.length < 5) {
        console.log("Esto esta rojo");
        direccion.style.border = '2px solid red';
        direccion.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El direccion introducido es pequeño o esta vacio</span>";
        document.getElementById("textoDireccion").innerHTML = "";

        //warnings += ' El direccion esta vacio <br><br>'
        incorrectoDireccion = true;


    } else {
        console.log("Esto esta verde")
        direccion.style.background = ' #3CBC8D';
        direccion.style.color = 'white';
        direccion.style.border = '2px solid green';
        document.getElementById("textoDireccion").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoDireccion = false;
    }
}
function validarCPForm() {
    if (cp.value.length != 5) {
        console.log("Esto esta rojo");
        cp.style.border = '2px solid red';
        cp.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El cp introducido es pequeño o esta vacio</span>";
        document.getElementById("textoCP").innerHTML = "";

        //warnings += ' El cp esta vacio <br><br>'
        incorrectoCP = true;


    } else {
        console.log("Esto esta verde")
        cp.style.background = ' #3CBC8D';
        cp.style.color = 'white';
        cp.style.border = '2px solid green';
        document.getElementById("textoCP").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoCP = false;
    }
}

function validarCiudadForm() {
    if (ciudad.value.length <= 2) {
        console.log("Esto esta rojo");
        ciudad.style.border = '2px solid red';
        ciudad.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El ciudad introducido es pequeño o esta vacio</span>";
        document.getElementById("textoCiudad").innerHTML = "";

        //warnings += ' El ciudad esta vacio <br><br>'
        incorrectoCiudad = true;


    } else {
        console.log("Esto esta verde")
        ciudad.style.background = ' #3CBC8D';
        ciudad.style.color = 'white';
        ciudad.style.border = '2px solid green';
        document.getElementById("textoCiudad").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoCiudad = false;
    }
}
function validarPaisForm() {
    if (pais.value.length < 4) {
        console.log("Esto esta rojo");
        pais.style.border = '2px solid red';
        pais.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El pais introducido es pequeño o esta vacio</span>";
        document.getElementById("textoPais").innerHTML = "";

        //warnings += ' El pais esta vacio <br><br>'
        incorrectoPais = true;


    } else {
        console.log("Esto esta verde")
        pais.style.background = ' #3CBC8D';
        pais.style.color = 'white';
        pais.style.border = '2px solid green';
        document.getElementById("textoPais").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoPais = false;
    }
}
function validarIBANForm() {
    let regexIBAN = /^(ES\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{2}[ ]\d{10})$/;
    if (!regexIBAN.test(iban.value)) {
        console.log("Esto esta rojo de iban")
        iban.style.background = '#ff99b2';
        iban.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El iban tiene un formato inadecuado</span>";
        document.getElementById("textoIBAN").innerHTML = "";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrectoIBAN = true


    } else {
        console.log("Esto esta verde de iban")
        swift.placeholder = "CLICK AQUI PARA INTRODUCIR SWIFT"
        iban.style.background = ' #3CBC8D';
        iban.style.color = 'white';
        iban.style.border = '2px solid green';
        document.getElementById("textoIBAN").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoIBAN = false;
    }
}
function validarSWIFTForm() {
    if (getBICBank(iban.value.substring(5, 9) == null)) {
        swift.placeholder = "IBAN INCORRECTO"
        swift.style.background = '#ff99b2';
        swift.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El iban tiene un formato inadecuado</span>";
        document.getElementById("textoSWIFT").innerHTML = "";
        console.log(iban.value.substring(5, 9))
        console.log("Esto esta rojo en s")
        swift.placeholder = "IBAN INCORRECTO"

        incorrectoSWIFT = true


    } else {
        if (typeof getBICBank(iban.value.substring(5, 9) === "string")) {
            swift.placeholder = getBICBank(iban.value.substring(5, 9));
            if (swift.placeholder.length == 11) {
                swift.style.background = ' #3CBC8D';
                swift.style.color = 'white';
                console.log(typeof getBICBank(iban.value.substring(5, 9)))
                swift.style.border = '2px solid green';
                document.getElementById("textoSWIFT").innerHTML = "<img src=\"images/ok.png\" width=\'24px\' >";
                document.getElementById("parrafo").innerHTML = "";
                incorrectoSWIFT = false;
                console.log("Aqui entramos: " + getBICBank(iban.value.substring(5, 9)))
                console.log("Esto esta verde en s")
                console.log(typeof getBICBank(iban.value.substring(5, 9)))

            } else {

                swift.style.background = '#ff99b2';
                swift.style.border = '2px solid red';
                document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El iban tiene un formato inadecuado</span>";
                document.getElementById("textoSWIFT").innerHTML = "";
                swift.placeholder = "IBAN INCORRECTO"
                console.log("Esto esta rojo otra vez s")
                console.log(getBICBank(iban.value.substring(5, 9)))
                console.log(getBICBank(iban.value.substring(5, 9)))
                console.log(typeof getBICBank(iban.value.substring(5, 9)))
                incorrectoSWIFT = true
            }


        }
    }
}
/*function validarSWIFTForm() {
    
    if (typeof getBICBank(iban.value.substring(5, 9) === 'undefined')) {
        
        console.log("Esto esta rojo de swift")
        swift.style.background = '#ff99b2';
        swift.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El swift tiene un formato inadecuado</span>";
        document.getElementById("textoSWIFT").innerHTML = "";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrectoSWIFT = true


    } else {
        console.log("Esto esta verde de swift")
        swift.placeholder = getBICBank(iban.value.substring(5, 9));
        swift.style.background = ' #3CBC8D';
        swift.style.color = 'white';
        swift.style.border = '2px solid green';
        document.getElementById("textoSWIFT").innerHTML = "<img src=\"images/ok.png\" width=\'30px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoSWIFT = false;
    }
}*/


/*
function validarUsuarioForm() {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(correoform.value)) {
        console.log("Esto esta rojo")
        correo.style.background = '#ff99b2';
        correo.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El nombre introducido es pequeño</span>";
        document.getElementById("textoCorreo").innerHTML = "";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrecto = true


    } else {
        console.log("Esto esta verde")
        correo.style.background = ' #3CBC8D';
        correo.style.color = 'white';
        correo.style.border = '2px solid green';
        document.getElementById("textoCorreo").innerHTML = "<img src=\"images/ok.png\" width=\'30px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrecto = false;
    }
}
*/
/*
function validarName(){
    if (nombre.value.length < 5) {
        console.log("Esto esta rojo")
        nombre.style.background='black';
        //warnings += ' El nombre esta vacio <br><br>'
        incorrecto = true

    
    }else{
        console.log("Esto esta verde")
        nombre.style.background='white';
    }
    */

formulario.addEventListener("submit", e => {
    console.log("COntador: " + contador);
    incorrecto1 = true;
    incorrecto2 = true;
    incorrecto3 = true;

    e.preventDefault();
    let warnings = ""
    if (contador == 0) {
        validarApellidos();
        validarPassword();
        validarCorreoForm();
        validarFechaForm();
        validarUsuarioForm();
        validarName();
    }
    if (contador == 1) {
        validarCPForm();
        validarDireccionForm();
        validarCiudadForm();
        validarDNIForm();
        validarPaisForm();
        validarTelefonoForm();
    }
    if (contador == 2) {
        validarIBANForm();
        validarSWIFTForm();
    }
    if (incorrectoApellidos == false && incorrectoNombre == false && incorrectoPassword == false && incorrectoUsuario == false && incorrectoFecha == false && incorrectoCorreo == false) {
        localStorage.nombre = nombre;
        localStorage.apellidos = apellidos;
        localStorage.password = password;
        localStorage.usuario = usuario;
        let nombreMemoria = localStorage.nombre;
        let usuarioMemoria = localStorage.usuario;
        let passwordMemoria = localStorage.password;
        console.log("El usuario: " + usuarioMemoria);
        console.log("La contraseña: " + passwordMemoria);
        localStorage.setItem('fecha', fecha);
        localStorage.setItem('correo', correo);
        incorrecto1 = false;
    }
    if (contador == 1) {
        if (incorrectoCiudad == false && incorrectoCP == false && incorrectoPais == false && incorrectoTelefono == false && incorrectoDni == false && incorrectoDireccion == false) {
            incorrecto2 = false;
        }
    }
    if (contador == 2) {
        if (incorrectoSWIFT == false && incorrectoIBAN == false) {
            incorrecto3 = false;
        }
    }
    console.log("ES nombre: " + incorrectoNombre);
    console.log("ES apellido: " + incorrectoApellidos);
    console.log("EScorreo: " + incorrectoCorreo);
    console.log("ES Passw: " + incorrectoPassword);
    console.log("ESusuarii: " + incorrectoUsuario);
    console.log("ESfecha: " + incorrectoFecha);
    console.log("ES: " + incorrecto1);
    console.log(nombre.value.length);
    /*
    document.getElementById("parrafo").innerHTML = "";
    let incorrecto = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexIBAN = /^(ES\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{2}[ ]\d{10})$/
    let regexDNI = /^(\d{8})([A-z])$/;
    let regexMOVIL = /^(\d{3}[ ]\d{3}[ ]\d{3})|(\d{3}[ ]\d{2}[ ]\d{2}[ ]\d{2})$/

    
    if (nombre.value.length < 1) {
        
        warnings += ' El nombre esta vacio <br><br>'
        incorrecto = true

    
    }
    if (apellidos.value.length < 1) {
        
        warnings += ' Los apellidos estan vacios <br><br>'
        incorrecto = true
    }
    
    console.log(regexEmail.test(correo.value))
    if (!regexEmail.test(correo.value)) {
        warnings += ' El email no es valido <br><br>'
        incorrecto = true
    }
    console.log(regexMOVIL.test(telefono.value))
    if (!regexMOVIL.test(telefono.value)) {
        warnings += ' El Telefono no es valido, debe tener el formato:<br> XXX XXX XXX o XXX XX XX XX <br><br>'
        incorrecto = true
    }

    console.log(regexDNI.test(dni.value))
    if (!regexDNI.test(dni.value)) {
        warnings += ' El DNI no es valido, debe contener: <br> 8 números y 1 letra en mayuscula <br><br>'
        incorrecto = true
    }
    
    console.log(regexIBAN.test(iban.value))
    if (!regexIBAN.test(iban.value)) {
        warnings += ' El IBAN no es valido, debe tener el formato:<br> ESXX XXXX XXXX XX XXXXXXXXXX <br><br>'
        incorrecto = true
    }
    
    
    console.log(swift.placeholder)
    if ((swift.placeholder == "undefined")||(swift.placeholder == "IBAN INCORRECTO")||(swift.placeholder == "Clicka aquí al introducir el IBAN")) {
        
        swift.placeholder = "IBAN INCORRECTO"
        warnings += ' Actualice el Swift pulsando encima <br><br>'
        incorrecto = true
    }
    if (usuario.value.length < 1) {
        warnings += ' El Usuario esta vacio <br><br>'
        incorrecto = true
    }
    console.log(fecha.value.substring(0,4))
    if(fecha.value.substring(0,4)>2004||fecha.value.substring(0,4)==""){
        warnings += ' La fecha no es valida o es menor de 18 años<br><br>'
        incorrecto = true
    }
    if (incorrecto) {
        document.getElementById("parrafo").innerHTML = warnings;

    }
    
    
    
    
    */

    if ((incorrecto1 == false && contador == 0) || (incorrecto2 == false && contador == 1) || (incorrecto3 == false && contador == 2)) {
        switch (contador) {
            case 0:

                document.getElementById("form1").style.display = "none";
                document.getElementById("form2").style.display = "block";
                contador = 1;
                localStorage.nombre = nombre;
                localStorage.apellidos = apellidos;
                localStorage.password = password;
                localStorage.usuario = usuario;
                let nombreMemoria = localStorage.nombre;
                let usuarioMemoria = localStorage.usuario;
                let passwordMemoria = localStorage.password;
                console.log("El usuario: " + usuarioMemoria);
                console.log("La contraseña: " + passwordMemoria);
                /*localStorage.setItem('fecha', fecha);
                localStorage.setItem('correo', correo);*/
                break;
            case 1:
                document.getElementById("form2").style.display = "none";
                document.getElementById("form3").style.display = "block";
                contador = 2;
                break;
            case 2:
                document.getElementById("form3").style.display = "none";
                document.getElementById("form4").style.display = "block";
                document.getElementById("principal").style.padding = "0px 0px";
                document.getElementById("principal").style.height = "750px";
                document.getElementById("formulario").style.height = "800px";
                contador = 3;
                break;
            case 4:
                document.getElementById("form5").style.display = "none";
                document.getElementById("form4").style.display = "block";
                alert(' Has enviado correctamente los datos.\n\nRecibiras un correo de confirmación en pocos minutos. ')
                formulario.reset()
                break;
        }
    } else {
        console.log("TODO ES FALSO")
    }
});
/*
function validarSWIFTForm(swift) {
    if (typeof getBICBank(iban.value.substring(5, 9) === 'undefined')) {
        swift.placeholder = "IBAN INCORRECTO"
        iban.style.background = 'red';
    } else {
        swift.placeholder = getBICBank(iban.value.substring(5, 9));
        iban.style.background = 'white';
    }
}
*/
function validarNombre(nombre) {
    if (nombre.value.length < 1) {
        nombre.style.background = 'red';
    }
}
function validarApellido(apellidos) {
    if (apellidos.value.length < 1) {
        apellidos.style.background = 'red';
    }
}
function validarCorreo(correo) {
    if (!regexEmail.test(correo.value)) {
        correo.style.background = 'red';
    }
}
function validarTelefono(telefono) {
    if (!regexMOVIL.test(telefono.value)) {
        telefono.style.background = 'red';
    }
}
function validarDNI(dni) {
    if (!regexDNI.test(dni.value)) {
        dni.style.background = 'red';
    }
}
function validarIBAN(iban) {
    if (!regexIBAN.test(iban.value)) {
        iban.style.background = 'red';
    }
}

function validarUsuario(usuario) {
    if (usuario.value.length < 1) {
        usuario.style.background = 'red';
    }
}
function validarFecha(fecha) {
    if (fecha.value.substring(0, 4) > 2004 || fecha.value.substring(0, 4) == "") {
        fecha.style.background = 'red';
    }
}

function getBICBank(entidad) {
    console.log("ha ENTRADO");
    var bicMap = new Object();
    bicMap["0001"] = "BSABESBBXXX";
    bicMap["0003"] = "BDEPESM1XXX";
    bicMap["0004"] = "POPUESMMXXX";
    bicMap["0008"] = "BSABESBBXXX";
    bicMap["0009"] = "BBVAESMMXXX";
    bicMap["0010"] = "BBVAESMMXXX";
    bicMap["0013"] = "BSABESBBXXX";
    bicMap["0015"] = "BBVAESMMXXX";
    bicMap["0016"] = "BSCHESMMXXX";
    bicMap["0019"] = "DEUTESBBXXX";
    bicMap["0020"] = "BBVAESMMXXX";
    bicMap["0021"] = "BDEPESM1XXX";
    bicMap["0024"] = "POPUESMMXXX";
    bicMap["0029"] = "CSSOES2SXXX";
    bicMap["0030"] = "BSCHESMMXXX";
    bicMap["0031"] = "ETCHES2GXXX";
    bicMap["0035"] = "BBVAESMMXXX";
    bicMap["0036"] = "SABNESMMXXX";
    bicMap["0041"] = "CAIXESBBXXX";
    bicMap["0042"] = "BSABESBBXXX";
    bicMap["0043"] = "BSABESBBXXX";
    bicMap["0044"] = "BBVAESMMXXX";
    bicMap["0045"] = "BBVAESMMXXX";
    bicMap["0046"] = "GALEES2GXXX";
    bicMap["0049"] = "BSCHESMMXXX";
    bicMap["0050"] = "BBVAESMMXXX";
    bicMap["0053"] = "BSCHESMMXXX";
    bicMap["0056"] = "CAHMESMMXXX";
    bicMap["0057"] = "BVADESMMXXX";
    bicMap["0058"] = "BNPAESMMXXX";
    bicMap["0059"] = "MADRESMMXXX";
    bicMap["0061"] = "BMARES2MXXX";
    bicMap["0062"] = "BBVAESMMXXX";
    bicMap["0063"] = "CAHMESMMXXX";
    bicMap["0065"] = "BARCESMMXXX";
    bicMap["0067"] = "BSCHESMMXXX";
    bicMap["0068"] = "BBVAESMMXXX";
    bicMap["0069"] = "CAIXESBBXXX";
    bicMap["0072"] = "POPUESMMXXX";
    bicMap["0073"] = "OPENESMMXXX";
    bicMap["0075"] = "POPUESMMXXX";
    bicMap["0076"] = "BSABESBBXXX";
    bicMap["0077"] = "BBVAESMMXXX";
    bicMap["0078"] = "BAPUES22XXX";
    bicMap["0081"] = "BSABESBBXXX";
    bicMap["0082"] = "POPUESMMXXX";
    bicMap["0085"] = "BSCHESMMXXX";
    bicMap["0086"] = "NORTESMMXXX";
    bicMap["0087"] = "CAHMESMMXXX";
    bicMap["0093"] = "CAIXESBBXXX";
    bicMap["0094"] = "BVALESMMXXX";
    bicMap["0095"] = "POPUESMMXXX";
    bicMap["0097"] = "POPUESMMXXX";
    bicMap["0099"] = "AHCRESVVXXX";
    bicMap["0099"] = "CAHMESMMXXX";
    bicMap["0100"] = "BSCHESMMXXX";
    bicMap["0101"] = "CAIXESBBXXX";
    bicMap["0102"] = "BBVAESMMXXX";
    bicMap["0103"] = "BARCESMMXXX";
    bicMap["0104"] = "BBVAESMMXXX";
    bicMap["0107"] = "BNPAESMSXXX";
    bicMap["0108"] = "SOGEESMMXXX";
    bicMap["0109"] = "BSCHESMMXXX";
    bicMap["0112"] = "BSABESBBXXX";
    bicMap["0114"] = "CAIXESBBXXX";
    bicMap["0118"] = "BSABESBBXXX";
    bicMap["0119"] = "BSABESBBXXX";
    bicMap["0122"] = "CITIES2XXXX";
    bicMap["0124"] = "CESCESBBXXX";
    bicMap["0125"] = "BAOFESM1XXX";
    bicMap["0127"] = "BBVAESMMXXX";
    bicMap["0128"] = "BKBKESMMXXX";
    bicMap["0130"] = "CGDIESMMXXX";
    bicMap["0131"] = "BESMESMMXXX";
    bicMap["0133"] = "MIKBESB1XXX";
    bicMap["0136"] = "AREBESMMXXX";
    bicMap["0137"] = "BBVAESMMXXX";
    bicMap["0138"] = "BKOAES22XXX";
    bicMap["0142"] = "CAIXESBBXXX";
    bicMap["0149"] = "BNPAESMSXXX";
    bicMap["0151"] = "CHASESM3XXX";
    bicMap["0154"] = "BSUIESMMXXX";
    bicMap["0155"] = "BRASESMMXXX";
    bicMap["0156"] = "ABNAESMMXXX";
    bicMap["0159"] = "COBAESMXXXX";
    bicMap["0160"] = "BOTKESMXXXX";
    bicMap["0162"] = "MIDLESMMXXX";
    bicMap["0167"] = "GEBAESMMXXX";
    bicMap["0168"] = "BBRUESMXXXX";
    bicMap["0169"] = "NACNESMMXXX";
    bicMap["0182"] = "BBVAESMMXXX";
    bicMap["0184"] = "BEDFESM1XXX";
    bicMap["0185"] = "BSABESBBXXX";
    bicMap["0186"] = "BFIVESBBXXX";
    bicMap["0188"] = "ALCLESMMXXX";
    bicMap["0190"] = "BBPIESMMXXX";
    bicMap["0196"] = "WELAESMMXXX";
    bicMap["0198"] = "BCOEESMMXXX";
    bicMap["0200"] = "PRVBESB1XXX";
    bicMap["0202"] = "BBVAESMMXXX";
    bicMap["0205"] = "DEUTESBBXXX";
    bicMap["0208"] = "CSSOES2SXXX";
    bicMap["0209"] = "BSABESBBXXX";
    bicMap["0210"] = "GALEES2GXXX";
    bicMap["0216"] = "POHIESMMXXX";
    bicMap["0219"] = "BMCEESMMXXX";
    bicMap["0220"] = "FIOFESM1XXX";
    bicMap["0224"] = "SCFBESMMXXX";
    bicMap["0226"] = "UBSWESMMXXX";
    bicMap["0227"] = "BBVAESMMXXX";
    bicMap["0229"] = "POPLESMMXXX";
    bicMap["0230"] = "BSABESBBXXX";
    bicMap["0232"] = "INVLESMMXXX";
    bicMap["0233"] = "POPIESMMXXX";
    bicMap["0234"] = "CCOCESMMXXX";
    bicMap["0235"] = "PICHESMMXXX";
    bicMap["0237"] = "CSURES2CXXX";
    bicMap["0238"] = "PSTRESMMXXX";
    bicMap["0239"] = "EVOBESMMXXX";
    bicMap["0486"] = "CECAESMM086";
    bicMap["0487"] = "GBMNESMMXXX";
    bicMap["0490"] = "CAIXESBBXXX";
    bicMap["1001"] = "BBVAESMMXXX";
    bicMap["1004"] = "BBVAESMMXXX";
    bicMap["1005"] = "BBVAESMMXXX";
    bicMap["1301"] = "BBVAESMMXXX";
    bicMap["1302"] = "BBVAESMMXXX";
    bicMap["1460"] = "CRESESMMXXX";
    bicMap["1465"] = "INGDESMMXXX";
    bicMap["1469"] = "BBVAESMMXXX";
    bicMap["1474"] = "CITIESMXXXX";
    bicMap["1480"] = "VOWAES21XXX";
    bicMap["1484"] = "BSCHESMMXXX";
    bicMap["1485"] = "BOFAES2XXXX";
    bicMap["1490"] = "SELFESMMXXX";
    bicMap["1491"] = "TRIOESMMXXX";
    bicMap["1494"] = "BCITESMMXXX";
    bicMap["1513"] = "CGDIESMMXXX";
    bicMap["1524"] = "UBIBESMMXXX";
    bicMap["1534"] = "KBLXESMMXXX";
    bicMap["1544"] = "BACAESMMXXX";
    bicMap["1545"] = "AGRIESMMXXX";
    bicMap["2000"] = "CECAESMMXXX";
    bicMap["2001"] = "CECAESMM105";
    bicMap["2005"] = "BSABESBBXXX";
    bicMap["2006"] = "UCJAES2MXXX";
    bicMap["2007"] = "UCJAES2MXXX";
    bicMap["2010"] = "CECAESMM010";
    bicMap["2010"] = "CECAESMM086";
    bicMap["2011"] = "CAIXESBBXXX";
    bicMap["2012"] = "CAIXESBBXXX";
    bicMap["2013"] = "CESCESBBXXX";
    bicMap["2015"] = "BASKES2BXXX";
    bicMap["2016"] = "BASKES2BXXX";
    bicMap["2017"] = "CECAESMM017";
    bicMap["2017"] = "CECAESMM086";
    bicMap["2018"] = "CAIXESBBXXX";
    bicMap["2019"] = "CECAESMM099";
    bicMap["2020"] = "UCJAES2MXXX";
    bicMap["2021"] = "CAHMESMMXXX";
    bicMap["2022"] = "CAHMESMMXXX";
    bicMap["2024"] = "CSURES2CXXX";
    bicMap["2025"] = "CSURES2CXXX";
    bicMap["2028"] = "CECAESMM105";
    bicMap["2030"] = "CAIXESBBXXX";
    bicMap["2031"] = "CECAESMM031";
    bicMap["2032"] = "CAIXESBBXXX";
    bicMap["2033"] = "CAIXESBBXXX";
    bicMap["2034"] = "CAIXESBBXXX";
    bicMap["2035"] = "CSPAES2LXXX";
    bicMap["2037"] = "CAHMESMMXXX";
    bicMap["2038"] = "CAHMESMMXXX";
    bicMap["2039"] = "UCJAES2MXXX";
    bicMap["2040"] = "BBVAESMMXXX";
    bicMap["2041"] = "CESCESBBXXX";
    bicMap["2042"] = "CAHMESMMXXX";
    bicMap["2043"] = "CECAESMM043";
    bicMap["2045"] = "CECAESMM045";
    bicMap["2046"] = "CAGLESMMXXX";
    bicMap["2048"] = "CECAESMM048";
    bicMap["2049"] = "CSPAES2LXXX";
    bicMap["2051"] = "CECAESMM051";
    bicMap["2052"] = "CAHMESMMXXX";
    bicMap["2053"] = "CAIXESBBXXX";
    bicMap["2054"] = "CAIXESBBXXX";
    bicMap["2055"] = "CECAESMM099";
    bicMap["2056"] = "CECAESMM056";
    bicMap["2057"] = "CAGLESMMXXX";
    bicMap["2058"] = "UCJAES2MXXX";
    bicMap["2059"] = "BBVAESMMXXX";
    bicMap["2060"] = "CAHMESMMXXX";
    bicMap["2061"] = "CSSOES2SXXX";
    bicMap["2062"] = "BASKES2BXXX";
    bicMap["2063"] = "BASKES2BXXX";
    bicMap["2065"] = "CAIXESBBXXX";
    bicMap["2066"] = "CECAESMM066";
    bicMap["2068"] = "CAHMESMMXXX";
    bicMap["2069"] = "CAHMESMMXXX";
    bicMap["2070"] = "CAIXESBBXXX";
    bicMap["2071"] = "CAIXESBBXXX";
    bicMap["2072"] = "CSSOES2SXXX";
    bicMap["2073"] = "CESCESBBXXX";
    bicMap["2074"] = "BBVAESMMXXX";
    bicMap["2075"] = "CECAESMM105";
    bicMap["2076"] = "BSABESBBXXX";
    bicMap["2077"] = "CAHMESMMXXX";
    bicMap["2078"] = "CSPAES2LXXX";
    bicMap["2079"] = "CSPAES2LXXX";
    bicMap["2080"] = "CAGLESMMXXX";
    bicMap["2081"] = "BSABESBBXXX";
    bicMap["2082"] = "BASKES2BXXX";
    bicMap["2083"] = "BASKES2BXXX";
    bicMap["2084"] = "CSPAES2LXXX";
    bicMap["2085"] = "CAZRES2ZXXX";
    bicMap["2086"] = "CECAESMM086";
    bicMap["2088"] = "BBVAESMMXXX";
    bicMap["2089"] = "CECAESMM031";
    bicMap["2090"] = "BSABESBBXXX";
    bicMap["2091"] = "CAGLESMMXXX";
    bicMap["2092"] = "UCJAES2MXXX";
    bicMap["2093"] = "BSABESBBXXX";
    bicMap["2094"] = "CAHMESMMXXX";
    bicMap["2095"] = "BASKES2BXXX";
    bicMap["2096"] = "CSPAES2LXXX";
    bicMap["2097"] = "BASKES2BXXX";
    bicMap["2098"] = "CAIXESBBXXX";
    bicMap["2099"] = "CECAESMM099";
    bicMap["2100"] = "CAIXESBBXXX";
    bicMap["2101"] = "BASKES2BXXX";
    bicMap["2102"] = "BSABESBBXXX";
    bicMap["2103"] = "UCJAES2MXXX";
    bicMap["2104"] = "CSSOES2SXXX";
    bicMap["2105"] = "CECAESMM105";
    bicMap["2106"] = "CAIXESBBXXX";
    bicMap["2107"] = "BBVAESMMXXX";
    bicMap["3001"] = "BCOEESMM001";
    bicMap["3005"] = "BCOEESMM005";
    bicMap["3007"] = "BCOEESMM007";
    bicMap["3008"] = "BCOEESMM008";
    bicMap["3009"] = "BCOEESMM009";
    bicMap["3016"] = "BCOEESMM016";
    bicMap["3017"] = "BCOEESMM017";
    bicMap["3018"] = "BCOEESMM018";
    bicMap["3020"] = "BCOEESMM020";
    bicMap["3021"] = "BCOEESMM191";
    bicMap["3022"] = "BCOEESMM060";
    bicMap["3023"] = "BCOEESMM023";
    bicMap["3024"] = "BAOFESM1XXX";
    bicMap["3025"] = "CDENESBBXXX";
    bicMap["3029"] = "CCRIES2A029";
    bicMap["3035"] = "CLPEES2MXXX";
    bicMap["3045"] = "CCRIES2A045";
    bicMap["3054"] = "CCRIES2AXXX";
    bicMap["3056"] = "BCOEESMM190";
    bicMap["3057"] = "CCRIES2AXXX";
    bicMap["3058"] = "CCRIES2AXXX";
    bicMap["3059"] = "BCOEESMM059";
    bicMap["3060"] = "BCOEESMM060";
    bicMap["3061"] = "CCRIES2AXXX";
    bicMap["3062"] = "BCOEESMM190";
    bicMap["3063"] = "BCOEESMM063";
    bicMap["3064"] = "BCOEESMM190";
    bicMap["3065"] = "BCOEESMM187";
    bicMap["3066"] = "BCOEESMM191";
    bicMap["3067"] = "BCOEESMM067";
    bicMap["3068"] = "CAGLESMMXXX";
    bicMap["3069"] = "CAZRES2ZXXX";
    bicMap["3070"] = "BCOEESMM070";
    bicMap["3072"] = "CCRIES2AXXX";
    bicMap["3076"] = "BCOEESMM076";
    bicMap["3078"] = "BCOEESMM060";
    bicMap["3079"] = "BCOEESMM187";
    bicMap["3080"] = "BCOEESMM080";
    bicMap["3081"] = "BCOEESMM081";
    bicMap["3082"] = "CCRIES2AXXX";
    bicMap["3083"] = "CCRIES2AXXX";
    bicMap["3084"] = "CVRVES2BXXX";
    bicMap["3085"] = "BCOEESMM085";
    bicMap["3089"] = "BCOEESMM089";
    bicMap["3092"] = "BCOEESMM191";
    bicMap["3093"] = "BCOEESMM191";
    bicMap["3094"] = "CCRIES2AXXX";
    bicMap["3095"] = "CCRIES2A095";
    bicMap["3096"] = "BCOEESMM096";
    bicMap["3098"] = "BCOEESMM098";
    bicMap["3102"] = "BCOEESMM102";
    bicMap["3102"] = "CCRIES2A102";
    bicMap["3104"] = "BCOEESMM104";
    bicMap["3105"] = "CCRIES2A105";
    bicMap["3108"] = "CCRIES2AXXX";
    bicMap["3110"] = "CCRIES2A110";
    bicMap["3110"] = "BCOEESMM110";
    bicMap["3111"] = "BCOEESMM111";
    bicMap["3112"] = "CCRIES2A112";
    bicMap["3113"] = "BCOEESMM113";
    bicMap["3114"] = "CCRIES2AXXX";
    bicMap["3115"] = "BCOEESMM115";
    bicMap["3116"] = "BCOEESMM116";
    bicMap["3117"] = "BCOEESMM117";
    bicMap["3118"] = "CCRIES2A118";
    bicMap["3119"] = "CCRIES2A119";
    bicMap["3121"] = "CCRIES2A121";
    bicMap["3123"] = "CCRIES2A123";
    bicMap["3127"] = "BCOEESMM127";
    bicMap["3128"] = "BCOEESMM190";
    bicMap["3129"] = "BCOEESMM191";
    bicMap["3130"] = "BCOEESMM130";
    bicMap["3131"] = "CCRIES2AXXX";
    bicMap["3134"] = "BCOEESMM134";
    bicMap["3135"] = "CCRIES2A135";
    bicMap["3137"] = "CCRIES2AXXX";
    bicMap["3138"] = "BCOEESMM138";
    bicMap["3140"] = "BCOEESMM140";
    bicMap["3141"] = "CESCESBBXXX";
    bicMap["3144"] = "BCOEESMM144";
    bicMap["3146"] = "CCCVESM1XXX";
    bicMap["3147"] = "CCRIES2AXXX";
    bicMap["3150"] = "BCOEESMM150";
    bicMap["3152"] = "CCRIES2A152";
    bicMap["3157"] = "CCRIES2A157";
    bicMap["3159"] = "BCOEESMM159";
    bicMap["3160"] = "CCRIES2A160";
    bicMap["3161"] = "BCOEESMM060";
    bicMap["3162"] = "BCOEESMM162";
    bicMap["3163"] = "CCRIES2AXXX";
    bicMap["3165"] = "CCRIES2A165";
    bicMap["3166"] = "BCOEESMM166";
    bicMap["3167"] = "CCRIES2AXXX";
    bicMap["3171"] = "BCOEESMM191";
    bicMap["3172"] = "CCOCESMMXXX";
    bicMap["3174"] = "BCOEESMM174";
    bicMap["3177"] = "CCRIES2AXXX";
    bicMap["3177"] = "BCOEESMM177";
    bicMap["3179"] = "CCRIES2A179";
    bicMap["3181"] = "CCRIES2AXXX";
    bicMap["3183"] = "CASDESBBXXX";
    bicMap["3186"] = "CCRIES2A186";
    bicMap["3187"] = "BCOEESMM187";
    bicMap["3188"] = "CCRIES2AXXX";
    bicMap["3189"] = "BCOEESMM191";
    bicMap["3190"] = "BCOEESMM190";
    bicMap["3191"] = "BCOEESMM191";
    bicMap["9000"] = "ESPBESMMXXX";

    return bicMap[entidad];
}

