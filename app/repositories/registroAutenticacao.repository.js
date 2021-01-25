const db = require("../helpers/database");

module.exports ={
    registro: async(nome, email,password)=>{
        //inserindo dados ao banco de dados
        await db.query("INSERT INTO usuario(nome,email,password) VALUES ($1,$2,$3)",[
            nome,
            email,
            password
        ]);
        //recuperando ultima insercao de dados no banco de dados
        const {rows} = await db.query("SELECT id,nome,email FROM usuario ORDER BY id desc limit 1");

        return rows[0];
    }
}