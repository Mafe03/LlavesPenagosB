const { Sequelize } = require("sequelize");

const Categorias = require("./Categorias");
const Productos = require("./Productos");
const MetodoPago = require("./MetodoPago");
const Usuarios = require("./Usuarios");
const Encabezado = require("./Encabezado");
const Detalle = require("./Detalle");
const Empleados = require("./Empleados");

const sequelize = new Sequelize("bdllavespenagos", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Categoria = Categorias(sequelize, Sequelize);
const MetodoP = MetodoPago(sequelize, Sequelize);
const Usuario = Usuarios(sequelize, Sequelize);
const Producto = Productos(sequelize, Sequelize);
const Enca = Encabezado(sequelize, Sequelize);
const Deta = Detalle(sequelize, Sequelize);
const Empleado = Empleados(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Conexión exitosa");
});

module.exports = {
  sequelize,
  Categoria,
  MetodoP,
  Usuario,
  Producto,
  Enca,
  Deta,
  Empleado,
};
