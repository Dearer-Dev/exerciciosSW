//Importações

import express from 'express'

const app = express()


//base router para aprender
app.use(express.Router()) //habilita uso de rotas externas

import { router_ifelse } from "./routes/ifelse.js";

app.use('/', router_ifelse)

//------------------------------------------------

//json
import { router_json } from "./routes/json.js";

app.use('/', router_json)

//opa
import { router_opa } from './routes/opa.js'
app.use('/', router_opa)

//opl
import { router_opl } from './routes/opl.js'
app.use('/', router_opl)

//opr
import { router_opr } from './routes/opr.js'
app.use('/', router_opr)

//lacos 
import {router_lacos} from './routes/lacos.js'
app.use('/', router_lacos)

//variaveis
import {router_variaveis} from './routes/variaveis.js'
app.use('/', router_variaveis)

//vetores
import { router_vetores } from './routes/vetores.js';
app.use('/', router_vetores)

//Switch Case
import { router_switch } from "./routes/switchcase.js";
app.use('/', router_switch)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })



