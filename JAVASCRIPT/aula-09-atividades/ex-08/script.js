let para = document.querySelector ("P")
let vermelho = document.querySelector (".btnVermelho")
let azul = document.querySelector (".btnAzul")
let verde = document.querySelector (".btnVerde")


vermelho.addEventListener ("click", function(){
    para.style.color = "red"
})

azul.addEventListener ("click", function(){
    para.style.color = "blue"
})

verde.addEventListener ("click", function(){
    para.style.color = "green"
})