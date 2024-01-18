const express = require("express");
const router = express.Router();
const UserController = require("../controller/Usuario");
const auth = require("../controller/auth");

router.post("/usuarios/agregar", UserController.AgregarUsuario);

router.put("/usuarios/editar/:id", auth, UserController.EditarUsuario);

router.delete("/usuarios/eliminar/:id", auth, UserController.EliminarUsuario);

router.get("/usuarios/listar", auth, UserController.ListarTodosUsuarios);

router.get("/usuarios/listarUno/:id", auth, UserController.ListarUnUsuario);

router.post("/usuarios/login", UserController.Login);

module.exports = router;
