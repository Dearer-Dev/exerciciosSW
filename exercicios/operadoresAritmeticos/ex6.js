//Crie um programa que: Declare um número, calcule a raiz quadrada dele, mostre o resultado

function opa6(n) {
    
let raiz = 0

for (let i = 0; i <= n; i++) {
    if (i * i === n) {
        raiz = i
    }
}

return (`A raiz quadrada de ${n} é ${raiz}`)
}
export {opa6}
//raiz