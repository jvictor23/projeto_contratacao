const model = require("../models/")

module.exports={
    getEmpresas: async(req,res)=>{
        try {
            //buscando empresas no banco de dados
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
    },

    postEmpresas: async(req,res)=>{
        try {
            // Destruturando dados
            const {razao_socail, cnpj, slug,email, usuario_id} = req.body;

            //enviando e recebendo informacoes do model
            const empresa = model.postEmpresas(razao_socail, cnpj,slug,email, usuario_id);

            return res.send({
                succes: true,
                data: empresa
            })
        } catch (error) {
            return res.send({
                succes: false,
                data: null
            })
        }
    }
}