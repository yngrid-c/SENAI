let valor = [12, 5, 8, 21, 3, 14, 7]

let maior = valor[0]
let menor = valor[0]
let soma = 0

for (let i = 0; i < valor.length; i++) {
  soma += valor[i]


if (valor[i] > maior) {
    maior = valor[i]
}

if (valor[i] < menor) {
    menor = valor[i]
 }
}

let media = soma / valor.length

console.log(`maior:${maior} - menor: ${menor} - soma: ${soma} - media ${ media}`)