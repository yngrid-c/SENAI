let botao = document.querySelector(".btnMostrar")
let resultado = document.querySelector("#resultado")


botao.addEventListener("click", function(){
    let titulo = document.querySelector("h1")
    resultado.textContent = titulo.textContent
})