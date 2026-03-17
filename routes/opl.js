import express from "express";
const router_opl = express()

//Operadores Lógicos
import { opl1 } from "../operadoresLogicos/ex1.js";
import { opl2 } from "../operadoresLogicos/ex2.js";
import { opl3 } from "../operadoresLogicos/ex3.js";

  //Exerciciosa de operadores lógicos

  router_opl.get('/opl1', (req, res) =>{
    let resp = opl1(18, "tem convite")
    res.send(resp)
})
  router_opl.get('/opl2', (req, res) =>{
    let resp = opl2(8, 80)
    res.send(resp)
})
  router_opl.get('/opl3', (req, res) =>{
    let resp = opl3(55)
    res.send(resp)
})

export {router_opl}