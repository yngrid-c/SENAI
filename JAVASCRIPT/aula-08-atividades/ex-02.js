let celsius = [0, 15, 30, 45]

let grau = celsius.map (function(item){
    return item * 9/5 + 32 
})

console.log(grau)