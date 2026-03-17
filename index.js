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
    let idade = 17
    let resp = if1(idade)
    res.send(`${resp}, sua idade é ${idade}`)
  })

  app.get('/if2', (req, res) => {
    let n = 11
    let resp = if2(n)
    res.send(`${resp}`)
  })

  app.get('/if3', (req, res) => {
    let pais = "Brasil"
    let resp = if3(pais)
    res.send(` ${resp}`)
  })

  //Exercicio json

  app.get('/json', (req, res) =>{
    res.json(produtos())
  })

  //Exercicios de laço

  app.get('/laco1', (req, res) =>{
    let resp = laco1()
    res.send(`Contando até 10... ${resp}`)
  })

  app.get('/laco1', (req, res) =>{
    let resp = laco1()
    res.send(`Contando até 10... ${resp}`)
  })

  app.get('/laco2', (req, res) =>{
    let resp = laco2()
    res.send(`Números pares de 2 a 20... ${resp}`)
  })

  app.get('/laco3', (req, res) =>{
    let resp = laco3()
    res.send(`Números divisiveis por 3 de 1 a 50... ${resp}`)
  })

  app.get('/laco4', (req, res) =>{
    let resp = laco4()
    res.send(`${resp}`)
  })

  app.get('/laco5', (req, res) =>{
    let resp = laco5()
    res.send(`Exibir nomes com o map... ${resp}`)
  })

  //Exercicios de operadores Aritméticos

    app.get('/opa1', (req, res) =>{
      let resp = opa1(1, 2)
      res.send(resp)
  })

    app.get('/opa2', (req, res) =>{
      let resp = opa2(100)
      res.send(resp)
  })

    app.get('/opa3', (req, res) =>{
      let resp = opa3(100, 200)
      res.send(resp)
  })

    app.get('/opa4', (req, res) =>{
      let resp = opa4(1000, 4)
      res.send(resp)
  })

    app.get('/opa5', (req, res) =>{
      let resp = opa5(2)
      res.send(resp)
  })
    app.get('/opa6', (req, res) =>{
      let resp = opa6(4)
      res.send(resp)
  })
    app.get('/opa7', (req, res) =>{
      let resp = opa7(55)
      res.send(resp)
  })

  //Exerciciosa de operadores lógicos

      app.get('/opl1', (req, res) =>{
      let resp = opl1(18, "tem convite")
      res.send(resp)
  })
    app.get('/opl2', (req, res) =>{
      let resp = opl2(8, 80)
      res.send(resp)
  })
    app.get('/opl3', (req, res) =>{
      let resp = opl3(55)
      res.send(resp)
  })



  





app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })



