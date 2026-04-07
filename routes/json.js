import express from "express"
const router_json = express()

import { produtos } from "../exercicios/json/produtos.js";

//Exercicios IfElse
router_json.get('/json', (req, res) =>{
  let resposta = {
    resultado: produtos()}
    res.json(resposta)
  })


  export {router_json}
