const db = require("../helpers/database");
module.exports={
    getEmpresas: async()=>{
        const {rows} = await db.query("SELECT * FROM empresa");

        return rows;
    },

    postEmpresas: async(razao_social, cnpj, slug,email, usuario_id)=>{
        await db.query("INTER INTO empresa(razao_social, cnpj, slug, email, usuario_id)",[
            razao_social,
            cnpj,
            slug,
            email,
            usuario_id
        ])

        const {rows} = await db.query("SELECT id FROM empresa ORDER BY id desc limit 1");

        return rows[0];
    },

    findBySlug: async(slug)=>{
        const {rows} = db.query("SELECT * FROM empresa WHERE slug=$1",[
            slug
        ])

        return rows[0];
    }
}