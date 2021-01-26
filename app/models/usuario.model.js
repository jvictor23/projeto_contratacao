const repository = require("../repositories/usuario.repository");
const bcrypt = require("bcrypt");
module.exports={
    getUsuarios: async(empresa_id, token)=>{
        //verificando se empresa_id não é null, undefined ou ''
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        const {usuario_id} = await repository.findUserByToken(token);

        //enviando e rebendo dados do repository
        const usuario = await repository.getUsuarios(empresa_id, usuario_id);

        return usuario;
    },

    postUsuarios: async(nome,email,password,empresa_id,token)=>{
        //regex para validacao de email
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        //verificando se nome não é null, undefined ou ''
        if(nome === null || nome === undefined || nome === ''){
            throw new Error("nome está vazio");
        }

          //verificando se email não é null, undefined ou ''
          if(email === null || email === undefined || email === ''){
            throw new Error("email está vazio");
        }

        const existsUser = await repository.findUserByEmail(email);
            if(existsUser){
                throw new Error("Email já existe");
            }

         //verificando se email é valido com o regex
         if(!reg.test(email)){
            console.log("O email é inválido")
            throw new Error("O email é inválido")
        }

        //verificando se password não é null, undefined ou ''
        if(password === null || password === undefined || password === ''){
            throw new Error("password está vazio");
        }

        //criando hash com password
        const hash = await bcrypt.hash(password,10);

        password = hash;

        //verificando se empresa_id não é null, undefined ou ''
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        const {usuario_id} = await repository.findUserByToken(token);

        //enviando e recebendo dados do repository
        const {id} = repository.postUsuarios(nome,email,password,empresa_id,usuario_id);

        //adicionando id aos dados ja existente
        const data={id,nome,email,empresa_id,usuario_id};

        return data;
    },

    putUsuarios: async(nome,email,password, empresa_id, usuario_id)=>{
         //regex para validacao de email
         const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

         //verificando se nome não é null, undefined ou ''
         if(nome === null || nome === undefined || nome === ''){
             throw new Error("nome está vazio");
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
 
         //verificando se password não é null, undefined ou ''
         if(password === null || password === undefined || password === ''){
             throw new Error("password está vazio");
         }
 
         //verificando se empresa_id não é null, undefined ou ''
         if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
             throw new Error("empresa_id está vazio");
         }

         //enviando dados ao repository
         await repository.putUsuarios(nome,email,password,empresa_id,usuario_id);

         //criando objeto de dados ja existente
         const data = {nome,email,password,empresa_id,usuario_id};

         return data;
    },

    deleteUsuarios: async(empresa_id, usuario_id)=>{
        //verificando se empresa_id não é null, undefined ou ''
        if(empresa_id === null || empresa_id === undefined || empresa_id === ''){
            throw new Error("empresa_id está vazio");
        }

        //verificando se usuario_id não é null, undefined ou ''
        if(usuario_id === null || usuario_id === undefined || usuario_id === ''){
            throw new Error("usuario_id está vazio");
        }

        //enviando dados ao repository
        await repository.deleteUsuarios(empresa_id, usuario_id);
    }
}