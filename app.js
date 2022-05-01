import express from "express";
import * as dotenv from "dotenv";
import Papelaria from "./src/controllers/papelaria.js";
import cors from "cors"
import DatabaseMetodos from "./src/DAO/DatabaseMetodos.js";


dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

DatabaseMetodos.createTable();

app.listen(port, ()=>{
    console.log(`Sucesso na Conexão ao Servidor em: http://localhost:${port}`)
})

Livros.routers(app)
Clientes.routers(app)
Informatica.routers(app)
Papelaria.routers(app)