//Exercício: Imprima todos os números pares de 2 a 20

function laco2() {

    let numeros = []
    

let i = 2

do {
    numeros.push(i)
    i+= 2
} while (i <= 20)
    
    return numeros
}

export {laco2}
//Do while