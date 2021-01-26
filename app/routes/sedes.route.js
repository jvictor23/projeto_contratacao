const express = require('express');
const router = express.Router();
const controller = require("../controllers/sedes.controller");

//rotas
router.get("/sedes/:empresa_id",controller.getSedes);

module.exports = router;