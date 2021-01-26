const model = require("../models/usuario.model");

module.exports={
    getUsuarios: async(req,res)=>{
        // Destruturando dados
        const {empresa_id} = req.params;
        try {

            //enviando e recebendo dados do model
            const usuarios = await model.getUsuarios(empresa_id);

            //retornando [] de usuarios
            return res.send({
                success: true,
                data: usuarios
            })
            
        } catch (error) {
            //retornando false e null caso haja erro
            return res.send({
                success: false,
                data: null
            })
        }
    }
}