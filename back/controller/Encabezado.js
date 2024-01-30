const { Enca, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");

const AgregarEncabezado = async (req, res) => {
  try {
    const Encabezado = await Enca.create(req.body);
    res.send({ id: 200, mensaje: "Encabezado agregado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EditarEstadoEnca = async (req, res) => {
  try {
    const Encabezado = await Enca.update(
      { idEstado: 1 },
      {
        where: { idEncabezado: req.params.id },
      }
    );
    res.send({ id: 200, mensaje: "Estado editado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarTodosEncabezados = async (req, res) => {
  try {
    const Encabezado = await sequelize.query(
      "SELECT encabezado.idEncabezado, encabezado.fechaHora, encabezado.total, encabezado.idEstado, usuarios.nombre, usuarios.idUsuario,usuarios.apellido, metodopago.descripcion FROM encabezado JOIN usuarios ON encabezado.idUsuario = usuarios.idUsuario JOIN metodopago ON encabezado.idMetodo = metodopago.idMetodo ORDER BY encabezado.idEncabezado DESC",
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send({ id: 200, mensaje: Encabezado });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarUnEncabezado = async (req, res) => {
  try {
    let id = req.params.id;
    const Encabezado = await sequelize.query(
      `SELECT encabezado.idEncabezado, encabezado.fechaHora, encabezado.total, estado.descripcion, usuarios.nombre, usuarios.apellido, metodopago.descripcion FROM encabezado JOIN estado ON encabezado.idEstado = estado.idEstado JOIN usuarios ON encabezado.idUsuario = usuarios.idUsuario JOIN metodopago ON encabezado.idMetodo = metodopago.idMetodo WHERE encabezado.idEncabezado=${id}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send({ id: 200, mensaje: Encabezado });
  } catch (error) {}
};

const ListarEncabezadosUser = async (req, res) => {
  try {
    const Encabezados = await sequelize.query(
      `SELECT encabezado.idEncabezado, encabezado.fechaHora, encabezado.total, encabezado.idEstado,  metodopago.descripcion  FROM encabezado JOIN usuarios ON encabezado.idUsuario = usuarios.idUsuario JOIN metodopago ON encabezado.idMetodo = metodopago.idMetodo WHERE encabezado.idUsuario=${req.params.id} ORDER BY encabezado.idEncabezado DESC`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.send({ id: 200, mensaje: Encabezados });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  AgregarEncabezado,
  EditarEstadoEnca,
  ListarTodosEncabezados,
  ListarUnEncabezado,
  ListarEncabezadosUser,
};
