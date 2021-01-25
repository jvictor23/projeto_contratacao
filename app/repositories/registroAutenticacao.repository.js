const db = require("../helpers/database");
const router = require("../routes/registroAutenticacao.route");

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
    },

    findUserByEmail: async(email)=>{
        const {rows} = await db.query("SELECT * FROM usuario WHERE email=$1",[
            email
        ]);

        return rows[0];
    }
}