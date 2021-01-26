const db = require("../helpers/database");

module.exports={
    //listar usuarios da empresa_id
    getUsuarios: async(empresa_id, usuario_id)=>{
        //buscando dados do banco de dados
        const {rows} = await db.query("SELECT * FROM usuario WHERE empresa_id = $1 AND usuario_id=$2",[
            empresa_id,
            usuario_id
        ]);
        console.log(rows)
        return rows;
    },

    postUsuarios: async(nome,email,password,empresa_id,usuario_id)=>{
        console.log(nome,email,password,empresa_id,usuario_id)
        //inserindo dados ao banco de dados
        await db.query("INSERT INTO usuario(nome,email,password,empresa_id,usuario_id) VALUES ($1,$2,$3,$4,$5)",[
            nome,
            email,
            password,
            empresa_id,
            usuario_id
        ]);

        //buscando id da ultima insercao ao banco de dados
        const {rows} = await db.query("SELECT id FROM usuario ORDER BY id desc limit 1")

        return rows[0];
    },

    putUsuarios: async(nome,email,password, empresa_id, usuario_id)=>{
        //atualizando dados no banco de dados
        await db.query("UPDATE usuario SET nome=$1, email=$2, password=$3 WHERE empresa_id=$4 AND usuario_id=$5",[
            nome,
            email,
            password,
            empresa_id,
            usuario_id
        ]);
    },

    deleteUsuarios: async(empresa_id, usuario_id)=>{
        //deltando dados no banco de dados
        await db.query("DELETE FROM usuario WHERE empresa_id =$1 AND usuario_id=$2",[
            empresa_id,
            usuario_id
        ]);
    },

    //buscando usuario_id pelo token
    findUserByToken: async(token)=>{
        const {rows} = await db.query("SELECT usuario_id FROM tokens WHERE token=$1",[
            token
        ]);
        
        return rows[0];
    },

    findUserByEmail: async(email)=>{
        const {rows} = await db.query("SELECT * FROM usuario WHERE email=$1",[
            email
        ]);

        return rows[0];
    },
}