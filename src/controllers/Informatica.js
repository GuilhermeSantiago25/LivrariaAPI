import DBMInformatica from "../DAO/DBMInformatica.js"
import InformaticaModel from "../models/InformaticaModels.js"
// import Validacoes from "../services/Validacoes.js"

class Informatica{
    static routers(app){
        
        app.get("/Informatica", async (req, res) =>{
            const response = await DBMInformatica.listarTodos()
            res.status(200).json(response)
        })
        app.get("/Informatica/:id", async (req, res) =>{
            const selectOne = await DBMInformatica.listaPorId(req.body.id)
            res.status(200).json(selectOne)
        })
        app.post("/Informatica", async(req, res) => {
            try {                
                if(Validacoes.validaNome(req.body.nome)){
                    const usuario = new InformaticaModels(...Object.values(req.body))
                    const response = await DBMInformatica.popular(usuario)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição fora dos padrões, favor rever.")
                }
            } catch (e) {
                res.status(400).json({erro: e.message})
            }
        })
app.delete('/Informatica', async (req, res) => {
            let deleteUma = await DBMInformatica.deletaPorId(req.body.id)
            res.status(200).json(deleteUma)
        })
    }
}

export default Informatica