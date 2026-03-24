import express from "express";
const router_lacos = express()

//Laços de Repetição
import { laco1 } from "../lacoDeRepeticao/ex1.js";
import { laco2 } from "../lacoDeRepeticao/ex2.js";
import { laco3 } from "../lacoDeRepeticao/ex3.js";
import { laco4 } from "../lacoDeRepeticao/ex4.js";
import { laco5 } from "../lacoDeRepeticao/ex5.js";

 //Exercicios de laço

 router_lacos.post('/laco1', (req, res) =>{
    let resp = laco1()
    res.json(`Contando até 10... ${resp}`)
  })

  router_lacos.post('/laco2', (req, res) =>{
    let resp = laco2()
    res.send(`Números pares de 2 a 20... ${resp}`)
  })

  router_lacos.post('/laco3', (req, res) =>{
    let resp = laco3()
    res.send(`Números divisiveis por 3 de 1 a 50... ${resp}`)
  })

  router_lacos.post('/laco4', (req, res) =>{
    let resp = laco4()
    res.send(`${resp}`)
  })

  router_lacos.post('/laco5', (req, res) =>{
    let resp = laco5()
    res.send(`Exibir nomes com o map... ${resp}`)
  })

export {router_lacos}