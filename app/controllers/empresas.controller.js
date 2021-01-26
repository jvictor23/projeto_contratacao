const model = require("../models/empresas.model")

module.exports={
    getEmpresas: async(req,res)=>{
        try {
            //buscando empresas no banco de dados
            const empresas = await model.getEmpresas();
            
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
    },

    postEmpresas: async(req,res)=>{
         // Destruturando dados
         const {razao_social, cnpj, slug,email, token} = req.body;
        try {
            //enviando e recebendo informacoes do model
            const empresa = model.postEmpresas(razao_social, cnpj,slug,email, token);
            return res.send({
                success: true,
                data: empresa
            })
        } catch (error) {
            return res.send({
                success: false,
                data: null
            })
        }
    },

    putEmpresas: async(req,res)=>{
        // Destruturando dados
        const {razao_socail, cnpj, email, usuario_id} = req.body;
        const {id} = req.parms;
        
        try {
            const empresa = model.putEmpresas(id, razao_socail, cnpj, email, usuario_id);

            return res.send({
                success: true,
                data: empresa
            })
        } catch (error) {
            return res.send({
                success: false,
                data: null
            })
        }
    },

    deleteEmpresas: async(req,res)=>{
        const {id} = req.params;

        try {
            await model.deleteEmpresas(id);

            return res.send({
                success: true,
                data:null
            })
        } catch (error) {
            return res.send({
                success: false,
                data: null
            })
        }
    }
}