const express = require('express');
const bodyParser = require('body-parser');

/*Ŕecebendo a instancia da aplicaçao express*/
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*Aplicacao rodando e ouvindo na porta 3000*/
app.listen(3000);