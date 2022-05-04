import DBMInformatica from "../DAO/DBMInformatica.js";

try {
    const table = await DBMInformatica.createTable()
    console.log(table)
    await DBMInformatica.popular(
        {
            id: 1,
            produto: "Mouse Gamer Cobra",
            marca: "Redragon",
            especificação: "Chroma RGB, 12400DPI, 7 Botões, Preto - M711 V2",
            valor: 119.99
        })
    await DBMInformatica.popular(
        {
            id: 2,
            produto: "Teclado Mecanico DARK AVENGER",
            marca: "Redragon",
            especificação: "RGB, USB, SWITCH VERMELHO, K568RGB-2 RED",
            valor: 289.99
        })
    await DBMInformatica.popular(
        {
            id: 3,
            produto: "Headset Gamer Zeus X ",
            marca: "Redragon",
            especificação: "RGB, USB, 7.1 Surround Sound Virtual H510-RGB, Preto",
            valor: 349.99
        })
    await DBMInformatica.popular(
        {
            id: 4,
            produto: "Mousepad Gamer Suzaku",
            arca: "Redragon",
            especificação: "Preto e Vermelho, 800x300mm",
            valor: 99.99
        })    
} catch (e) {
    console.log(e.message)
}