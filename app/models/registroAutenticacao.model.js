const repository = require("../repositories/registroAutenticacao.repository");
const bcrypt = require("bcrypt");
const authConfig = require("../helpers/auth.json");
const jwt = require("jsonwebtoken")
module.exports = {
    registro: async(nome,email,password)=>{
        //variavel regex
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        //verificando se nome não é null, undefined ou ''
            if(nome === null || nome === undefined || nome === ''){
            
                throw new Error("O nome está vazio!")
            }

            //verificando se email não é null, undefined ou ''
            if(email === null || email === undefined || email === ''){
                throw new Error("O email está vazio");
                
            }

            //verificando se email é valido com o regex
            if(!reg.test(email)){
                console.log("O email é inválido")
                throw new Error("O email é inválido")
            }

            const existsUser = await repository.findUserByEmail(email);
            if(existsUser){
                throw new Error("Email já existe");
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
            const id = usuario.id;
            const data = {id,nome,email}
            return data;

    },

    login: async(email,password)=>{
          //verificando se email não é null, undefined ou ''
          if(email === null || email === undefined || email === ''){
            throw new Error("O email está vazio");
            
        }

        //verificando se password não é null, undefined ou ''
        if(password === null || password === undefined || password === ''){
            throw new Error("A senha está vazia!")
        }

        //Buscando usuario pelo email
        const usuario = await repository.findUserByEmail(email);

        //verificando se usuario existe
        if(usuario.email == null){
            throw new Error("Usuário nao existe");
        }

        //verificando se a senha que usuario digitou é a mesma que está no banco de dados
        if(!await bcrypt.compare(password,usuario.password)){
            throw new Error("Senha incorreta")
        }

        //gerando token de autenticacao
       const token = jwt.sign({id: usuario.id}, authConfig.secret,{
            expiresIn: 86400
        })

        //buscando token registrado
        const tokenRegistrado = await repository.findTokenById(usuario.id);

        //se token existe atualiza se nao registra
        if(tokenRegistrado != null){
            await repository.updateToken(token, usuario.id);
        }else{
            await repository.registerToken(token, usuario.id);
        }

        return token;
    },

    logout: async(token)=>{
        //verificando se token não é null, undefined ou ''
        if(token === null || token === undefined || token === ''){
            throw new Error("O token está vazio");
        }

        await repository.deleteToken(token);
    }
}