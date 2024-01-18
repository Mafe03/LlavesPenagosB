const { Categoria } = require("../models/Conexion");

const AgregarCategoria = async (req, res) => {
  try {
    const Categorias = await Categoria.create(req.body);
    res.send({ id: 200, mensaje: "Categoria agregada correctamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EditarCategoria = async (req, res) => {
  try {
    const Categorias = await Categoria.update(req.body, {
      where: { idCategoria: req.params.id },
    });
    res.send({ id: 200, mensaje: "Categoria editada correctamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EliminarCategoria = async (req, res) => {
  try {
    const Categorias = await Categoria.destroy({
      where: { idCategoria: req.params.id },
    });
    res.send({ id: 200, mensaje: "Categoria eliminada correctamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarTodasCategorias = async (req, res) => {
  try {
    const Categorias = await Categoria.findAll();
    res.send({ id: 200, mensaje: Categorias });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarUnaCategoria = async (req, res) => {
  try {
    const Categorias = await Categoria.findOne({
      where: { idCategoria: req.params.id },
    });
    res.send({ id: 200, mensaje: Categorias });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  AgregarCategoria,
  EditarCategoria,
  EliminarCategoria,
  ListarTodasCategorias,
  ListarUnaCategoria,
};
