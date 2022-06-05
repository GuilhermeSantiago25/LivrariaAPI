import Database from "../infra/Database.js"

export class DBMInformatica{
    static activePragma(){
        const pragma = "PRAGMA foreing_keys = ON"
        Database.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras Informatica configuradas.")
            }
        })
    }
    static createTable(){

        this.activePragma()
        const tabela_Informatica = `
        CREATE TABLE IF NOT EXISTS Informatica (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            produto VARCHAR,
            marca VARCHAR,
            especificacao VARCHAR,
            valor FLOAT
        )
        `

        return new Promise ((resolve, reject) => {
            Database.run(tabela_Informatica, (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela criada com sucesso")
                }
            })
        })
    }

    static popular(Informatica) {
        const query = `INSERT INTO Informatica VALUES (?, ?, ?, ?, ?)`
        const body = Object.values(Informatica)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e) 
                } else { 
                    resolve({ message: "Informatica criado com sucesso" }) 
                }
            })
        })
    }
    static listarTodos(){
        const query = "SELECT * FROM Informatica"
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
        const query = "SELECT * FROM Informatica WHERE id = ?"
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

    // UPDATE Informatica SET id = ?, produto = ?, marca =?, especificacao =?, valor = ? WHERE id = ?
    static atualizaPorId(Informatica, id){
        const query = `
        UPDATE Informatica SET (id, produto, marca, especificacao, valor) = (?,?,?,?,?) WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            Database.run(query, [...Object.values(Informatica), id], (e, result) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve(`id ${id} foi atualizado com sucesso`)
                }
            })
        })
    }
    static deletaPorId(id){
        const query = "DELETE FROM Informatica WHERE id = ?"
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

