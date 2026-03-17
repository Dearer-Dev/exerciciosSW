import express from "express";
const router_vetores = express()

import { ve1 } from "../vetores/ex1.js";
import { ve2 } from "../vetores/ex2.js";

router_vetores.get('/ve1', (req, res) =>{
    let resp = ve1(5)
    res.send(resp)
})

router_vetores.get('/ve2', (req, res) =>{
    let resp = ve2()
    res.send(resp)
})

export {router_vetores}