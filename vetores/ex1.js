// crie um programa  em js que declare um vetor com 5 numeros e uma variavel, o propgrama deve verificar se esse numero existe no vetor e mostre no console a posiçao, caso não exista, deve exibir a seguinte mensagem "numero não encontrado"

const numero = [5,10,15,20,25]

let posicao = numero.indexOf(7)

if (posicao !== -1){
    console.log(`Numero encontrado posição: ${posicao}`) 
}
else{
    console.log(`Numero não encontrado`)
}