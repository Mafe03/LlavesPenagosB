const express = require("express");
const cors = require("cors");
const path = require("path");

const RutaUsuarios = require("./routes/Usuarios");
const RutaEmpleados = require("./routes/Empleados");
const RutaCategorias = require("./routes/Categorias");
const RutaProductos = require("./routes/Productos");
const RutaMetodoPago = require("./routes/MetodoPago");
const RutaEncabezado = require("./routes/Encabezado");
const RutaDetalle = require("./routes/Detalle");

const app = express();
require("./models/Conexion");
const puerto = 3600;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "upload")));

app.use("/", RutaUsuarios);
app.use("/", RutaEmpleados);
app.use("/", RutaCategorias);
app.use("/", RutaProductos);
app.use("/", RutaMetodoPago);
app.use("/", RutaEncabezado);
app.use("/", RutaDetalle);

app.listen(puerto, () => {
  console.log("Aplicacion ejecutandose en : http://localhost:3600");
});
