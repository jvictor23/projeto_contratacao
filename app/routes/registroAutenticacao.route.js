const express = require('express');
const router = express.Router();
const registroAutenticacao = require('../controllers/registroAutenticaco.controller')

//controller
router.get("/", registroAutenticacao.get);


module.exports = router