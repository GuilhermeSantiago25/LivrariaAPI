import Database from "../infra/Database.js"

class DBMLivros{
    static activePragma(){
        const pragma = "PRAGMA foreing_keys = ON"
        Database.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras Livros configuradas.")
            }
        })
    }
    static createTable(){

        this.activePragma()

        const tabela_livros = `
        CREATE TABLE IF NOT EXISTS livros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo VARCHAR,
            autor VARCHAR,
            genero VARCHAR,
            valor FLOAT,
            descricao VARCHAR,
            url VARCHAR
        )
        `
        
        return new Promise ((resolve, reject) => {
            Database.run(tabela_livros, (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela de livros criada com sucesso")
                }
            })
        })
    }

    /**
     * 
     * @param {Object} livro 
     * @returns Promise<Object>
     */
    static popular (livro) {
        const query = `INSERT INTO livros VALUES (?, ?, ?, ?, ?, ?, ?)`
        const body = Object.values(livro)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e) 
                } else { 
                    resolve({ message: "Livro adicionado com sucesso" }) 
                }
            })
        })
    }
    static listarTodos(){
        const query = "SELECT * FROM livros"
        return new Promise ((resolve, reject) => {
            Database.all(query, (e, rows)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({rows:rows})
                }
            })
        })
    }
    static listaPorId(id){
        const query = "SELECT * FROM livros WHERE id = ?"
        return new Promise ((resolve, reject) => {
            Database.get(query, id, (e, result)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve(result)
                }
            } )
        })
    }
    static atualizaPorId(livro, id){
        const query = `
        UPDATE livros SET (id, titulo, autor, genero, valor) = (?,?,?,?,?) WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            Database.run(query, [...Object.values(livro), id], (e, result) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve(`Id ${id} alterado com sucesso.`)
                }
            })
        })
    }
    static deletaPorId(id){
        const query = "DELETE FROM livros WHERE id = ?"
        return new Promise ((resolve, reject) => {
            Database.run(query, id, (e)=>{
                if (e){
                    reject(e.message)
                } else {
                    resolve(`Id ${id} deletado com sucesso.`)
                }
            })
        })
    }
}

export default DBMLivros