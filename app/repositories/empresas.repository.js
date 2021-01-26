const db = require("../helpers/database");
module.exports={
    getEmpresas: async(usuario_id)=>{
        const {rows} = await db.query("SELECT * FROM empresa WHERE usuario_id=$1",[
            usuario_id
        ]);

        return rows;
    },

    postEmpresas: async(razao_social, cnpj, slug,email, usuario_id)=>{
        await db.query("INSERT INTO empresa(razao_social, cnpj, slug, email, usuario_id) VALUES ($1,$2,$3,$4,$5)",[
            razao_social,
            cnpj,
            slug,
            email,
            usuario_id
        ]);

        const {rows} = await db.query("SELECT id FROM empresa ORDER BY id desc limit 1");

        return rows[0];
    },

    findBySlug: async(slug)=>{
        const {rows} = await db.query("SELECT * FROM empresa WHERE slug=$1",[
            slug
        ])

        return rows[0];
    },

    putEmpresas: async(id, razao_social, cnpj, email, usuario_id)=>{
        await db.query("UPDATE empresa SET razao_social=$1, cnpj=$2, email=$3, usuario_id=$4 WHERE id = $5",[
            razao_social,
            cnpj,
            email,
            usuario_id,
            id
        ])
    },

    deleteEmpresas: async(id)=>{
        await db.query("DELETE FROM empresa WHERE id=$1",[
            id
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