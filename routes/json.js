import express from "express"
const router_json = express()

import { produtos } from "../json/produtos.js";

//Exercicios IfElse
router_json.get('/json', (req, res) =>{
    res.json(produtos())
  })


  export {router_json}
