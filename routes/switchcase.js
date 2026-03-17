import express from "express";
const router_switch = express()

import {swt} from '../switchCase/ex1.js'

router_switch.get('/swt', (req, res) =>{
    let resp = swt()
    res.send(resp)
})

export {router_switch}