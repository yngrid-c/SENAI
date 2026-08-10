let h2 = document.querySelector ("h2")
let btn = document.querySelector ("button")
let analise = document.querySelector ("#analise")

btn.addEventListener ("click", function(){
    let divp = document.createElement ("div")
    divp.textContent = h2.textContent
    analise.appendChild (divp)

    let divs = document.createElement("div")
    divs.textContent = h2.innerHTML
    analise.appendChild(divs)

    let divt = document.createElement ("div")
    divt.textContent = h2.style.color
    analise.appendChild("divt")
})