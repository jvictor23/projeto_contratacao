const express = require('express');
const router = express.Router();
const registroAutenticacao = require('../controllers/registroAutenticaco.controller')

//controllers
//rota de registro
router.post("/registro", registroAutenticacao.registro);
router.post("/login",);


module.exports = router