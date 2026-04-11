//if Else
import { if1 } from "../exercicios/ifElse/ex1.js";
import { if2 } from "../exercicios/ifElse/ex2.js";
import { if3 } from "../exercicios/ifElse/ex3.js";

test("Testar IfElse, ternário, caso o usuario seja maior de idade", () => {
    let resposta = { resultado: if1(18) };
    expect(resposta.resultado).toBe("Você é Maior de idade");
});

test("Testar IfElse, ternário, caso o usuario seja menor de idade", () => {
    let resposta = { resultado: if1(17) };
    expect(resposta.resultado).toBe("Você é Menor de idade");
});

test("Testar IfElse, condição simples, caso o numero digitado for maior que 10", () => {
    let resposta = { resultado: if2(11) };
    expect(resposta.resultado).toBe("Seu numero é maior que 10, seu numero é: 11");
});

test("Testar IfElse, condição simples, caso o numero digitado for menor que 10", () => {
    let resposta = { resultado: if2(9) };
    expect(resposta.resultado).toBe("Seu número é menor que 10, seu numero é: 9");
});

test("Testar IfElse, condição composta, caso o você viva no Brasil", () => {
    let resposta = { resultado: if3("Brasil") };
    expect(resposta.resultado).toBe("Vivendo em Brasil, Você é brasileiro");
});

test("Testar IfElse, condição composta, caso o você viva no Brasil", () => {
    let resposta = { resultado: if3("Alemanha") };
    expect(resposta.resultado).toBe("Vivendo em Alemanha, Você é estrangeiro");
});

