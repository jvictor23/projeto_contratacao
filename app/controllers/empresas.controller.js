const model = require("../models/")

module.exports={
    getEmpresas: async(req,res)=>{
        try {
            const empresas = await model.getEmpresas();
            
            return res.send({
                succes: true,
                data: empresas
            })
        } catch (error) {
            return res.send({
                succes: false,
                data: null
            })
        }
    }
}