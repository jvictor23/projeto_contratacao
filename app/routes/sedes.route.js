const express = require('express');
const router = express.Router();
const controller = require("../controllers/sedes.controller");

//rotas
router.get("/sedes/:empresa_id",controller.getSedes);
router.post("/sedes/:empresa_id", controller.postSedes);
router.put("/sedes/:empresa_id/:sede_id", controller.putSedes);
router.delete("/sedes/:empresa_id/:sede_id", controller.deleteSedes);

module.exports = router;