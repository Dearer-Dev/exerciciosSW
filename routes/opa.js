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

 router_opa.post('/opa1', (req, res) =>{
  const {n1, n2} = req.body
    let resposta = {
      resultado:opa1(n1, n2)}
    res.send(resposta)
})

  router_opa.post('/opa2', (req, res) =>{
    let {preco} = req.body
    let resposta = {
      resultado: opa2(preco)}
    res.send(resposta)
})

  router_opa.post('/opa3', (req, res) =>{
    const {largura, altura} = req.body
    let resposta = {
      resultado: opa3(largura, altura)}
    res.send(resposta)
})

  router_opa.post('/opa4', (req, res) =>{
    const {contaRestaurante, quantidadeDePessoas} = req.body
    let resposta = {
      resultado: opa4(contaRestaurante, quantidadeDePessoas)}
    res.send(resposta)
})

  router_opa.post('/opa5', (req, res) =>{
    const {n} = req.body
    let resposta = {
      resultado: opa5(n)}
    res.send(resposta)
})
  router_opa.post('/opa6', (req, res) =>{
    const {n} = req.body
    let resposta = {
      resultado: opa6(n)}
    res.send(resposta)
})
  router_opa.post('/opa7', (req, res) =>{
    const {n} = req.body
    let resposta = {
      resultado: opa7(n)}
      res.send(resposta)
  })

export {router_opa}