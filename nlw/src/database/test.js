const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async(db)=> {
    //inserir dados na tabela 
    /*await saveOrphanage(db,  {
        lat: "-27.222633",
        lng: "-49.6655874",
        name: "Lar de amor",
        about: "aqui vc pode falar sobre o orphanato",
        whatsapp: "1919191191",
        images:[
            "https://images.unsplash.com/photo-1599058919476-4933715fa828?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1576024267263-70f1caffd6fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends:"1"
        
    })

    //consultar dados da tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    */

    // Consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "6"')
    console.log(orphanage)


    //Outros comandos 
    //const Delete = await db.all('DELETE FROM orphanages WHERE id = "1"')
    //console.log(Delete)

    //const Update = await db.all('UPDATE orphanages SET whatsapp ="11999999991" WHERE id = "3"')

    //const drop = await db.all('DROP TABLE orphanages')
})