const somar = (a, b) => {
  return a + b
}

const subtrair = (a, b) => {
  return a - b
}

const multiplicar = (a, b) => {
  return a * b
}

const dividir = (a, b) => {
  if (b == 0) {
    return "Error 404!"
  } else {
    return a / b
  }
}

console.log(somar(5, 10))
console.log(subtrair(5, 10))
console.log(multiplicar(5, 10))
console.log(dividir(5, 0)) 