const model = require("../models/registroAutenticacao.model")

module.exports={
    //registro
    registro: async(req,res)=>{
        // Destruturando dados
        const {nome, email, password} = req.body;
        try {
            //enviando dados para o model e recendo seu retorno
           const usuario = await model.registro(nome, email, password);

           //retornando dados caso nao haja erro
           return res.send({
               success: true,
               data: usuario
           })
        } catch (error) {
            //retornando null caso haja erro
            return res.send({
                success: false,
                data: null
            })
        }
    },

    login: async(req,res)=>{
        //Destruturando dados
        const{email,password} = req.body;
        try {
            //enviando dados para o model e recebendo seu retorno
            const token = await model.login(email,password);
            //retornando token caso nao haja erro
            return res.send({
                success: true,
                data:null,
                token: token
            })
        } catch (error) {
            //retornando null caso haja erro
            console.log(error)
            return res.send({
                success: false,
                data:null
            })
        }
    },

    logout: async(req,res)=>{
        //Destruturando dados
        const {token} = req.body;
        try {
            model.logout(token);

            return res.send({
                success: true,
                data: null
            })
        } catch (error) {
            return res.send({
                success: false,
                data:null
            })
        }
    }
}