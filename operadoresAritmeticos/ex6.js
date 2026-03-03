//Crie um programa que: Declare um número, calcule a raiz quadrada dele, mostre o resultado

let n = 25
let raiz = 0

for (let i = 0; i <= n; i++) {
    if (i * i === n) {
        raiz = i
    }
}

console.log(`A raiz quadrada de ${n} é ${raiz}`)

//raiz