//Uma pessoa só pode entrar no evento se for maior de 18 anos e tiver convite. Crie uma condição lógica em JavaScript que represente essa situação.

function opl1(idade, convite) {


if(idade >=18 && convite === true){
    console.log(`Pode entrar no evento!`)
} else{
    console.log(`Não pode entrar no evento :(`)
}
}
export {opl1}
// Operador Lógico E (&&)