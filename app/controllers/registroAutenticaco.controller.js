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
    }
}