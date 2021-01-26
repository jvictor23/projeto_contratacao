const repository = require("../repositories/empresas.repository");
const validator = require('cpf-cnpj-validator');
const e = require("express");

module.exports={
    getEmpresas: async()=>{
        //recebendo informações do repository
        const empresas = await repository.getEmpresas();
        return empresas;
    },

    postEmpresas: async(razao_social, cnpj, slug,email, token)=>{
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        //verificando se razao_social não é null, undefined ou ''
        if(razao_social === null || razao_social === undefined || razao_social === ''){
            throw new Error("Razao social está vazio");
        }

        //verificando se cnpj não é null, undefined ou ''
        if(cnpj === null || cnpj === undefined || cnpj === ''){
            throw new Error("CNJP está vazio");
        }

        //verificando se cnpj é invalido
        if(!validator.cnpj.isValid(cnpj)){
            throw new Error("CNPJ é inválido")
        }

        //verificando se slug não é null, undefined ou ''
        if(slug === null || slug === undefined || slug === ''){
            throw new Error("slug está vazio");
        }

        //buscando empresa pelo slug
        const empresa = await repository.findBySlug(slug);

        //verificando se slug ja existe
        if(empresa){
            throw new Error("Slug já está sendo usado!")
        }

        //verificando se email não é null, undefined ou ''
        if(email === null || email === undefined || email === ''){
            throw new Error("email está vazio");
        }

         //verificando se email é valido com o regex
         if(!reg.test(email)){
            console.log("O email é inválido")
            throw new Error("O email é inválido")
        }

        //verificando se token não é null, undefined ou ''
        if(token === null || token === undefined || token === ''){
            throw new Error("token está vazio");
        }

        //enviando dados ao repository para criacao de empresa
        const usuario_id = await repository.findUserByToken(token);

        const empresaCriada = await repository.postEmpresas(razao_social, cnpj, slug,email, usuario_id);

        const id = empresaCriada.id;

        const data = {id,razao_social, cnpj, slug,email, usuario_id};

        return data;

    },

    putEmpresas: async(id, razao_social, cnpj, email, usuario_id)=>{
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        //verificando se razao_social não é null, undefined ou ''
        if(razao_social === null || razao_social === undefined || razao_social === ''){
            throw new Error("Razao social está vazio");
        }

        //verificando se cnpj não é null, undefined ou ''
        if(cnpj === null || cnpj === undefined || cnpj === ''){
            throw new Error("CNJP está vazio");
        }

        //verificando se cnpj é invalido
        if(!validator.cnpj.isValid(cnpj)){
            throw new Error("CNPJ é inválido")
        }

        //verificando se email não é null, undefined ou ''
        if(email === null || email === undefined || email === ''){
            throw new Error("email está vazio");
        }

         //verificando se email é valido com o regex
         if(!reg.test(email)){
            console.log("O email é inválido")
            throw new Error("O email é inválido")
        }

        //verificando se usuario_id não é null, undefined ou ''
        if(usuario_id === null || usuario_id === undefined || usuario_id === ''){
            throw new Error("usuario_id está vazio");
        }

        await repository.putEmpresas(id, razao_social, cnpj, email, usuario_id);

        const data = {id, razao_social, cnpj, email, usuario_id};
        return data;
    },

    deleteEmpresas: async(id)=>{
        if(!id){
            throw new Error("id esta vazio")
        }

        await repository.deleteEmpresas(id);
    }
}