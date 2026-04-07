/*Declare as variáveis abaixo usando apenas const:

Nome de um produto

Preço unitário

Quantidade comprada

Crie uma variável para calcular o valor total da compra (também usando const).

Depois, mostre no console:

Você comprou ___ unidades de ___ e o total foi R$ ___. */

function v3(produto, precounitario, quantidadeComprada) {

const precototal = precounitario * quantidadeComprada

return(`Você comprou ${quantidadeComprada} unidades de ${produto} e o total foi R$ ${precototal}`)
}

export {v3}