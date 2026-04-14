import {swt} from '../exercicios/switchCase/ex1.js'

const agora = new Date();

const diaNome = agora.toLocaleDateString("pt-BR", {
  weekday: "long"
});

console.log(diaNome);

test("Testar do Operador Relacional Maior que (>) se a idade 2 for maior que a idade 1", () => {
    let resposta = { resultado: swt() };
    expect(resposta.resultado).toBe(`Hoje é ${diaNome}`);
});