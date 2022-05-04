import DBMClientes from "../DAO/DBMClientes.js";

try {
    const table = await DBMClientes.createTable()
    console.log(table)
    await DBMClientes.incluir(
        { 
            id: 3,
            nome:"Sandra Lopes Gomes", 
            email:"sandra@email.com.br",
            cpf: 23456789012,
            telefone: 23998765432,
            endereco: "Avenida Brasil, 1234, 301, Caju, Rio de Janeiro, Rio de Janeiro, 20930040"
        })    
} catch (e) {
    console.log(e.message)
}

/**
 *  Padrão de preenchimento do endereço: Logradouro, Número, Complemento, Bairro, Cidade, Estado, CEP
 * 
 */