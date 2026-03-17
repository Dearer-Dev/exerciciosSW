import express from "express";
const router_variaveis = express()

import {v1} from '../variaveis/ex1.js'
import {v2} from '../variaveis/ex2.js'
import {v3} from '../variaveis/ex3.js'

router_variaveis.get('/v1', (req, res) =>{
    let resp = v1("André", 17, "São Paulo")
    res.send(resp)
})

router_variaveis.get('/v2', (req, res) =>{
    let resp = v2(2, 2)
    res.send(resp)
})

router_variaveis.get('/v3', (req, res) =>{
    let resp = v3("Vidro temperado", 32.99, 100)
    res.send(resp)
})

export {router_variaveis}