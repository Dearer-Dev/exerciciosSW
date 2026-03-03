//Uma pessoa só pode entrar no evento se for maior de 18 anos e tiver convite. Crie uma condição lógica em JavaScript que represente essa situação.

let idade = 17

let convite = true

if(idade >=18 && convite === true){
    console.log(`Pode entrar no evento!`)
} else{
    console.log(`Não pode entrar no evento :(`)
}

// Operador Lógico E (&&)