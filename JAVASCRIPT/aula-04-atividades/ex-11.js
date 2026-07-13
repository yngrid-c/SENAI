let filme = {
  titulo: "miranha",
  diretor: "num sei",
  ano: 2026,
  genero: "depressao"
}

for (let chave in filme) {
  console.log(`${chave}: ${filme[chave]}`);
}