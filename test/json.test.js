import { produtos } from "../exercicios/json/produtos.js";

test("Testar Laços de repetição, exibir todas metades de numeros de um vetor", () => {
    let resposta = { resultado: produtos() };
    expect(resposta).toStrictEqual({"resultado":[{"id_produto":0,"nomeProduto":"Sabão em pó","precoProduto":22.5},{"id_produto":1,"nomeProduto":"Detergente","precoProduto":6.99},{"id_produto":2,"nomeProduto":"Amaciante Grande","precoProduto":39.5},{"id_produto":3,"nomeProduto":"Sabonete","precoProduto":2.5},{"id_produto":4,"nomeProduto":"Pasta de dente","precoProduto":5.5}]})
});