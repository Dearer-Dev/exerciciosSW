import express from "express";
const router_vetores = express()

import { ve1 } from "../exercicios/vetores/ex1.js";
import { ve2 } from "../exercicios/vetores/ex2.js";

router_vetores.post('/ve1', (req, res) =>{
    let {numeroescolhido} = req.body
    let resp = ve1(numeroescolhido)
    res.send(resp)
})

router_vetores.post('/ve2', (req, res) =>{
    const {numeros} = req.body
    let resp = ve2(numeros)
    res.send(resp)
})

export {router_vetores}