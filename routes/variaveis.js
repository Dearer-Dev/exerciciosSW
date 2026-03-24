import express from "express";
const router_variaveis = express()

import {v1} from '../variaveis/ex1.js'
import {v2} from '../variaveis/ex2.js'
import {v3} from '../variaveis/ex3.js'

router_variaveis.get('/v1', (req, res) =>{
   const {nome, idade,cidade} = req.query
   let resp = v1(nome, idade, cidade)
    res.send(resp)
})

router_variaveis.get('/v2', (req, res) =>{
    const {n1, n2} = req.query
    let resp = v2(n1, n2)
    res.send(resp)
})

router_variaveis.get('/v3', (req, res) =>{
    const {produto, precounitario, quantidadeComprada} = req.query
    let resp = v3(produto, precounitario, quantidadeComprada)
    res.send(resp)
})

export {router_variaveis}