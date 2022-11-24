formulario.addEventListener("submit", e => {
    if(document.getElementById("usuarioform").value=="capibara"){
        alert("Perfect");
        window.location.href = 'http://marca.com';
    }else{
        alert("Esto saldra")
        window.location.href = 'http://amazon.com';
    }})

    