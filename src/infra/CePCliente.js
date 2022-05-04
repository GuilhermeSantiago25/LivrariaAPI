import DBMClientes from "../DAO/DBMClientes.js";

try {
    const table = await DBMClientes.createTable()
    console.log(table)
    await DBMClientes.incluir(
        { 
            id: 5,
            nome:"Luiz Castro Bianchi", 
            email:"lcastro@email.com.br",
            cpf: 78901234589,
            telefone: 28999114343,
            endereco: "Avenida Simoes Soares, 935, Barra do Itapemirim, Marataízes, Espirito Santo, 29345000"
        })    
} catch (e) {
    console.log(e.message)
}

/**
 *  Padrão de preenchimento do endereço: Logradouro, Número, Complemento, Bairro, Cidade, Estado, CEP
 * 
 */