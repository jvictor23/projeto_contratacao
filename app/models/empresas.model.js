const repository = require("../repositories/")

module.exports={
    getEmpresas: async()=>{
        const empresas = await repository.getEmpresas();
        return empresas;
    }
}