import DBMPapelaria from "../DAO/DBMPapelaria.js";
import Validacoes from "../services/Validacoes.js";


try {
    const table = await DBMPapelaria.createTable()
    console.log(table)
    await DBMPapelaria.popular(
        {
            id: 1,
            produto: "lapis",
            marca: "Faber Castel",
            caracteristica: "grafite 0.7mm",
            valor: 2.30,
        })

    await DBMPapelaria.popular(
        {
            id: 2,
            produto: "lapiseira",
            marca: "pentel",
            caracteristica: "grafite 0.5mm",
            valor: 24.99,
        })

    await DBMPapelaria.popular(
        {
            id: 3,
            produto: "papel A4",
            marca: "Chamex",
            caracteristica: "500 folhas",
            valor: 26.99,
        })

    await DBMPapelaria.popular(
        {
            id: 4,
            produto: "pasta plastica",
            marca: "plascony",
            caracteristica: "pasta em L",
            valor: 3.80,
        })
} catch (e) {
    console.log(e.message)
}