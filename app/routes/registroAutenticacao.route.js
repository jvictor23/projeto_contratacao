const express = require('express');
const router = express.Router();
const registroAutenticacao = require('../controllers/registroAutenticaco.controller')

//controllers
//rota de registro
router.post("/registro", registroAutenticacao.registro);


module.exports = router