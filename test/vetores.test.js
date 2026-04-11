import { ve1 } from "../exercicios/vetores/ex1.js";
import { ve2 } from "../exercicios/vetores/ex2.js";

test("Testar Vetores, caso o numero digitado esteja no vetor", () => {
    let resposta = { resultado: ve1(5) };
    expect(resposta.resultado).toBe("Número encontrado na posição: 0");
});

test("Testar Vetores, caso o numero digitado não esteja no vetor", () => {
    let resposta = { resultado: ve1(77) };
    expect(resposta.resultado).toBe("Número não existente no vetor");
});

test("Testar Vetores, digitar um vetor, e o progrmama faz a soma dos numeros", () => {
    let resposta = { resultado: ve2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) };
    expect(resposta.resultado).toBe("soma dos numeros do vetor: 55");
});

