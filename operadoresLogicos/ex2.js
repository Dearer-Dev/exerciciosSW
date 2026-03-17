//Um aluno será aprovado se tirar nota maior ou igual a 7 ou tiver frequência maior ou igual a 75%. Crie uma condição lógica em JavaScript que represente essa regra.

function opl2(nota, freq) {

if(nota >= 7 || freq >= 75){
    return(`Passou de ano, usa nota final é ${nota} e sua frequencia é de ${freq}%, APROVADO!`)
} else{
    return(`Não passou de ano, REPROVADO!`)
}
}

export {opl2}

// Operador Lógico ou (||)