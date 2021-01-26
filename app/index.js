const express = require('express');
const bodyParser = require('body-parser');

//importacao das rotas
const registroAutenticacao = require('./routes/registroAutenticacao.route');
const empresas=require("../app/routes/empresa.route");
const sedes = require("../app/routes/sedes.route");

/*Ŕecebendo a instancia da aplicaçao express*/
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// rotas
app.use(registroAutenticacao);
app.use(empresas);
app.use(sedes);


/*Aplicacao rodando e ouvindo na porta 3000*/
app.listen(3000);