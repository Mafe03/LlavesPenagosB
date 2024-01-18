const express = require("express");
const router = express.Router();
const DetalleController = require("../controller/Detalle");
const auth = require("../controller/auth");

router.post("/detalle/agregar", auth, DetalleController.AgregarDetalle);

router.get("/detalle/listar", auth, DetalleController.ListarDetalle);

module.exports = router;