let texto = document.querySelector ("div")
let btn = document.querySelector ("button")

btn.addEventListener ("click", function(){
    texto.style.backgroundColor = "yellow"
    texto.style.border = "2px solid black"
    texto.style.padding = "20px"
})