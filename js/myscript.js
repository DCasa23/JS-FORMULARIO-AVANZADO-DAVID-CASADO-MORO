//Aquí se encontrarán las diferentes variables que se usarán a lo largo del formulario

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
const condiciones=document.getElementById("condiciones")


let colorequipo = "";
let equipoElegido = "";
let objetoEquipo = "";
let equipoAdversario = "";
let equipoAdversarioImagen = "";
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
valor = Math.floor(Math.random() * (18-1)+1)


//La clase bono nos permitirá clasificar y almacenar los bonos del carrito
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
//La clase usuario almacenará toda la informacion validada en el formulario
class Usuario {

    constructor(nombreUsuario, usuarioUsuario, passwordUsuario, fechaUsuario, apellidosUsuario, correoUsuario, DNIUsuario, telefonoUsuario, direccionUsuario, CPUsuario, ciudadUsuario, paisUsuario, IBANUsuario, SWIFTUsuario) {
        this.nombreUsuario = nombreUsuario;
        this.usuarioUsuario = usuarioUsuario;
        this.passwordUsuario = passwordUsuario;
        this.fechaUsuario = fechaUsuario;
        this.correoUsuario = correoUsuario;
        this.apellidosUsuario = apellidosUsuario;
        this.DNIUsuario = DNIUsuario;
        this.telefonoUsuario = telefonoUsuario;
        this.direccionUsuario = direccionUsuario;
        this.CPUsuario = CPUsuario;
        this.ciudadUsuario = ciudadUsuario;
        this.paisUsuario = paisUsuario;
        this.IBANUsuario = IBANUsuario;
        this.SWIFTUsuario = SWIFTUsuario;

    }



}
//Estas funciones de JQuery nos permitirán seleccionar el equipo que queremos elegir 

$("#equipos li").click(function () {
    equipoElegido = $(this).attr('id');
    if ($('#form4').find(this).length) {

        liga = "AFC";
    } else {

        liga = "NFC";
    }
    
    $("#sidebar").animate({ opacity: '0.0' }, "high");
    $("#sidebar").animate({ opacity: '0.8' }, "slow");
    $("#sidebar").css('display', 'block');
    $("#sidebarright").css('display', 'block');
    $("#tituloEquipo").empty();
    colorequipo = $(this).css('background-image');
    colorequipo = colorequipo.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    
    $("#tituloEquipo").append("<img src=" + colorequipo + " style=\"width:100px\";\"height:200px\"><h1 style=\"float:right ; background-color:grey;margin-right:50px;-webkit-text-stroke: 0.2px white;color: black;\";>&nbsp;" + equipoElegido +"</h1>");
    if (liga == "AFC") {
        equipoAdversario = $("#form5 #equipos ul li:nth-child(" + valor + ")").attr('id');
    } else {
        equipoAdversario = $("#form4 #equipos ul li:nth-child(" + valor + ")").attr('id');
    }

    equipoAdversarioImagen = $('#' + equipoAdversario).css('background-image');
    equipoAdversario = equipoAdversarioImagen.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    
});

// Este funcion permitirá seleccionar la opcion de numeros de partidos

$("#botonizq").click(function () {
    if (arrayEquiposFiltro.includes(equipoElegido)) {
        $("#parrafo").text("Ya ha introducido una compra para ese Equipo");
    } else {
        localStorage.setItem('equipoFavorito', colorequipo);
        localStorage.setItem('equipoEnemigo', equipoAdversario);
        localStorage.setItem('nombreEquipo', equipoElegido);
        $("#parrafo").empty();
        arrayEquiposFiltro.push(equipoElegido);
        lineaCompra = ($('input[name=numero]:checked').val());

        objetoEquipo = equipoElegido;
        objetoEquipo = new Bono(equipoElegido, liga, lineaCompra);
        arrayEquipos.push(objetoEquipo);

        $("#sidebarright").animate({ opacity: '0.0' }, "high");
        $("#sidebarright").animate({ opacity: '0.8' }, "slow");
        

        precioTotal = precioTotal + arrayEquipos[contadorbonos].precio;
        $("#listaCarrito").append("<li>" + arrayEquipos[contadorbonos].liga + " - " + arrayEquipos[contadorbonos].equipo + " " + arrayEquipos[contadorbonos].partidos + " partidos:" + arrayEquipos[contadorbonos].precio + "€</li>");
        $('#precioTotal').html("Precio Total:                               " + precioTotal + "€");

        $("#carrito").animate({ scrollTop: $('#carrito')[0].scrollHeight }, 1000);
        contadorbonos++;
    }

});

//Estas funciones JQuery permitirán confirmar o borrar la cesta de la compra en la última etapa del formulario  

$("#botonBorrar").click(function () {
    console.log("ENTRAS")
    $('#carrito li').remove();
    precioTotal = 0;
    arrayEquipos = [];
    arrayEquiposFiltro = [];
    contadorbonos = 0;
    $('#precioTotal').html("Precio Total:                               " + precioTotal + "€");
})
$("#botonEnviar").click(function () {
    if (precioTotal > 0) {
        localStorage.setItem('myArray', JSON.stringify(arrayEquiposFiltro));
        window.location.href = 'perfil.html';
    } else {
        $("#parrafo").append("<span style='color: black;font-weight: bold;opacity:1.25;'>El carrito esta vacio, pulse comprar cuando haya elegido.</span>");
    }
    $('#carrito li').remove();
    precioTotal = 0;
    $('#precioTotal').html("Precio Total:                               " + precioTotal + "€");
})


//Estas dos funciones permitirán movernos entre las dos ligas 

function moverAFC() {
    document.getElementById("form4").style.display = "block";
    document.getElementById("form5").style.display = "none";
}
function moverNFC() {
    document.getElementById("form4").style.display = "none";
    document.getElementById("form5").style.display = "block";
}

//Serán las diferentes validaciones de los campos del formulario a tiempo real por medio ONKEYUP

function validarName() {
    if (nombre.value.length < 2) {
        nombre.style.border = '2px solid red';
        nombre.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El nombre introducido es pequeño o esta vacio</span>";
        document.getElementById("textoNombre").innerHTML = "";


        incorrectoNombre = true;


    } else {
        nombre.style.background = ' #3CBC8D';
        nombre.style.color = 'white';
        nombre.style.border = '2px solid green';
        document.getElementById("textoNombre").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoNombre = false;
    }
}
function validarApellidos() {
    if (apellidos.value.length < 5) {
        apellidos.style.background = '#ff99b2';
        apellidos.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El apellido introducido es pequeño o esta vacio</span>";
        document.getElementById("textoApellidos").innerHTML = "";

        incorrectoApellidos = true


    } else {
        apellidos.style.background = ' #3CBC8D';
        apellidos.style.color = 'white';
        apellidos.style.border = '2px solid green';
        document.getElementById("textoApellidos").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoApellidos = false;
    }
}
function validarCorreoForm() {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(correoform.value)) {
        correo.style.background = '#ff99b2';
        correo.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El correo tiene un formato inadecuado</span>";
        document.getElementById("textoCorreo").innerHTML = "";

        incorrectoCorreo = true


    } else {
        correo.style.background = ' #3CBC8D';
        correo.style.color = 'white';
        correo.style.border = '2px solid green';
        document.getElementById("textoCorreo").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoCorreo = false;
    }
}
function validarPassword() {
    if (password.value.length < 5) {
        password.style.border = '2px solid red';
        password.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El password introducido es pequeño o esta vacio</span>";
        document.getElementById("textoPassword").innerHTML = "";


        incorrectoPassword = true;


    } else {

        password.style.background = ' #3CBC8D';
        password.style.color = 'white';
        password.style.border = '2px solid green';
        document.getElementById("textoPassword").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoPassword = false;
    }
}
function validarTelefonoForm() {
    let regexMOVIL = /^(\d{3}[ ]\d{3}[ ]\d{3})|(\d{3}[ ]\d{2}[ ]\d{2}[ ]\d{2})$/;
    if (!regexMOVIL.test(telefonoform.value)) {

        telefono.style.background = '#ff99b2';
        telefono.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El telefono tiene un formato inadecuado</span>";
        document.getElementById("textoTelefono").innerHTML = "";

        incorrectoTelefono = true


    } else {

        telefono.style.background = ' #3CBC8D';
        telefono.style.color = 'white';
        telefono.style.border = '2px solid green';
        document.getElementById("textoTelefono").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoTelefono = false;
    }
}
function validarUsuarioForm() {
    if (usuario.value.length < 5) {

        usuario.style.border = '2px solid red';
        usuario.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El usuario introducido es pequeño o esta vacio</span>";
        document.getElementById("textoUsuario").innerHTML = "";


        incorrectoUsuario = true;


    } else {

        usuario.style.background = ' #3CBC8D';
        usuario.style.color = 'white';
        usuario.style.border = '2px solid green';
        document.getElementById("textoUsuario").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoUsuario = false;
    }
}


function validarFechaForm() {
    if (fecha.value.substring(0, 4) > 2004 || fecha.value.substring(0, 4) == "") {

        fecha.style.background = '#ff99b2';
        fecha.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>La fecha indica que eres menor de edad</span>";
        document.getElementById("textoFecha").innerHTML = "";

        incorrectoFecha = true


    } else {

        fecha.style.background = 'white';

        fecha.style.background = ' #3CBC8D';
        fecha.style.color = 'white';
        fecha.style.border = '2px solid green';
        document.getElementById("textoFecha").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoFecha = false;
    }
}
function validarDNIForm() {
    let regexDNI = /^(\d{8})([A-z])$/;
    if (!regexDNI.test(dni.value)) {

        dni.style.border = '2px solid red';
        dni.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El dni introducido es pequeño o esta vacio</span>";
        document.getElementById("textoDni").innerHTML = "";

        
        incorrectoDni = true;

        password
    } else {

        dni.style.background = ' #3CBC8D';
        dni.style.color = 'white';
        dni.style.border = '2px solid green';
        document.getElementById("textoDni").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoDni = false;
    }
}

function validarDireccionForm() {
    if (direccion.value.length < 5) {

        direccion.style.border = '2px solid red';
        direccion.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El direccion introducido es pequeño o esta vacio</span>";
        document.getElementById("textoDireccion").innerHTML = "";

        
        incorrectoDireccion = true;


    } else {

        direccion.style.background = ' #3CBC8D';
        direccion.style.color = 'white';
        direccion.style.border = '2px solid green';
        document.getElementById("textoDireccion").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoDireccion = false;
    }
}
function validarCPForm() {
    if (cp.value.length != 5) {

        cp.style.border = '2px solid red';
        cp.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El cp introducido es pequeño o esta vacio</span>";
        document.getElementById("textoCP").innerHTML = "";

       
        incorrectoCP = true;


    } else {

        cp.style.background = ' #3CBC8D';
        cp.style.color = 'white';
        cp.style.border = '2px solid green';
        document.getElementById("textoCP").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoCP = false;
    }
}

function validarCiudadForm() {
    if (ciudad.value.length <= 2) {

        ciudad.style.border = '2px solid red';
        ciudad.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El ciudad introducido es pequeño o esta vacio</span>";
        document.getElementById("textoCiudad").innerHTML = "";

       
        incorrectoCiudad = true;


    } else {

        ciudad.style.background = ' #3CBC8D';
        ciudad.style.color = 'white';
        ciudad.style.border = '2px solid green';
        document.getElementById("textoCiudad").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoCiudad = false;
    }
}
function validarPaisForm() {
    if (pais.value.length < 4) {

        pais.style.border = '2px solid red';
        pais.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El pais introducido es pequeño o esta vacio</span>";
        document.getElementById("textoPais").innerHTML = "";

       
        incorrectoPais = true;


    } else {

        pais.style.background = ' #3CBC8D';
        pais.style.color = 'white';
        pais.style.border = '2px solid green';
        document.getElementById("textoPais").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoPais = false;
    }
}
function validarIBANForm() {
    let regexIBAN = /^(ES\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{2}[ ]\d{10})$/;
    if (!regexIBAN.test(iban.value)) {

        iban.style.background = '#ff99b2';
        iban.style.border = '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El iban tiene un formato inadecuado</span>";
        document.getElementById("textoIBAN").innerHTML = "";

        incorrectoIBAN = true


    } else {

        swift.placeholder = "CLICK AQUI PARA INTRODUCIR SWIFT"
        iban.style.background = ' #3CBC8D';
        iban.style.color = 'white';
        iban.style.border = '2px solid green';
        document.getElementById("textoIBAN").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
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
        swift.placeholder = "IBAN INCORRECTO"

        incorrectoSWIFT = true


    } else {
        if (typeof getBICBank(iban.value.substring(5, 9) === "string")) {
            swift.placeholder = getBICBank(iban.value.substring(5, 9));
            if (swift.placeholder.length == 11) {
                swift.style.background = ' #3CBC8D';
                swift.style.color = 'white';
                swift.style.border = '2px solid green';
                document.getElementById("textoSWIFT").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
                document.getElementById("parrafo").innerHTML = "";
                incorrectoSWIFT = false;

            } else {

                swift.style.background = '#ff99b2';
                swift.style.border = '2px solid red';
                document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El iban tiene un formato inadecuado</span>";
                document.getElementById("textoSWIFT").innerHTML = "";
                swift.placeholder = "IBAN INCORRECTO";
                incorrectoSWIFT = true;
            }


        }
    }
}
function validarCondiciones() {
    
    if (condiciones.checked == true) {
        
        document.getElementById("parrafo").innerHTML = "";
        incorrectoCondiciones = false;

    } else {
        
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>Tienes que Aceptar las condiciones para acceder</span>";
        document.getElementById("textoPais").innerHTML = "";

        
        incorrectoCondiciones = true;

        
    }
}

//Está función JS permité validar y pasar a las siguientes etapas al validar todas las validaciones juntas


formulario.addEventListener("submit", e => {
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
        validarCondiciones();
    }
    if (incorrectoApellidos == false && incorrectoNombre == false && incorrectoPassword == false && incorrectoUsuario == false && incorrectoFecha == false && incorrectoCorreo == false) {

        datosTotales = new Usuario(nombre.value, usuario.value, password.value, fecha.value, apellidos.value, correo.value, dni.value, telefono.value, direccion.value, cp.value, ciudad.value, pais.value, iban.value, swift.placeholder);
        const myJSON = JSON.stringify(datosTotales);
        const ObjCliente = JSON.parse(myJSON);
        localStorage.setItem('nombre', ObjCliente.nombreUsuario);
        localStorage.setItem('fecha', ObjCliente.fechaUsuario);
        localStorage.setItem('usuario', ObjCliente.usuarioUsuario);
        localStorage.setItem('password', ObjCliente.passwordUsuario);
        localStorage.setItem('apellidos', ObjCliente.apellidosUsuario);
        localStorage.setItem('correo', ObjCliente.correoUsuario);
        localStorage.setItem('DNI', ObjCliente.DNIUsuario);
        localStorage.setItem('telefono', ObjCliente.telefonoUsuario);
        localStorage.setItem('direccion', ObjCliente.direccionUsuario);
        localStorage.setItem('CP', ObjCliente.CPUsuario);
        localStorage.setItem('ciudad', ObjCliente.ciudadUsuario);
        localStorage.setItem('pais', ObjCliente.paisUsuario);
        localStorage.setItem('SWIFT', ObjCliente.SWIFTUsuario);
        localStorage.setItem('IBAN', ObjCliente.IBANUsuario);
    

        incorrecto1 = false;
    }
    if (contador == 1) {
        if (incorrectoCiudad == false && incorrectoCP == false && incorrectoPais == false && incorrectoTelefono == false && incorrectoDni == false && incorrectoDireccion == false) {
            incorrecto2 = false;
        }
    }
    if (contador == 2) {
        if (incorrectoSWIFT == false && incorrectoIBAN == false && incorrectoCondiciones==false) {
            incorrecto3 = false;
        }
    }

    //En cada caso, podremos pasar por medio de un interruptor y contador para saber en que etapa nos encontramos. También controlaremos la pelota

    if ((incorrecto1 == false && contador == 0) || (incorrecto2 == false && contador == 1) || (incorrecto3 == false && contador == 2)) {
        switch (contador) {
            case 0:
                $('#contenedorPelota').animate({ left: '400px' });
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota2.png" width="100px">');
                }, 50);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota.webp" width="100px">');
                }, 100);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota2.png" width="100px">');
                }, 150);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota.webp" width="100px">');
                }, 200);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota2.png" width="100px">');
                }, 250);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota.webp" width="100px">');
                }, 300);
                document.getElementById("form1").style.display = "none";
                document.getElementById("form2").style.display = "block";
                contador = 1;
                break;
            case 1:
                $('#contenedorPelota').animate({ left: '800px' });
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota2.png" width="100px">');
                }, 50);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota.webp" width="100px">');
                }, 100);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota2.png" width="100px">');
                }, 150);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota.webp" width="100px">');
                }, 200);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota2.png" width="100px">');
                }, 250);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota.webp" width="100px">');
                }, 300);
                document.getElementById("form2").style.display = "none";
                document.getElementById("form3").style.display = "block";
                contador = 2;
                break;
            case 2:
                $('#contenedorPelota').animate({ left: '1200px' });
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota2.png" width="100px">');
                }, 50);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota.webp" width="100px">');
                }, 100);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota2.png" width="100px">');
                }, 150);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota.webp" width="100px">');
                }, 200);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota2.png" width="100px">');
                }, 250);
                setTimeout(function () {
                    $('#pelotabotando').replaceWith('<img id="pelotabotando" src="../images/pelota.webp" width="100px">');
                }, 300);
                document.getElementById("form3").style.display = "none";
                document.getElementById("form4").style.display = "block";
                document.getElementById("principal").style.padding = "0px 0px";
                document.getElementById("principal").style.height = "620px";
                document.getElementById("formulario").style.height = "670px";
                contador = 3;
                break;
        }
    } else {
    }
});

//Mediante JQuery podremos desplazarnos hacia atras

$("#botonAtras0").click(function () {
    window.location.href = '../inicio.html';
})
$("#botonAtras1").click(function () {
    document.getElementById("form2").style.display = "none";
    document.getElementById("form1").style.display = "block";
    contador = 0;
})
$("#botonAtras2").click(function () {
    document.getElementById("form2").style.display = "block";
    document.getElementById("form3").style.display = "none";
    contador = 1;
})
$("#botonAtras3").click(function () {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebarright").style.display = "none";
    document.getElementById("form4").style.display = "none";
    document.getElementById("form5").style.display = "none";
    document.getElementById("form3").style.display = "block";
    document.getElementById("principal").style.padding = "30px 0px";
    document.getElementById("principal").style.height = "600px";
    document.getElementById("formulario").style.height = "100%";
    contador = 2;
})
$("#botonAtras4").click(function () {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebarright").style.display = "none";
    document.getElementById("form5").style.display = "none";
    document.getElementById("form3").style.display = "block";
    document.getElementById("principal").style.padding = "30px 0px";
    document.getElementById("principal").style.height = "560px";
    document.getElementById("formulario").style.height = "80%";
    contador = 2;
})


//Función para obtener el SWIFT por medio del IBAN

function getBICBank(entidad) {
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

