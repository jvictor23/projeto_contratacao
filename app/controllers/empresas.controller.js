const model = require("../models/empresas.model")

module.exports={
    getEmpresas: async(req,res)=>{
        //pegando token do header
        const authToken = req.headers.authorization;
        //dividindo o token em duas partes [Bearer,Token]
        const token = authToken.split(' ');
        try {
            //buscando empresas no banco de dados
            const empresas = await model.getEmpresas(token[1]);
            
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
         const {razao_social, cnpj, slug,email} = req.body;
         //pegando token do header
        const authToken = req.headers.authorization;
        //dividindo o token em duas partes [Bearer,Token]
        const token = authToken.split(' ');
        try {
            //enviando e recebendo informacoes do model
            const empresa = model.postEmpresas(razao_social, cnpj,slug,email, token[1]);
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
        const {razao_social, cnpj, slug, email} = req.body;
        //pegando token do header
        const authToken = req.headers.authorization;
        //dividindo o token em duas partes [Bearer,Token]
        const token = authToken.split(' ');
        //id do paramentro da rota
        const id = req.params.id;
    
        try {
            const empresa = await model.putEmpresas(id, razao_social, cnpj, slug, email, token[1]);

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