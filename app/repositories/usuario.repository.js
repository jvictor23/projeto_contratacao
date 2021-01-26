const db = require("../helpers/database");

module.exports={
    //listar usuarios da empresa_id
    getUsuarios: async(empresa_id)=>{
        const {rows} = await db.query("SELECT * FROM usuario WHERE empresa_id = $1",[
            empresa_id,
        ]);

        return rows;
    }
}