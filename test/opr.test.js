//Operadores Relacionais
import { opr1 } from "../exercicios/operadoresRelacionais/ex1.js";
import { opr2 } from "../exercicios/operadoresRelacionais/ex2.js";
import { opr3 } from "../exercicios/operadoresRelacionais/ex3.js";
import { opr4 } from "../exercicios/operadoresRelacionais/ex4.js";
import { opr5 } from "../exercicios/operadoresRelacionais/ex5.js";
import { opr6 } from "../exercicios/operadoresRelacionais/ex6.js";

test("Testar do Operador Relacional Maior que (>) se a idade 2 for maior que a idade 1", () => {
    let resposta = { resultado: opr1(10, 20) };
    expect(resposta.resultado).toBe("A idade 2 (20) é maior que a idade 1 (10)");
});

test("Testar do Operador Relacional Maior que (>) se a idade 2 for menor que a idade 1", () => {
    let resposta = { resultado: opr1(50, 20) };
    expect(resposta.resultado).toBe("A idade 2 (20) é menor que a idade 1 (50)");
});

test("Testar do Operador Relacional Menor que (<) se a velocidade do veículo estiver aceitavel para a via", () => {
    let resposta = { resultado: opr2(50) };
    expect(resposta.resultado).toBe("A velocidade do seu carro é de 50Km/h. Você está andando na velocidade da via, continue assim!");
});

test("Testar do Operador Relacional Menor que (<) se a velocidade do veículo estiver acima do limite para a via", () => {
    let resposta = { resultado: opr2(120) };
    expect(resposta.resultado).toBe("A velocidade do seu carro é 120Km/h. Você passou do limite da via, MULTADO!");
});

test("Testar do Operador Relacional Maior ou Igual (>=) se o aluno está dentro da média", () => {
    let resposta = { resultado: opr3(8) };
    expect(resposta.resultado).toBe("Parabéns, sua nota é 8, você está na média, PASSOU!");
});

test("Testar do Operador Relacional Maior ou Igual (>=) se o aluno está fora da média", () => {
    let resposta = { resultado: opr3(6) };
    expect(resposta.resultado).toBe("Não passou, sua nota é 6, ESTUDE MAIS!");
});

test("Testar do Operador Relacional Menor ou Igual (<=) se está frio", () => {
    let resposta = { resultado: opr4(17) };
    expect(resposta.resultado).toBe("Hoje está 17° Graus, está frio hoje");
});

test("Testar do Operador Relacional Menor ou Igual (<=) se está calor", () => {
    let resposta = { resultado: opr4(25) };
    expect(resposta.resultado).toBe("Hoje está 25° Graus, está calor hoje");
});

test("Testar do Operador Relacional Igualdade (== ou ===) se a variável 1 é igual a variável 2", () => {
    let resposta = { resultado: opr5(2, 2) };
    expect(resposta.resultado).toBe("A variável 1 é igual a variável 2");
});

test("Testar do Operador Relacional Igualdade (== ou ===) se a variável 1 não é igual a variável 2", () => {
    let resposta = { resultado: opr5(1, 2) };
    expect(resposta.resultado).toBe("As variáveis não são iguais");
});

test("Testar do Operador Relacional Diferente (!=) se a senha digitada é igual a senha cadastrada", () => {
    let resposta = { resultado: opr6("andre08") };
    expect(resposta.resultado).toBe("Login realizado com sucesso");
});

test("Testar do Operador Relacional Diferente (!=) se a senha digitada é diferente a senha cadastrada", () => {
    let resposta = { resultado: opr6("andre09") };
    expect(resposta.resultado).toBe("Senha errada, tente novamente.");
});