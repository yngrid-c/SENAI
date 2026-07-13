let aluno = {
    nome: "yngrid",
    matricula: 122121
}

for ( let  chave in aluno){
    console.log(`$(chave): ${aluno[chave]}`)
}

let carros = [
    {marca: "fiat", modelo: "500"},
    {marca: "mercedes", modelo: "c300"},
    {marca:"citroen", modelo:"c4"}
]

carros.forEach(function(carro) {
    console.log(`marca: ${carro.marca} - modelo: ${carro.modelo}`)
})