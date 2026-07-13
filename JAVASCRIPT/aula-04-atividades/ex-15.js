let biblioteca = [
  { titulo: "bler", autor: "eu", paginas: 310, lido: true },
  { titulo: "costa", autor: "miranha", paginas: 223, lido: false },
  { titulo: "tuntun", autor: "manga", paginas: 416, lido: true },
  { titulo: "lava", autor: "girl", paginas: 400, lido: false },
  { titulo: "monks", autor: "sla", paginas: 400, lido: true }
]

biblioteca.forEach(function(livro) {
  console.log(`titulo: ${livro.titulo} - autor: ${livro.autor}`)
})

console.log(Object.keys(biblioteca[0]));

for (let chave in biblioteca[0]) {
  console.log(`${chave}: ${biblioteca[0][chave]}`)
}

console.log('editora' in biblioteca[0])

biblioteca.forEach(function(livro) {
  if (!('editora' in livro)) {
    livro.editora = "numsei"
  }
})

console.log(biblioteca)