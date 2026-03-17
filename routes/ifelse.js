import express from "express";
const router_ifelse = express()
//if Else
import { if1 } from "../ifElse/ex1.js";
import { if2 } from "../ifElse/ex2.js";
import { if3 } from "../ifElse/ex3.js";

 router_ifelse.get('/if1', (req, res) => {
    let idade = 17
    let resp = if1(idade)
    res.send(`${resp}, sua idade é ${idade}`)
  })

  router_ifelse.get('/if2', (req, res) => {
    let n = 11
    let resp = if2(n)
    res.send(`${resp}`)
  })

  router_ifelse.get('/if3', (req, res) => {
    let pais = "Brasil"
    let resp = if3(pais)
    res.send(` ${resp}`)
  })

  export  {router_ifelse}