const model = require("../models/registroAutenticacao.model")

module.exports={
    registro: async(req,res)=>{
        console.log(req.body)
        const {nome, email, password} = req.body;
        try {
           const usuario = await model.registro(nome, email, password);

           return res.send({
               success: true,
               data: usuario
           })
        } catch (error) {
            console.log(error)
            return res.send({
                success: false,
                data: null
            })
        }
    }
}