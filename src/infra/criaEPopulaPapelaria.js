import DatabaseMetodos from "../DAO/DatabaseMetodos.js";

try {
    const table = await DatabaseMetodos.createTable()
    console.log(table)
    await DatabaseMetodos.popular(
        {
            id: 1000, 
            produto:"lapis", 
            marca:"Faber Castel",
            caracteristica: "grafite",
            valor: 2.30,
        })    
    } catch (e) {
        console.log(e.message)
    }