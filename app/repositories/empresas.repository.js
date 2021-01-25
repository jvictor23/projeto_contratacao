const db = require("../helpers/database");
module.exports={
    getEmpresas: async()=>{
        const {rows} = await db.query("SELECT * FROM empresa");

        return rows;
    }
}