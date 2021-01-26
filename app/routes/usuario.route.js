const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuario.controller");

//rotas
router.get("/usuarios/:empresa_id", controller.getUsuarios);
router.post("/usuarios/:empresa_id",controller.postUsuarios);
router.put("/usuarios/:empresa_id/:usuario_id", controller.putUsuarios);


module.exports = router;