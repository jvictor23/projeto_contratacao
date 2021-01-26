const db = require("../helpers/database");

module.exports={
    //listar usuarios da empresa_id
    getUsuarios: async(empresa_id)=>{
        //buscando dados do banco de dados
        const {rows} = await db.query("SELECT * FROM usuario WHERE empresa_id = $1",[
            empresa_id,
        ]);

        return rows;
    },

    postUsuarios: async(nome,email,password,empresa_id,usuario_id)=>{
        //inserindo dados ao banco de dados
        await db.query("INSERT INTO usuario(nome,email,password,empresa_id,usuario_id) VALUES ($1,$2,$3,$4,$5",[
            nome,
            email,
            password,
            empresa_id,
            usuario_id
        ]);

        //buscando id da ultima insercao ao banco de dados
        const {rows} = await db.query("SELECT id FROM usuario ORDER BY id desc limit 1")

        return rows[0];
    }
}