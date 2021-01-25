const express = require('express');
const router = express.Router();
const controller = require("../controllers/empresas.controller");


//controllers
router.get("/empresas", controller.getEmpresas);
router.post("/empresas", controller.postEmpresas);
router.put("/empresas/:id", controller.putEmpresas);
router.delete(/empresas/id, controller.deleteEmpresas);

module.exports = router;