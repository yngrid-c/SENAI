let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2026,
    cor: "Vermelho",
    placa: "YN6R1D"
}
console.log(carro)
console.log(`${'placa' in carro}`)

delete carro.placa

console.log(carro)

console.log(`${'placa' in carro}`)