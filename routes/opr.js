import express from "express";
const router_opr = express()

//Operadores Relacionais
import { opr1 } from "../operadoresRelacionais/ex1.js";
import { opr2 } from "../operadoresRelacionais/ex2.js";
import { opr3 } from "../operadoresRelacionais/ex3.js";
import { opr4 } from "../operadoresRelacionais/ex4.js";
import { opr5 } from "../operadoresRelacionais/ex5.js";
import { opr6 } from "../operadoresRelacionais/ex6.js";

    //Exerciciosa de operadores relacionais

    router_opr.post('/opr1', (req, res) =>{
        const {idade1, idade2} = req.body
        let resp = opr1(idade1, idade2)
        res.send(resp)
    })
      router_opr.post('/opr2', (req, res) =>{
        const vel = req.body.vel
        let resp = opr2(vel)
        res.send(resp)
    })
      router_opr.post('/opr3', (req, res) =>{
        const nota = req.body.nota
        let resp = opr3(nota)
        res.send(resp)
    })
    router_opr.post('/opr4', (req, res) =>{
      let temperatura = req.body.temperatura
      let resp = opr4(temperatura)
      res.send(resp)
   })
    router_opr.post('/opr5', (req, res) =>{
      let v1 = req.body.v1
      let v2 = req.body.v2
      let resp = opr5(v1, v2)
      res.send(resp)
   })
    router_opr.post('/opr6', (req, res) =>{
      let senhaDigitada = req.body.senhaDigitada
      let resp = opr6(senhaDigitada)
      res.send(resp)
   })
   router_opr.post('/opr7', (req, res) =>{
    let resp = opr7(55)
    res.send(resp)
  })

  export {router_opr}