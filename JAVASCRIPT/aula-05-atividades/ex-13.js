let status = "entregue"

switch (status) {
    case "pendente":
        console.log("pagamento nao confirmado")
        break
    case "enviado":
        console.log("a caminho")
        break
    case "entregue":
        console.log("finalizado")
        break
    default:
        console.log("status invalido")
}