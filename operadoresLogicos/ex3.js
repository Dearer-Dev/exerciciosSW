//Um sistema bloqueia o acesso se o usuário não estiver logado.Crie uma condição lógica em JavaScript usando o operador NOT para representar essa situação.

let usuarioLogado = false
let acesso = false

if (usuarioLogado === true ){
    acesso = true
}

if(!acesso){
    console.log(`Você não está logado, ACESSO NEGADO`)
}else {console.log(`Você está logado, ACESSO LIBERADO`)}

// Operador Lógico NOT (!)