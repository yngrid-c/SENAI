let botao = document.querySelector ("#btnAcao")
let paragrafo = document.querySelector ("#infoBotao")

botao.addEventListener("click", function(){
    paragrafo.textContent = botao.textContent
})