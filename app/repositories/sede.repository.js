const db = require("../helpers/database");

module.exports={
    //buscando sede com o id da empresa
    getSedes: async(empresa_id)=>{
        const {rows} = await db.query("SELECT * FROM sede WHERE empresa_id = $1",[
            empresa_id
        ]);

        return rows;
    }
}