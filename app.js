import express from "express";
import * as dotenv from "dotenv";
import Papelaria from "./src/controllers/Papelaria.js";
import cors from "cors"
import DBMPapelaria from "./src/DAO/DBMPapelaria.js"


dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.listen(port, ()=>{
    console.log(`Sucesso na Conexão ao Servidor em: http://localhost:${port}`)
})

DBMPapelaria.createTable();

Papelaria.routers(app)
//Livros.routers(app)
//Clientes.routers(app)
//Informatica.routers(app)