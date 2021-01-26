const model = require("../models/sedes.model")

module.exports={
    getSedes: async(req,res)=>{
        const {empresa_id} = req.params;
        try {
            const empresas = model.getSedes(empresa_id);

            return res.send({
                success: true,
                data: empresas
            })
        } catch (error) {
            return res.send({
                success: false,
                data: null
            })
        }
    }
}