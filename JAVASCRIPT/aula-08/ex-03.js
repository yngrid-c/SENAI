let contatos =[
    {id:1,nome:"yngrid"},
    {id:2, nome:"molina"}
]

let encontrado = contatos.find(function(item){
    return item.id === 2
})

console.log(encontrado)