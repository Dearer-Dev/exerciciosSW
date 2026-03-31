import express from "express";
const router_opl = express()

//Operadores Lógicos
import { opl1 } from "../operadoresLogicos/ex1.js";
import { opl2 } from "../operadoresLogicos/ex2.js";
import { opl3 } from "../operadoresLogicos/ex3.js";

  //Exerciciosa de operadores lógicos

  router_opl.post('/opl1', (req, res) =>{
    const {idade, convite} = req.body
    let resp = opl1(idade, convite)
    res.json(resp)
})
  router_opl.post('/opl2', (req, res) =>{
    const {nota, freq} = req.body
    let resp = opl2(nota, freq)
    res.json(resp)
})
  router_opl.post('/opl3', (req, res) =>{
    const{usuarioLogado} = req.body
    let resp = opl3(usuarioLogado)
    res.send(resp)
})

export {router_opl}