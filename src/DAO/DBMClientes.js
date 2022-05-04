import Database from "../infra/Database.js"

class DBMClientes{
    static activePragma(){
        const pragma = "PRAGMA foreing_keys = ON"
        Database.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras configuradas.")
            }
        })
    }
    static createTable(){

        this.activePragma()

        const tabela_clientes = `
        CREATE TABLE IF NOT EXISTS clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            cpf INTEGER,
            telefone INTEGER,
            endereco VARCHAR
        )
        `

        return new Promise ((resolve, reject) => {
            Database.run(tabela_clientes, (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela criada com sucesso")
                }
            })
        })
    }

    /**
     * 
     * @param {Object} clientes 
     * @returns Promise<Object>
     */
    
    static incluir(clientes) {
        const query = `INSERT INTO clientes VALUES (?, ?, ?, ?, ?, ?)`
        const body = Object.values(clientes)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e) 
                } else { 
                    resolve({ message: "Cliente inserido com sucesso." }) 
                }
            })
        })
    }

    static atualizaPorId(clientes, id){
        const query = `
        UPDATE clientes SET (id, nome, email, cpf, telefone, endereco) = (?, ?, ?, ?, ?, ?) WHERE id = ?
        `;
        const body = Object.values(clientes)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve({ message: "Alteração realizada com sucesso." })
                }
            })
        })
    }

    static listarTodos(){
        const query = "SELECT * FROM clientes"
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
        const query = "SELECT * FROM clientes WHERE id = ?"
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

    static deletaPorId(id){
        const query = "DELETE FROM clientes WHERE id = ?"
        return new Promise ((resolve, reject) => {
            Database.run(query, id, (e)=>{
                if (e){
                    reject(e.message)
                } else {
                    resolve({idDeletado: id})
                }
            })
        })
    }
}

export default DBMClientes