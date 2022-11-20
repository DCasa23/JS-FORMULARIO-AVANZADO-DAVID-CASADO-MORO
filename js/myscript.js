const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const correo = document.getElementById("correoform")
const telefono = document.getElementById("telefonoform")
const dni = document.getElementById("dni")
const iban = document.getElementById("iban")
const swift = document.getElementById("swift")
const usuario = document.getElementById("usuario")
const fecha = document.getElementById("fecha")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")



let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexIBAN = /^(ES\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{2}[ ]\d{10})$/;
    let regexDNI = /^(\d{8})([A-z])$/;
    let regexMOVIL = /^(\d{3}[ ]\d{3}[ ]\d{3})|(\d{3}[ ]\d{2}[ ]\d{2}[ ]\d{2})$/;


function validarName(){
    if (nombre.value.length < 5) {
        console.log("Esto esta rojo");
        nombre.style.border= '2px solid red';
        nombre.style.background='#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El nombre introducido es pequeño</span>";
        document.getElementById("textoNombre").innerHTML ="";
        
        //warnings += ' El nombre esta vacio <br><br>'
        incorrecto = true;

    
    }else{
        console.log("Esto esta verde")
        nombre.style.background=' #3CBC8D';
        nombre.style.color='white';
        nombre.style.border= '2px solid green';
        document.getElementById("textoNombre").innerHTML ="<img src=\"images/ok.png\" width=\'30px\' >";
        document.getElementById("parrafo").innerHTML ="";
    }
}
function validarApellidos(){
    if (apellidos.value.length < 5) {
        console.log("Esto esta rojo")
        apellidos.style.background='#ff99b2';
        apellidos.style.border= '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El nombre introducido es pequeño</span>";
        document.getElementById("textoApellidos").innerHTML ="";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrecto = true

    
    }else{
        console.log("Esto esta verde")
        apellidos.style.background='white';
        console.log("Esto esta verde")
        apellidos.style.background=' #3CBC8D';
        apellidos.style.color='white';
        apellidos.style.border= '2px solid green';
        document.getElementById("textoApellidos").innerHTML ="<img src=\"images/ok.png\" width=\'30px\' >";
        document.getElementById("parrafo").innerHTML ="";
    }
}
function validarCorreoForm(){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(correoform.value)) {
        console.log("Esto esta rojo")
        correo.style.background='#ff99b2';
        correo.style.border= '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El nombre introducido es pequeño</span>";
        document.getElementById("textoCorreo").innerHTML ="";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrecto = true

    
    }else{
        console.log("Esto esta verde")
        correo.style.background=' #3CBC8D';
        correo.style.color='white';
        correo.style.border= '2px solid green';
        document.getElementById("textoCorreo").innerHTML ="<img src=\"images/ok.png\" width=\'30px\' >";
        document.getElementById("parrafo").innerHTML ="";
    }
}
function validarTelefonoForm(){
    let regexMOVIL = /^(\d{3}[ ]\d{3}[ ]\d{3})|(\d{3}[ ]\d{2}[ ]\d{2}[ ]\d{2})$/;
    if (!regexMOVIL.test(telefonoform.value)) {
        console.log("Esto esta rojo de telefono")
        telefono.style.background='#ff99b2';
        telefono.style.border= '2px solid red';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El nombre introducido es pequeño</span>";
        document.getElementById("textoTelefono").innerHTML ="";
        //warnings += ' El nombre esta vacio <br><br>'
        incorrecto = true

    
    }else{
        console.log("Esto esta verde de telefono")
        telefono.style.background=' #3CBC8D';
        telefono.style.color='white';
        telefono.style.border= '2px solid green';
        document.getElementById("textoTelefono").innerHTML ="<img src=\"images/ok.png\" width=\'30px\' >";
        document.getElementById("parrafo").innerHTML ="";
    }
}/*
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
  
    e.preventDefault()
    let warnings = ""
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
    document.getElementById("contenedor").innerHTML = "<br><br><label for=\"DNI\">DNI:</label><br><input type=\"text\" id=\"dni\" name=\"dni\" style= \"width:250px\" placeholder=\"\"><br><br><label for=\"IBAN\">IBAN:</label><br><input type=\"text\" id=\"iban\" name=\"iban\" style= \"width:250px\" placeholder=\"ESXX-XXXX-XXXX-XX-XXXXXXXXXX\"><br><br><label for=\"SWIFT\"  id=\"swift2\">Swift</label><br><input type=\"text\" onclick=\"cambiarSWIFT(this)\"id=\"swift\" name=\"swift\" autocomplete=\"off\" style= \"width:250px\" placeholder=\"Clicka aquí al introducir el IBAN\" maxlength=\"0\" ><br><br><label for=\"USER\">Nombre de Usuario:</label><br><input type=\"text\" id=\"usuario\" name=\"usuario\" style= \"width:250px\" placeholder=\"\"><br><br><label for=\"DATE\">Fecha de Nacimiento:</label><br><input type=\"date\" id=\"fecha\" name=\"fecha\" style= \"width:250px\"placeholder=\"\" min=\"1920-01-01\" max=\"2021-12-31\" >";
    if (warnings.length==0){
        alert(' Has enviado correctamente los datos.\n\nRecibiras un correo de confirmación en pocos minutos. ')
        formulario.reset()
        
        warnings=""
    }
});

function borrarTodo(){
    
    formulario.reset();
    swift.placeholder = "Clicka aquí al introducir el IBAN";
}
function cambiarSWIFT(swift) {
    if(typeof getBICBank(iban.value.substring(5, 9)==='undefined')){
        swift.placeholder = "IBAN INCORRECTO"
        iban.style.background='red';
    }else{
        swift.placeholder = getBICBank(iban.value.substring(5, 9));
        iban.style.background='white';
    }
}

function validarNombre(nombre){
    if (nombre.value.length < 1) {
        nombre.style.background='red';
    }
}
function validarApellido(apellidos){
    if (apellidos.value.length < 1) {
        apellidos.style.background='red';
    }
}
function validarCorreo(correo){
    if (!regexEmail.test(correo.value)) {
        correo.style.background='red';
    }
}
function validarTelefono(telefono){
    if (!regexMOVIL.test(telefono.value)) {
        telefono.style.background='red';
    }
}
function validarDNI(dni){
    if (!regexDNI.test(dni.value)) {
        dni.style.background='red';
    }
}
function validarIBAN(iban){
    if (!regexIBAN.test(iban.value)) {
        iban.style.background='red';
    }
}

function validarUsuario(usuario){
    if (usuario.value.length < 1) {
        usuario.style.background='red';
    }
}
function validarFecha(fecha){
    if (fecha.value.substring(0,4)>2004||fecha.value.substring(0,4)=="") {
        fecha.style.background='red';
    }
}
function presionar(x){
    x.style.background = "white";
}
function despresionar(x){
    x.style.background =  "gainsboro";
}
function cambiarFotoIzq(x){
    x.src="images/derby.webp";
}
function cambiarFotoDer(x){
    x.src="images/inconveniente.webp";
}
function volverFotoIzq(x){
    x.src="images/quijano.jpg";
}
function volverFotoDer(x){
    x.src="images/elselu.jpg";
}
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
