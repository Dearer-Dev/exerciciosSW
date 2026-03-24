import express from "express";
const router_opa = express()

//Operadores Aritiméticos
import { opa1 } from "../operadoresAritmeticos/ex1.js";
import { opa2 } from "../operadoresAritmeticos/ex2.js";
import { opa3 } from "../operadoresAritmeticos/ex3.js";
import { opa4 } from "../operadoresAritmeticos/ex4.js";
import { opa5 } from "../operadoresAritmeticos/ex5.js";
import { opa6 } from "../operadoresAritmeticos/ex6.js";
import { opa7 } from "../operadoresAritmeticos/ex7.js";

 //Exercicios de operadores Aritméticos

 router_opa.get('/opa1', (req, res) =>{
  const n1 = Number(req.query.n1)
  const n2 = Number(req.query.n2)
    let resp = opa1(n1, n2)
    res.send(resp.toString())
})

  router_opa.get('/opa2', (req, res) =>{
    let preco = 100
    let resp = opa2(preco)
    res.send(resp)
})

  router_opa.get('/opa3', (req, res) =>{
    let resp = opa3(100, 200)
    res.send(resp)
})

  router_opa.get('/opa4', (req, res) =>{
    let resp = opa4(1000, 4)
    res.send(resp)
})

  router_opa.get('/opa5', (req, res) =>{
    let resp = opa5(2)
    res.send(resp)
})
  router_opa.get('/opa6', (req, res) =>{
    let resp = opa6(4)
    res.send(resp)
})
  router_opa.get('/opa7', (req, res) =>{
    let resp = opa7(55)
    res.send(resp)
})

export {router_opa}