import express from "express";
const router_ifelse = express()
//if Else
import { if1 } from "../ifElse/ex1.js";
import { if2 } from "../ifElse/ex2.js";
import { if3 } from "../ifElse/ex3.js";

 router_ifelse.get('/if1/:idade', (req, res) => {
    const {idade} = req.params
    let resposta = {
      resultado: if1(idade)
    }
    res.send(resposta)
  })

  router_ifelse.get('/if2/:n', (req, res) => {
    const {n} = req.params
    let resposta = {
      resultado: if2(n)}
    res.send(resposta)
  })

  router_ifelse.get('/if3/:pais', (req, res) => {
    const {pais} = req.params
    let resposta = {
      resultado: if3(pais)}
    res.send(resposta)
  })

  export  {router_ifelse}