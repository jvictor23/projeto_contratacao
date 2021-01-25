const db = require("../helpers/database");

module.exports ={
    registro: async(nome, email,password)=>{
        const {rows} = await db.query("INSERT INTO usuario(nome,email,password) VALUES ($1,$2,$3)",[
            nome,
            email,
            password
        ]);

        return rows[0];
    }
}