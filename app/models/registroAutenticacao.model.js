const repository = require("../repositories/registroAutenticacao.repository");

module.exports = {
    registro: async(nome,email,password)=>{
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if(nome === null || nome === undefined || nome === ''){
                console.log("O nome está vazio!")
                throw new Error("O nome está vazio!")
            }

            if(email === null || email === undefined || nome === ''){
                console.log("O email está vazio")
                throw new Error("O email está vazio");7
                
            }

            if(!reg.test(email)){
                console.log("O email é inválido")
                throw new Error("O email é inválido")
            }

            if(password === null || password === undefined || password === ''){
                console.log("A senha está vazia!")
                throw new Error("A senha está vazia!")
            }

            const usuario = await repository.registro(nome, email, password);

            usuario.password = undefined;

            return usuario;

    }
}