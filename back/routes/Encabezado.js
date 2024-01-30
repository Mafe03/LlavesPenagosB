const express = require("express");
const router = express.Router();
const EncabezadoContoller = require("../controller/Encabezado");
const auth = require("../controller/auth");

router.post("/encabezado/agregar", auth, EncabezadoContoller.AgregarEncabezado);

router.put(
  "/encabezado/editarEstado/:id",
  auth,
  EncabezadoContoller.EditarEstadoEnca
);

router.get(
  "/encabezado/listarUno/:id",
  auth,
  EncabezadoContoller.ListarUnEncabezado
);

router.get(
  "/encabezado/listar",
  auth,
  EncabezadoContoller.ListarTodosEncabezados
);

router.get(
  "/encabezado/listarEncaUser/:id",
  auth,
  EncabezadoContoller.ListarEncabezadosUser
);

module.exports = router;
