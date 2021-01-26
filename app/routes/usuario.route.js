const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuario.controller");

router.get("/usuarios/:empresa_id", controller.getUsuarios);

module.exports = router;