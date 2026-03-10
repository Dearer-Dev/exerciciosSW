//Importações

import express from 'express'

const app = express()

//if Else
import { if1 } from "./ifElse/ex1.js";
import { if2 } from "./ifElse/ex2.js";
import { if3 } from "./ifElse/ex3.js";

//Json
import { produtos } from "./json/produtos.js";

//Laços de Repetição
import { laco1 } from "./lacoDeRepeticao/ex1.js";
import { laco2 } from "./lacoDeRepeticao/ex2.js";
import { laco3 } from "./lacoDeRepeticao/ex3.js";
import { laco4 } from "./lacoDeRepeticao/ex4.js";
import { laco5 } from "./lacoDeRepeticao/ex5.js";

//Operadores Aritiméticos
import { opa1 } from "./operadoresAritmeticos/ex1.js";
import { opa2 } from "./operadoresAritmeticos/ex2.js";
import { opa3 } from "./operadoresAritmeticos/ex3.js";
import { opa4 } from "./operadoresAritmeticos/ex4.js";
import { opa5 } from "./operadoresAritmeticos/ex5.js";
import { opa6 } from "./operadoresAritmeticos/ex6.js";
import { opa7 } from "./operadoresAritmeticos/ex7.js";

//Operadores Lógicos
import { opl1 } from "./operadoresLogicos/ex1.js";
import { opl2 } from "./operadoresLogicos/ex2.js";
import { opl3 } from "./operadoresLogicos/ex3.js";

//Operadores Relacionais
import { opr1 } from "./operadoresRelacionais/ex1.js";
import { opr2 } from "./operadoresRelacionais/ex2.js";
import { opr3 } from "./operadoresRelacionais/ex3.js";
import { opr4 } from "./operadoresRelacionais/ex4.js";
import { opr5 } from "./operadoresRelacionais/ex5.js";
import { opr6 } from "./operadoresRelacionais/ex6.js";

//Switch Case
import { swt } from "./switchCase/ex1.js";

//Exercicios IfElse

app.get('/if1', (req, res) => {
    let resp = if1(18)
    res.send(`Teste: ${resp}`)
  })

  app.get('/if2', (req, res) => {
    let resp = if2(18)
    res.send(`${resp}`)
  })

  app.get('/if3', (req, res) => {
    let resp = if3("Brasil")
    res.send(` ${resp}`)
  })

  //Exercicios json

  





app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })



