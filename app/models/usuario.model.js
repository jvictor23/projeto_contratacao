const repository = require("../repositories/usuario.repository");

module.exports={
    getUsuarios: async(empresa_id)=>{
        //verificando se empresa_id não é null, undefined ou ''
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }
        //enviando e rebendo dados do repository
        const usuario = await repository.getUsuarios(empresa_id);

        return usuario;
    }
}