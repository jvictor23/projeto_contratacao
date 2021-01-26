const db = require("../helpers/database");

module.exports={
    //buscando sede com o id da empresa
    getSedes: async(empresa_id)=>{
        const {rows} = await db.query("SELECT * FROM sede WHERE empresa_id = $1",[
            empresa_id
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
    
    putSedes: async(id,cnpj, endereco, empresa_id, usuario_id)=>{
        await db.query("UPDATE sede SET cnpj=$1, endereco=$2, usuario_id=$4 WHERE id=$5 AND empresa_id = $6",[
            cnpj,
            endereco,
            usuario_id,
            id,
            empresa_id
        ]);
    },

    deleteSedes: async(empresa_id,sede_id)=>{
        await db.query("DELETE FROM sede WHERE empresa_id = $1 AND sede_id=$2",[
            empresa_id,
            sede_id
        ])
    }
}