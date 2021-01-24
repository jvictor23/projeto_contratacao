const express = require('express');
const bodyParser = require('body-parser');
const registroAutenticacao = require('./routes/registroAutenticacao.route')

/*Ŕecebendo a instancia da aplicaçao express*/
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*Aplicacao rodando e ouvindo na porta 3000*/

// rotas
app.use(registroAutenticacao)



app.listen(3000);