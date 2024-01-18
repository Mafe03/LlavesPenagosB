const express = require("express");
const router = express.Router();
const MetodoPController = require("../controller/MetdoPago");
const auth = require("../controller/auth");

router.post("/metodop/agregar", auth, MetodoPController.AgregarMetodPago);

router.put("/metodop/editar/:id", auth, MetodoPController.EditarMetodoPago);

router.delete(
  "/metodop/eliminar/:id",
  auth,
  MetodoPController.EliminarMetodoPago
);

router.get("/metodop/listarUno/:id", auth, MetodoPController.ListarUnMetodoP);

router.get("/metodop/listar", auth, MetodoPController.ListarTOdosMetodos);

module.exports = router;
