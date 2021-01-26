const repository = require("../repositories/sede.repository")

module.exports={
    getSedes: async(empresa_id)=>{
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        const empresas = await repository.getSedes(empresa_id);

        return empresas;
    }
}