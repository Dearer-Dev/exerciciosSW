//Laços de Repetição
import { laco1 } from "../exercicios/lacoDeRepeticao/ex1.js";
import { laco2 } from "../exercicios/lacoDeRepeticao/ex2.js";
import { laco3 } from "../exercicios/lacoDeRepeticao/ex3.js";
import { laco4 } from "../exercicios/lacoDeRepeticao/ex4.js";
import { laco5 } from "../exercicios/lacoDeRepeticao/ex5.js";

test("Testar Laços de repetição, contagem de um à dez", () => {
    let resposta = { resultado: laco1() };
    expect(resposta.resultado).toEqual([1,2,3,4,5,6,7,8,9,10])
});

test("Testar Laços de repetição, exibir todos os numeros pares de 2 a 20", () => {
    let resposta = { resultado: laco2() };
    expect(resposta.resultado).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
});

test("Testar Laços de repetição, exibir todos os numeros divisiveis por 3 de 1 a 50", () => {
    let resposta = { resultado: laco3() };
    expect(resposta.resultado).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48])
});

test("Testar Laços de repetição, exibir todas metades de numeros de um vetor", () => {
    let resposta = { resultado: laco4() };
    expect(resposta.resultado).toBe("Número: 2 e sua Metade: 1, Número: 4 e sua Metade: 2, Número: 8 e sua Metade: 4, Número: 6 e sua Metade: 3, Número: 10 e sua Metade: 5, ")
});

test("Testar Laços de repetição, exibir apenas uma informação de todas lidas pelo laço", () => {
    let resposta = { resultado: laco5() };
    expect(resposta.resultado).toEqual(["Ana ", " Carlos", " Beatriz"])
});

