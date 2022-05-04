import express from "express";
import * as dotenv from "dotenv";
import Clientes from "./src/controllers/Clientes.js";
import DBMClientes from "./src/DAO/DBMClientes.js";
import cors from "cors";
import fs from "fs";
import https from "https";




dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

DBMClientes.createTable();

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})

https.createServer({
    cert: fs.readFileSync("src/utils/code.crt"),
    key: fs.readFileSync("src/utils/code.key")
}, app).listen(3003, () => console.log("Servidor rodando também em https://localhost:3003"))


Clientes.routers(app)
