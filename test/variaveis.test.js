import {v1} from '../exercicios/variaveis/ex1.js'
import {v2} from '../exercicios/variaveis/ex2.js'
import {v3} from '../exercicios/variaveis/ex3.js'


test("Testar Variáveis digitadas", () => {
    let resposta = { resultado: v1("André", 17, "São Paulo") };
    expect(resposta.resultado).toBe("Meu nome é André, eu tenho 17 anos e moro em São Paulo");
});

test("Testar Variáveis digitadas", () => {
    let resposta = { resultado: v2(10, 20) };
    expect(resposta.resultado).toBe("O resultado da multiplicação é 200");
});

test("Testar Variáveis digitadas", () => {
    let resposta = { resultado: v3("Guarda-Chuva", 25, 2) };
    expect(resposta.resultado).toBe("Você comprou 2 unidades de Guarda-Chuva e o total foi R$50");
});

