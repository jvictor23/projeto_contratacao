const repository = require("../repositories/sedes.repository")

module.exports={
    getSedes: async(empresa_id)=>{
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        const empresas = await repository.getSedes(empresa_id);

        return empresas;
    },

    postSedes: async(cnpj, endereco, empresa_id, usuario_id)=>{
        //verificando se cnpj não é null, undefined ou ''
        if(cnpj === null || cnpj === undefined || cnpj === ''){
            throw new Error("CNJP está vazio");
        }

        //verificando se cnpj é invalido
        if(!validator.cnpj.isValid(cnpj)){
            throw new Error("CNPJ é inválido")
        }

        //verificando se endereco não é null, undefined ou ''
        if(endereco === null || endereco === undefined || endereco === ''){
            throw new Error("endereco está vazio");
        }

        //verificando se endereco não é null, undefined ou ''
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        const id = await repository.postSedes(cnpj,endereco,empresa_id,usuario_id);

        //retornando dados com o id
        const data = {id,cnpj,endereco,empresa_id,usuario_id};

        return data;
    },

    putSedes: async(id,cnpj, endereco, empresa_id, usuario_id)=>{

        //verificando se id não é null, undefined ou ''
        if(id === null || id === undefined || id === ''){
            throw new Error("id está vazio");
        }

        //verificando se cnpj não é null, undefined ou ''
        if(cnpj === null || cnpj === undefined || cnpj === ''){
            throw new Error("CNJP está vazio");
        }

        //verificando se cnpj é invalido
        if(!validator.cnpj.isValid(cnpj)){
            throw new Error("CNPJ é inválido")
        }

        //verificando se endereco não é null, undefined ou ''
        if(endereco === null || endereco === undefined || endereco === ''){
            throw new Error("endereco está vazio");
        }

        //verificando se endereco não é null, undefined ou ''
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        await repository.putSedes(id,cnpj,endereco,empresa_id,usuario_id);

        const data ={id,cnpj,endereco,empresa_id,usuario_id};

        return data;
    }
}