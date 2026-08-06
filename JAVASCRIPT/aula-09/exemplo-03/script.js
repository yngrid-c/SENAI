const titulo = document.querySelector(".titulo")
const btnAdicioanr = document.querySelector (".btnAdicionar")
const lista = document.querySelector (".lista")

btnAdicioanr.addEventListener("click", function(){
    const li = document.createElement ("li")
    li.textContent = "blue, item"
    lista.appendChild(li)
})



