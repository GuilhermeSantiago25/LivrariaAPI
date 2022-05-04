import DBMLivros from "../DAO/DBMLivros.js"
import LivrosModel from "../models/LivrosModel.js"
import Validacoes from "../services/Validacoes.js"

class Livros{
    static routers(app){
        
        app.get("/Livros", async (req, res) =>{
            const response = await DBMLivros.listarTodos()
            res.status(200).json(response)
        })

        app.get("/Livros/:id", async (req, res) =>{
            const response = await DBMLivros.listaPorId(req.body.id)
            res.status(200).json(response)
        })

        app.put('/Livros/:id', async(req, res) => {
            try {                
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaValor(req.body.valor)){
                    const atualizarLivro = await DBMLivros.atualizaPorId(req.body, req.body.id)
                    res.status(200).json(atualizarLivro);
                }else {
                    throw new Error("Requisição fora dos padrões, favor rever.")
                }
            } catch (e) {
                res.status(400).json({erro: e.message})
            }
        });

        app.post("/Livros", async(req, res) => {
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

        app.delete('/Livros/:id', async(req, res) => {               
                    const deletarLivro = await DBMLivros.deletaPorId(req.body.id)
                    res.status(201).json(deletarLivro)
        });
    }
}

export default Livros