const express = require("express");
const router = express.Router();
const CategoriaController = require("../controller/Categoria");
const auth = require("../controller/auth");

router.post("/categorias/agregar", auth, CategoriaController.AgregarCategoria);

router.put("/categorias/editar/:id", auth, CategoriaController.EditarCategoria);

router.delete(
  "/categorias/eliminar/:id",
  auth,
  CategoriaController.EliminarCategoria
);

router.get(
  "/categorias/listar",
  auth,
  CategoriaController.ListarTodasCategorias
);

router.get(
  "/categorias/listarUno/:id",
  auth,
  CategoriaController.ListarUnaCategoria
);

module.exports = router;
