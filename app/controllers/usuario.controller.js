const model = require("../models/usuario.model");

module.exports={
    getUsuarios: async(req,res)=>{
        // Destruturando dados
        const {empresa_id} = req.params;

        //Pegando authToken do header
        const authToken = req.headers.authorization;
        //dividindo o token em duas partes [Bearer,Token]
        const token = authToken.split(' ');

        try {

            //enviando e recebendo dados do model
            const usuarios = await model.getUsuarios(empresa_id, token[1]);

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
        const {nome,email,password} = req.body;
        const {empresa_id} = req.params;

          //Pegando authToken do header
          const authToken = req.headers.authorization;
          //dividindo o token em duas partes [Bearer,Token]
          const token = authToken.split(' ');

        try {

            //enviando e recebendo dados do model
            const usuario = await model.postUsuarios(nome,email,password,empresa_id,token[1]);

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

        //Pegando authToken do header
        const authToken = req.headers.authorization;
        //dividindo o token em duas partes [Bearer,Token]
        const token = authToken.split(' ');

        try {
            //enviando e recebendo dados do model
            const usuario = await model.putUsuarios(nome,email,password,empresa_id,usuario_id, token[1]);

            //retornado {} de usuario
            return res.send({
                success: true,
                data: usuario
            })
        } catch (error) {
            console.log(error)
            //retornando false e null caso haja erro
            return res.send({
                success: false,
                data: null
            })
        }
    },

    deleteUsuarios: async(req,res)=>{
        const {empresa_id, usuario_id} = req.params;
        //Pegando authToken do header
        const authToken = req.headers.authorization;
        //dividindo o token em duas partes [Bearer,Token]
        const token = authToken.split(' ');

        try {
            await model.deleteUsuarios(empresa_id,usuario_id, token[1]);

            return res.send({
                success:true,
                data:null
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