var elemento = document.getElementById('enviar');
elemento.onclick = function() {
    var valor = document
    .getElementById('nome').value;
    console.log(valor);
}

function enviar() {
    var valor = document
    .getElementById('entradaDados').value;
    console.log("Você digitou : " + valor);
}