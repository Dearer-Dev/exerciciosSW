//Crie um programa que leia o nome de um país e mostre na tela a mensagem "Vivendo em [país]". Em seguida, verifique se o país informado é diferente de "Brasil". Se for diferente, mostre a mensagem "Você é estrangeiro". Caso contrário, mostre a mensagem "Você é brasileiro".

var pais = "Brasil"

console.log (`Vivendo em ${pais}`)

if (pais != "Brasil") {
    console.log (`Você é estrangeiro`)
} else {
    console.log(`Você é brasileiro`)
} //condição composta