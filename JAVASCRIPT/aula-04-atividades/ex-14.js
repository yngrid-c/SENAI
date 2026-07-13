let amigos = [
  { nome: "molina", idade: 1150 },
  { nome: "isa", idade: 17 },
  { nome: "carla", idade: 20 },
  { nome: "vih", idade: 17 }
]

let maioridade = []

amigos.forEach(function(amigo) { 
    if (amigo.idade >= 18) {
        maioridade.push(amigo)
    } 
})

console.log(maioridade)