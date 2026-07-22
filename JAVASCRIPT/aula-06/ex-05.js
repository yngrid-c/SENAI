let num = [12, 5, 8, 21, 3, 14, 7]

let maior = 0
let menor = 0
let total = 0

for (let i=0; i < num.length; i++){
    total= total+ num [i]
    if(maior<num[i]){
        maior= num[i]
    }
    if(i == 0){
        menor=num[i]
    }
    if(menor>num[i]){
        menor=num[i]
    }
}

console.log(`maior: ${maior} - menor: ${menor} - total: ${total}`)
