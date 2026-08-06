let mensagem = "Global"

function testar() {
  let mensagem = "Local"
  return mensagem
}

console.log(mensagem) 
console.log(testar()) 
console.log(mensagem) 