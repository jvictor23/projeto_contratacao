const repository = require("../repositories/sedes.repository");
const validator = require('cpf-cnpj-validator');

module.exports={
    getSedes: async(empresa_id, token)=>{
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        const {usuario_id} = await repository.findUserByToken(token);

        const sedes = await repository.getSedes(empresa_id, usuario_id);
        
        return sedes;
    },

    postSedes: async(cnpj, endereco, empresa_id, token)=>{
        
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

        const {usuario_id} = await repository.findUserByToken(token);

        const {id} = await repository.postSedes(cnpj,endereco,empresa_id,usuario_id);

        //retornando dados com o id
        const data = {id,cnpj,endereco,empresa_id,usuario_id};

        return data;
    },

    putSedes: async(sede_id,cnpj, endereco, empresa_id, token)=>{

        //verificando se sede_id não é null, undefined ou ''
        if(sede_id === null || sede_id === undefined || sede_id === ''){
            throw new Error("sede_id está vazio");
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

        //verificando se empresa_id não é null, undefined ou ''
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        //buscando usuario_id pelo token
        const {usuario_id} = await repository.findUserByToken(token);


        await repository.putSedes(sede_id,cnpj,endereco,empresa_id,usuario_id);

        const data ={sede_id,cnpj,endereco,empresa_id,usuario_id};

        return data;
    },

    deleteSedes: async(empresa_id, sede_id, token)=>{

        //verificando se empresa_id não é null, undefined ou ''
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        //verificando se sede_id não é null, undefined ou ''
        if(sede_id === null || sede_id === undefined || sede_id === ''){
            throw new Error("sede_id está vazio");
        }

        const {usuario_id} = await repository.findUserByToken(token);

        await repository.deleteSedes(empresa_id, sede_id, usuario_id);
    }
}