//Crie um programa que leia o nome de um país e mostre na tela a mensagem "Vivendo em [país]". Em seguida, verifique se o país informado é diferente de "Brasil". Se for diferente, mostre a mensagem "Você é estrangeiro". Caso contrário, mostre a mensagem "Você é brasileiro".
function if3(pais) {

console.log (`Vivendo em ${pais}`)

if (pais != "Brasil") {
    return(`Vivendo em ${pais}, Você é estrangeiro`)
} else {
    return(`Vivendo em ${pais}, Você é brasileiro`)
}
}

export {if3}
//condição composta