import express from "express";
import * as dotenv from "dotenv";
import fs from "fs"
import https from "https"
import Informatica from "./src/controllers/Informatica.js";
import Livros from "./src/controllers/Livros.js";
import cors from "cors"
import DBMInformatica from "./src/DAO/DBMInformatica.js"


dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())



app.listen(port, ()=>{
    console.log(`Servidor em http://localhost:${port}`)
})
DBMInformatica.createTable (),

https.createServer({
    cert: fs.readFileSync("./src/utils/code.crt"),
    key: fs.readFileSync("./src/utils/code.key")
}, app).listen(3003, () => console.log("Servidor rodando também em https://localhost:3003"))

Informatica.routers(app)