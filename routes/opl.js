import express from "express";
const router_opl = express()

//Operadores Lógicos
import { opl1 } from "../exercicios/operadoresLogicos/ex1.js";
import { opl2 } from "../exercicios/operadoresLogicos/ex2.js";
import { opl3 } from "../exercicios/operadoresLogicos/ex3.js";

  //Exerciciosa de operadores lógicos

  router_opl.post('/opl1', (req, res) =>{
    const {idade, convite} = req.body
    let resposta = {
      resultado: opl1(idade, convite)}
    res.json(resposta)
})
  router_opl.post('/opl2', (req, res) =>{
    const {nota, freq} = req.body
    let resposta = {
      resultado: opl2(nota, freq)}
    res.json(resposta)
})
  router_opl.post('/opl3', (req, res) =>{
    const{usuarioLogado} = req.body
    let resposta = {
      resultado: opl3(usuarioLogado)}
    res.send(resposta)
})

export {router_opl}