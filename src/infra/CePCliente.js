import DBMClientes from "../DAO/DBMClientes.js";

try {
    const table = await DBMClientes.createTable()
    console.log(table)
    await DBMClientes.incluir(
        {
            id: 1,
            nome:"Izadora Moreira Salles", 
            email:"iza_salles@email.com.br",
            cpf: 78901234589,
            telefone: 17999114343,
            endereco: "Avenida Simoes Soares, 935, Barra do Itapemirim, Marataízes, Espirito Santo, 29345000"
        })

    await DBMClientes.incluir(
        {
            id: 2,
			nome: "José Etchevery Lopes",
			email: "etchevery@email.com.br",
			cpf: 23456789012,
			telefone: 32998765420,
			endereco: "Avenida Brasil, 1234, 301, Caju, Rio de Janeiro, Rio de Janeiro, 20930040"
        })

    await DBMClientes.incluir(
        {
            id: 3,
            nome:"Nilton Castro Bianchi", 
            email:"n_bianchi@email.com.br",
            cpf: 78901209123,
            telefone: 32999114343,
            endereco: "Rua Luiza Colsera, 355, 301, Centro, Juiz de Fora, Minas Gerais, 36036000"
        })

    await DBMClientes.incluir(
        {
            id: 4,
            nome:"Vitor Nobre Bianchi", 
            email:"lcastro@email.com.br",
            cpf: 78901237234,
            telefone: 28999114343,
            endereco: "Rua Accacio Melo, 19, Jurerê, Florianópolis, Santa Catarina, 88053682"
        })
    await DBMClientes.incluir(
        { 
            id: 5,
            nome:"Luiz Castro Gamonal", 
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