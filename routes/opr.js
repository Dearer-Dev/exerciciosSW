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

    router_opr.get('/opr1', (req, res) =>{
        let resp = opr1(18, 15)
        res.send(resp)
    })
      router_opr.get('/opr2', (req, res) =>{
        let resp = opr2(50)
        res.send(resp)
    })
      router_opr.get('/opr3', (req, res) =>{
        let resp = opr3(55)
        res.send(resp)
    })
    router_opr.get('/opr4', (req, res) =>{
      let resp = opr4(18, 15)
      res.send(resp)
   })
    router_opr.get('/opr5', (req, res) =>{
      let resp = opr5(8, 80)
      res.send(resp)
   })
    router_opr.get('/opr6', (req, res) =>{
      let resp = opr6(55)
      res.send(resp)
   })
   router_opr.get('/opr7', (req, res) =>{
    let resp = opr7(55)
    res.send(resp)
  })

  export {router_opr}