let btn = document.querySelector ("button")
let paragrafos = document.querySelectorAll ("p")
let list = document.querySelector("#listaFrases")

btn.addEventListener("click", function(){
    paragrafos.forEach(function(item){
        let li =document.createElement("li")
        li.textContent = item.textContent
        list.appendChild (li)
    })
})