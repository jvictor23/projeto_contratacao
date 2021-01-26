const db = require("../helpers/database");

module.exports={
    //buscando sede com o id da empresa
    getSedes: async(empresa_id, usuario_id)=>{
        
        const {rows} = await db.query("SELECT * FROM sede WHERE empresa_id = $1 AND usuario_id=$2",[
            empresa_id,
            usuario_id
        ]);
        
        return rows;
    },

    postSedes: async(cnpj, endereco, empresa_id, usuario_id)=>{
        
        await db.query("INSERT INTO sede (cnpj,endereco,empresa_id,usuario_id) VALUES ($1,$2,$3,$4)",[
            cnpj,
            endereco,
            empresa_id,
            usuario_id
        ])

        const {rows} = await db.query("SELECT id FROM sede ORDER BY id desc limit 1");

        return rows[0];
    },
    
    putSedes: async(sede_id,cnpj, endereco, empresa_id)=>{
        await db.query("UPDATE sede SET cnpj=$1, endereco=$2 WHERE id=$3 AND empresa_id = $4",[
            cnpj,
            endereco,
            sede_id,
            empresa_id
        ]);
    },

    deleteSedes: async(empresa_id,sede_id)=>{
        await db.query("DELETE FROM sede WHERE empresa_id = $1 AND sede_id=$2",[
            empresa_id,
            sede_id
        ])
    },

    //buscando usuario_id pelo token
    findUserByToken: async(token)=>{
        const {rows} = await db.query("SELECT usuario_id FROM tokens WHERE token=$1",[
            token
        ]);
        
        return rows[0];
    }
}