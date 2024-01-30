const express = require("express");
const router = express.Router();
const DetalleController = require("../controller/Detalle");
const auth = require("../controller/auth");

router.post("/detalle/agregar", auth, DetalleController.AgregarDetalle);

router.get("/detalle/listar", auth, DetalleController.ListarDetalle);

router.get(
  "/detalle/listarDetEnca/:id",
  auth,
  DetalleController.ListarDetalleEncabezado
);

module.exports = router;
