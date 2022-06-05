import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import Clientes from "./src/controllers/Clientes.js";
import Informatica from "./src/controllers/Informatica.js";
import Livros from "./src/controllers/Livros.js";
import Papelaria from "./src/controllers/Papelaria.js";

import DBMClientes from "./src/DAO/DBMClientes.js";
import DBMInformatica from "./src/DAO/DBMInformatica.js";
import DBMLivros from "./src/DAO/DBMLivros.js";
import DBMPapelaria from "./src/DAO/DBMPapelaria.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.listen(port, ()=>{
    console.log(`Sucesso na Conexão ao Servidor em: http://localhost:${port}`)
})

DBMClientes.createTable();
DBMInformatica.createTable();
DBMLivros.createTable();
DBMPapelaria.createTable();

Clientes.routers(app);
Informatica.routers(app);
Livros.routers(app);
Papelaria.routers(app)