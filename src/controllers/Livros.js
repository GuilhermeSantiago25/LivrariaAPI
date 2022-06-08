import { DBMLivros } from "../DAO/DBMLivros.js"
import LivrosModel from "../models/LivrosModel.js"
import Validacoes from "../services/Validacoes.js"

export class Livros{
    static routers(app){
        
        app.get("/livros", async (req, res) =>{
            const response = await DBMLivros.listarTodos()
            res.status(200).json(response)
        })

        app.get("/livros/:id", async (req, res) =>{
            const {id} = req.params;
            const response = await DBMLivros.listaPorId(id)
            res.status(200).json(response)
        })

        app.put('/livros/:id', async(req, res) => {
            const {id} = req.params;
            try {                
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaValor(req.body.valor)){
                    const atualizarLivro = await DBMLivros.atualizaPorId(req.body,id)
                    res.status(200).json(atualizarLivro);
                }else {
                    throw new Error("Requisição fora dos padrões, favor rever.")
                }
            } catch (e) {
                res.status(400).json({erro: e.message})
            }
        });

        app.post("/livros", async(req, res) => {
            try {                
                if(Validacoes.validaNome(req.body.nome)&& Validacoes.validaValor(req.body.valor))  {
                    const inserirLivro = new LivrosModel(...Object.values(req.body))
                    const response = await DBMLivros.popular(inserirLivro)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição fora dos padrões, favor rever.")
                }
            } catch (e) {
                res.status(400).json({erro: e.message})
            }
        });

        app.delete('/livros/:id', async(req, res) => {
                    const {id} = req.params;    
                    const deletarLivro = await DBMLivros.deletaPorId(id)
                    res.status(201).json(deletarLivro)
        });
    }
}

