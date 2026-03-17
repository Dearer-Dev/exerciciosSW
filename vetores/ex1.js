// crie um programa  em js que declare um vetor com 5 numeros e uma variavel, o propgrama deve verificar se esse numero existe no vetor e mostre no console a posiçao, caso não exista, deve exibir a seguinte mensagem "numero não encontrado"

function ve1(posicao) {
    
const numeros = [5,10,15,20,25]

if (posicao !== -1){
    return(`Numero encontrado posição: ${posicao}`) 
}
else{
    return(`Numero não exixtente no vetor`)
}
}
export {ve1}