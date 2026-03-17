// crie um programa em js que declare um vetor com 10 numeros e calcule a soma de todos os elementos e mostre o resultado no console.

function ve2() {
    
const numero = [2,4,6,8,10,12,14,16,18,20]

let soma = 0

for (let i = 0; i < numero.length; i++){
    soma += numero[i]
}

return("soma dos numeros do vetor:" + soma)
}

export {ve2}