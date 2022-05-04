import express from "express";
import * as dotenv from "dotenv";
import Papelaria from "./src/controllers/Papelaria.js";
import cors from "cors";
import DBMPapelaria from "./src/DAO/DBMPapelaria.js";
import https from "https";
import fs from "fs";


dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

DBMPapelaria.createTable();

app.listen(port, ()=>{
    console.log(`Sucesso na Conexão ao Servidor em: http://localhost:${port}`)
})

https.createServer({
    cert: fs.readFileSync("src/utils/code.crt"),
    key: fs.readFileSync("src/utils/code.key")
}, app).listen(3003, () => console.log("Servidor rodando também em https://localhost:3003"))

Papelaria.routers(app)

