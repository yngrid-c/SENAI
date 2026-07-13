let compras = []

compras.push("arroz", "feijão", "macarrão", "leite","café")

compras.forEach((item, indice) => {
  console.log(`${indice + 1} ${item}`)
})

console.log(compras.includes("arroz"))

let removido = compras.pop()
console.log(removido)

compras.forEach((item, indice) => {
  console.log(`${indice + 1} ${item}`)
})
console.log(compras.length)