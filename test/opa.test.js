import { opa1 } from "../exercicios/operadoresAritmeticos/ex1.js";
import { opa2 } from "../exercicios/operadoresAritmeticos/ex2.js";
import { opa3 } from "../exercicios/operadoresAritmeticos/ex3.js";
import { opa4 } from "../exercicios/operadoresAritmeticos/ex4.js";
import { opa5 } from "../exercicios/operadoresAritmeticos/ex5.js";
import { opa6 } from "../exercicios/operadoresAritmeticos/ex6.js";
import { opa7 } from "../exercicios/operadoresAritmeticos/ex7.js";


test("Testar a Operação de soma", () => {
    let resposta = { resultado: opa1(5, 8) };
    expect(resposta.resultado).toBe("A soma dos números 5 e 8 é igual a 13");
});

test("Testar a Operação de subtração", () => {
    let resposta = { resultado: opa2(1500) };
    expect(resposta.resultado).toBe("O preço do produto é 1500, com desconto fica 1200.");
});

test("Testar a Operação de multiplicação", () => {
    let resposta = { resultado: opa3(5, 5) };
    expect(resposta.resultado).toBe("A altura da figura é igual a 5cm e a largura é igual a 5cm a área é igual a 25cm");
});

test("Testar a Operação de divisão", () => {
    let resposta = { resultado: opa4(1500, 4) };
    expect(resposta.resultado).toBe("A conta total deu:  1500R$, total de pessoas 4, quanto fica para cada 375R$");
});

test("Testar a Operação de Potencia", () => {
    let resposta = { resultado: opa5(4, 2) };
    expect(resposta.resultado).toBe("Número escolhido 4,o calculo da potencia escolhida (2), dele é 16");
});

test("Testar a Operação de Raiz Quadrada", () => {
    let resposta = { resultado: opa6(4) };
    expect(resposta.resultado).toBe("A raiz quadrada de 4 é 2");
});

test("Testar a Operação de Resto da divisão", () => {
    let resposta = { resultado: opa7(2) };
    expect(resposta.resultado).toBe("O resto da divisão do 2 por 2 é 0");
});