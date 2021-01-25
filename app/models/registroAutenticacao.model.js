const repository = require("../repositories/registroAutenticacao.repository");
const bcrypt = require("bcrypt");
module.exports = {
    registro: async(nome,email,password)=>{
        //variavel regex
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        //verificando se nome não é null, undefined ou ''
            if(nome === null || nome === undefined || nome === ''){
            
                throw new Error("O nome está vazio!")
            }

            //verificando se email não é null, undefined ou ''
            if(email === null || email === undefined || nome === ''){
                throw new Error("O email está vazio");7
                
            }

            //verificando se email é valido com o regex
            if(!reg.test(email)){
                console.log("O email é inválido")
                throw new Error("O email é inválido")
            }

            //verificando se password não é null, undefined ou ''
            if(password === null || password === undefined || password === ''){
                throw new Error("A senha está vazia!")
            }

            //criando hash com password
            const hash = await bcrypt.hash(password,10);

            password = hash;

            //enviando dados ao repository
            const usuario = await repository.registro(nome, email, password);

            return usuario;

    }
}