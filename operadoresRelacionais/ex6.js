//Crie um programa que: Declare uma senha cadastrada, declare uma senha digitada pelo usuário, verifique se a senha digitada é diferente da senha cadastrada, mostre o resultado da verificação no console

function opr6(senhaCadastrada, senhaDigitada) {

if (senhaDigitada !== senhaCadastrada ){
    console.log`Senha errada, tente novamente.`
} else {`Login realizado com sucesso`}
}

export {opr6}
//Diferente (!= ou !==)