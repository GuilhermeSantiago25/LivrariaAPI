import express from "express";
import * as dotenv from "dotenv";
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
DBMInformatica.createTable ()

Informatica.routers(app)