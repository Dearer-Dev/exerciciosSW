//Um aluno será aprovado se tirar nota maior ou igual a 7 ou tiver frequência maior ou igual a 75%. Crie uma condição lógica em JavaScript que represente essa regra.

let nota = 7

let freq = 20

if(nota >= 7 || freq >= 75){
    console.log(`Passou de ano, APROVADO!`)
} else{
    console.log(`Não passou de ano, REPROVADO!`)
}

// Operador Lógico ou (||)