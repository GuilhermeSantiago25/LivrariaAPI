import Database from "../infra/Database.js"

class DatabaseMetodos{
    static activePragma(){
        const pragma = "PRAGMA foreing_keys = ON"
        Database.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras ativas.")
            }
        })
    }
    static createTable(){

        this.activePragma()

        const tabela_papelaria = `
        CREATE TABLE IF NOT EXISTS papelaria (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            produto VARCHAR,
            marca VARCHAR,
            caracteristicas VARCHAR,
            valor SMALLMONEY,
        )
        `

        return new Promise ((resolve, reject) => {
            Database.run(tabela_papelaria, (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela papelaria criada com sucesso")
                }
            })
        })
    }

    /**
     * 
     * @param {Object} item 
     * @returns Promise<Object>
     */
    static popular(item) {
        const query = `INSERT INTO papelaria VALUES (?, ?, ?, ?, ?)`
        const body = Object.values(item)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e) 
                } else { 
                    resolve({ message: "Item criado com sucesso" }) 
                }
            })
        })
    }
    static listarTodos(){
        const query = "SELECT * FROM papelaria"
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
        const query = "SELECT * FROM papelaria WHERE id = ?"
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
    static atualizaPorId(usuario, id){
        const query = `
        UPDATE papelaria SET (id, produto, marca, caracteristicas, valor) = (?,?,?,?,?) WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            Database.run(query, [...usuario, id], (e, result) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }
    static deletaPorId(id){
        const query = "DELETE FROM papelaria WHERE id = ?"
        return new Promise ((resolve, reject) => {
            Database.run(query, id, (e)=>{
                if (e){
                    reject(e.message)
                } else {
                    resolve({error: false, idDeletado: id})
                }
            })
        })
    }
}

export default DatabaseMetodos