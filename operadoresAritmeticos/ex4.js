//Crie um programa que: declare o total de uma conta de restaurante, declare a quantidade de pessoas, calcule quanto cada pessoa deve pagar, mostre o valor.
function opa4(contaRestaurante, quantidadeDePessoas) {

let cadaUmDevePagar = contaRestaurante / quantidadeDePessoas

return(`A conta total deu:  ${contaRestaurante}R$, total de pessoas ${quantidadeDePessoas}, quanto fica para cada ${cadaUmDevePagar}R$`)
}

export {opa4}
//Divisão