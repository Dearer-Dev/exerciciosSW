import { opa1 } from "../exercicios/operadoresAritmeticos/ex1.js";
import { opa2 } from "../exercicios/operadoresAritmeticos/ex2.js";
import { opa3 } from "../exercicios/operadoresAritmeticos/ex3.js";
import { opa4 } from "../exercicios/operadoresAritmeticos/ex4.js";
import { opa5 } from "../exercicios/operadoresAritmeticos/ex5.js";
import { opa6 } from "../exercicios/operadoresAritmeticos/ex6.js";
import { opa7 } from "../exercicios/operadoresAritmeticos/ex7.js";


test("Testar a primeira operação aritmetica", () => {
    let resposta = { resultado: opa1(5, 8) };
    expect(resposta.resultado).toBe("A soma dos números 5 e 8 é igual a 13");
});
