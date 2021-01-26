const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuario.controller");

//rotas
router.get("/usuarios/:empresa_id", controller.getUsuarios);
router.post("/usuarios/:empresa_id",controller.postUsuarios);


module.exports = router;