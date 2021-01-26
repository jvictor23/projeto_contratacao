const express = require('express');
const bodyParser = require('body-parser');

//importacao das rotas
const registroAutenticacaoRoute = require('./routes/registroAutenticacao.route');
const empresasRoute = require("../app/routes/empresa.route");
const sedesRoute = require("../app/routes/sedes.route");
const usuariosRoute = require("../app/routes/usuario.route")

/*Ŕecebendo a instancia da aplicaçao express*/
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// rotas
app.use(registroAutenticacaoRoute);
app.use(empresasRoute);
app.use(sedesRoute);
app.use(usuariosRoute)


/*Aplicacao rodando e ouvindo na porta 3000*/
app.listen(3000);