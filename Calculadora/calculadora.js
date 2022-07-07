var v1 = document.querySelector("#v1");
var v2 = document.querySelector("#v2");
var resultado = document.querySelector("span");

function somar() {
    resultado.innerText = parseInt(v1.value) + parseInt(v2.value);
}

function subtrair() {
    resultado.innerText = parseInt(v1.value) - parseInt(v2.value);
}

function multiplicar() {
    resultado.innerText = parseInt(v1.value) * parseInt(v2.value);
}

function dividir() {
    resultado.innerText = parseInt(v1.value) / parseInt(v2.value);
}

function limpar(){
    v1.value = '';
    v2.value = '';
    resultado.innerText = '';
}