import DatabaseMetodos from "../DAO/DatabaseMetodos.js"
import PapelariaModel from "../models/PapelariaModel.js"
import Validacoes from "../services/Validacoes.js"

class Papelaria{
    static routers(app){
        
        app.get("/papelaria", async (req, res) =>{
            const response = await DatabaseMetodos.listarTodos()
            res.status(200).json(response)
        })
        app.post("/papelaria", async(req, res) => {
            try {                
                if(Validacoes.validaProduto(req.body.nome)){
                    const item = new PapelariaModel(...Object.values(req.body))
                    const response = await DatabaseMetodos.popular(item)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição fora dos padrões, favor rever.")
                }
            } catch (e) {
                res.status(400).json({erro: e.message})
            }
        })
    }
}

export default Papelaria