//Escreva um programa que imprima os números de 1 a 10 
function laco1() {
    
let numeros = []
let i = 1

while (i <= 10){
    numeros.push(i) //.push adiciona o numero no array
    i++
}

return(numeros)
}

export {laco1}
//while