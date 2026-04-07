//Crie um programa que: Declare uma nota, verifique se a nota é maior ou igual a 7, mostre o resultado da verificação
function opr3(nota) {
    if (nota >= 7) {
        return `Parabéns, sua nota é ${nota}, você está na média, PASSOU!`;
    } else {
        // Corrigido: fechamento da string com ` e do parêntese
        return `Não passou, sua nota é ${nota}, ESTUDE MAIS!`;
    }
}

export { opr3 };

// Exemplo de como testar (opcional):
// console.log(opr3(8));