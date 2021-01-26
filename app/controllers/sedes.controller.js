const model = require("../models/sedes.model")

module.exports={
    getSedes: async(req,res)=>{
        const {empresa_id} = req.params;
        try {
            const empresas = model.getSedes(empresa_id);

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

    postSedes: async(req,res)=>{
        // Destruturando dados
        const {cnpj, endereco} = req.body;
        //Pegando empresa_id do parametro da rota
        const empresa_id = req.params.empresa_id;
        //Pegando authToken do header
        const authToken = req.headers.authorization;
        //dividindo o token em duas partes [Bearer,Token]
        const token = authToken.split(' ');

        try {
            const sede = await model.postSedes(cnpj,endereco,empresa_id,token[1]);

            return res.send({
                success: true,
                data: sede
            })
        } catch (error) {
            console.log(error)
            return res.send({
                success: false,
                data: null
            })
        }
    },

    putSedes: async(req,res)=>{
        const {cnpj, endereco, usuario_id} = req.body;
        const {empresa_id, sede_id} = req.params;

        try {
            const sede = await model.putSedes(sede_id,cnpj,endereco,empresa_id,usuario_id);

            return res.send({
                success: true,
                data: sede
            })
        } catch (error) {
            return res.send({
                success: false,
                data: null
            })
        }
    },

    deleteSedes: async(req,res)=>{
        const {empresa_id, sede_id} = req.params;
        try {
            await model.deleteSedes(empresa_id,sede_id);
            return res.send({
                success: true,
                data: null
            })
        } catch (error) {
            return res.send({
                success: false,
                data: null
            })
        }
    }
}