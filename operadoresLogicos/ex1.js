//Uma pessoa só pode entrar no evento se for maior de 18 anos e tiver convite. Crie uma condição lógica em JavaScript que represente essa situação.

function opl1(idade, convite) {


if (idade >= 18 && convite === "tem convite") {
        return `Seja bem-vindo! Você tem ${idade} anos e seu convite é válido. Pode entrar!`;
    } else {
        return `Desculpe, não foi possível liberar sua entrada. Verifique sua idade (${idade}) ou a situação do seu convite (${convite}).`;
    }
}
export {opl1}
// Operador Lógico E (&&)