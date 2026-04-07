//Crie um programa que: declare um valor representando o preço de um produto, e calcule o valor final após o calculo de desconto de 20%, mostre o resultado
function opa2(precoProduto) {
let desconto = precoProduto * 0.2
    
let resultado = precoProduto - desconto

return(`O preço do produto é ${precoProduto}, com desconto fica ${resultado}.`)
}

export {opa2}
//Subtração