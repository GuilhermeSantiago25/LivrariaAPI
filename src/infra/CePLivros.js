import DBMLivros from "../DAO/DBMLivros.js";

try {
    const table = await DBMLivros.createTable()
    console.log(table)
    await DBMLivros.popular(
        {
            id: 100, 
            nome:"Verity", 
            autora:"Colleen Hoover",
            gênero: "romance",
            valor: 32.90
        })   
    
    await DBMLivros.popular(
        {
            id: 101, 
            nome:"O reverso da medalha", 
            autora:"Sidney Sheldon",
            gênero: "aventura",
            valor: 51.90
        })  
    
    await DBMLivros.popular(
            {
                id: 102, 
                nome:"Materia Escura", 
                autora:"Blake Crouch",
                gênero: "ficção científica",
                valor: 49.90
    })

    await DBMLivros.popular(
        {
            id: 103, 
            nome:"Onde está Daisy Mason?", 
            autora:"Cara Hunter",
            gênero: "suspense",
            valor: 24.90
})  

} catch (e) {
    console.log(e.message)
}

