import DBMPapelaria from "../DAO/DBMPapelaria.js";

try {
    const table = await DBMPapelaria.createTable()
    console.log(table)
    await DBMPapelaria.popular(
        {
            id: 1,
            nome: "lapis",
            marca: "Faber Castel",
            caracteristica: "grafite 0.7mm",
            valor: 2.30,
        })

    await DBMPapelaria.popular(
        {
            id: 2,
            nome: "lapiseira",
            marca: "pentel",
            caracteristica: "grafite 0.5mm",
            valor: 24.99,
        })

    await DBMPapelaria.popular(
        {
            id: 3,
            nome: "papel A4",
            marca: "Chamex",
            caracteristica: "500 folhas",
            valor: 26.99,
        })

    await DBMPapelaria.popular(
        {
            id: 4,
            nome: "pasta plastica",
            marca: "plascony",
            caracteristica: "pasta em L",
            valor: 3.80,
        })

    } catch (e) {
        console.log(e.message)
    }