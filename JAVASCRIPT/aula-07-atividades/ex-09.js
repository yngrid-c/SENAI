function verificar(idade) {
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}

console.log(verificar(15)) 
console.log(verificar(18))
console.log(verificar(25))