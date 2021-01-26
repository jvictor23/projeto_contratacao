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
    },

    postUsuarios: async(req,res)=>{
        // Destruturando dados
        const {nome,email,password, id_dono} = req.body;
        const {empresa_id} = req.params;

        try {

            //enviando e recebendo dados do model
            const usuario = await model.postUsuarios(nome,email,password,empresa_id,id_dono);

            //retornado {} de usuario
            return res.send({
                success:true,
                data: usuario
            })
            
        } catch (error) {
             //retornando false e null caso haja erro
             return res.send({
                success: false,
                data: null
            })
        }
    },

    putUsuarios: async(req,res)=>{
        const {nome,email,password} = req.body;
        const {empresa_id, usuario_id} = req.params;

        try {
            //enviando e recebendo dados do model
            const usuario = model.putUsuarios(nome,email,password,empresa_id,usuario_id);

            //retornado {} de usuario
            return res.send({
                success: true,
                data: usuario
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