//Operadores Lógicos
import { opl1 } from "../exercicios/operadoresLogicos/ex1.js";
import { opl2 } from "../exercicios/operadoresLogicos/ex2.js";
import { opl3 } from "../exercicios/operadoresLogicos/ex3.js";

test("Testar do Operador Lógico E (&&) Caso o convidado esteja apto a entrar no ambiente.", () => {
    let resposta = { resultado: opl1(18, true) };
    expect(resposta.resultado).toBe("Seja bem-vindo! Você tem 18 anos e seu convite é válido. Pode entrar!");
});

test("Testar do Operador Lógico E (&&) Caso o convidado não esteja apto a entrar no ambiente.", () => {
    let resposta = { resultado: opl1(17, true) };
    expect(resposta.resultado).toBe("Desculpe, não foi possível liberar sua entrada. Verifique sua idade (17) ou a situação do seu convite (true).");
});

test("Testar do Operador Lógico ou (||) caso o aluno tenha passado de ano", () => {
    let resposta = { resultado: opl2(10, 60) };
    expect(resposta.resultado).toBe("Passou de ano, sua nota final é 10 e sua frequencia é de 60%, APROVADO!");
});

test("Testar do Operador Lógico ou (||) caso o aluno tenha reprovado", () => {
    let resposta = { resultado: opl2(5, 60) };
    expect(resposta.resultado).toBe("Não passou de ano, REPROVADO!");
});

test("Testar do Operador Lógico NOT (!) se o usuario estiver logado", () => {
    let resposta = { resultado: opl3(true) };
    expect(resposta.resultado).toBe("Você está logado, ACESSO LIBERADO");
});

test("Testar do Operador Lógico NOT (!) se o usuario não estiver logado", () => {
    let resposta = { resultado: opl3(false) };
    expect(resposta.resultado).toBe("Você não está logado, ACESSO NEGADO");
});