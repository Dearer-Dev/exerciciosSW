// crie um programa em js que declare um vetor com 10 numeros e calcule a soma de todos os elementos e mostre o resultado no console.

function ve2(numeros) {
    
let soma = 0

for (let i = 0; i < numeros.length; i++){
    soma += numeros[i]
}

return("soma dos numeros do vetor: " + soma)
}

export {ve2}