const { MetodoP } = require("../models/Conexion");

const AgregarMetodPago = async (req, res) => {
  try {
    const Metodos = await MetodoP.create(req.body);
    res.send({ id: 200, mensaje: "Metodo de pago agregado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EditarMetodoPago = async (req, res) => {
  try {
    const Metodos = await MetodoP.update(req.body, {
      where: { idMetodo: req.params.id },
    });
    res.send({ id: 200, mensaje: "Metodo de pago editado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EliminarMetodoPago = async (req, res) => {
  try {
    const Metodos = await MetodoP.destroy({
      where: { idMetodo: req.params.id },
    });
    res.send({ id: 200, mensaje: "Metodo de pago eliminado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarTOdosMetodos = async (req, res) => {
  try {
    const Metodos = await MetodoP.findAll();
    res.send({ id: 200, mensaje: Metodos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarUnMetodoP = async (req, res) => {
  try {
    const Metodos = await MetodoP.findOne({
      where: { idMetodo: req.params.id },
    });
    res.send({ id: 200, mensaje: Metodos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  AgregarMetodPago,
  EditarMetodoPago,
  EliminarMetodoPago,
  ListarTOdosMetodos,
  ListarUnMetodoP,
};
