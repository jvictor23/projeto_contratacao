const express = require('express');
const router = express.Router();
const registroAutenticacao = require('../controllers/registroAutenticaco.controller')

//controllers
//rota de registro e autenticacao
router.post("/registro", registroAutenticacao.registro);
router.post("/login", registroAutenticacao.login);
router.post("/logout", registroAutenticacao.logout);


module.exports = router