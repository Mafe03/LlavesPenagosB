const express = require("express");
const router = express.Router();
const EmpleadoController = require("../controller/Empleado");
const auth = require("../controller/auth");

router.post("/empleado/agregar", EmpleadoController.AgregarEmpleado);

router.put("/empleado/editar/:id", auth, EmpleadoController.EditarEmpleado);

router.delete(
  "/empleado/eliminar/:id",
  auth,
  EmpleadoController.EliminarEmpleado
);

router.get("/empleado/listar", auth, EmpleadoController.ListarTodosEmpleados);

router.get(
  "/empleado/listarUno/:id",
  auth,
  EmpleadoController.ListarUnEmpleado
);

router.post("/empleado/login", EmpleadoController.Login);

module.exports = router;
