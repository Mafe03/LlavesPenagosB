const { Producto, sequelize } = require("../models/Conexion");
const { QueryTypes, Sequelize } = require("sequelize");

const ListarProductos = async (req, res) => {
  try {
    let pageNumber = parseInt(req.params.pagina);
    let pageSize = 3;
    const offset = (pageNumber - 1) * pageSize;
    const limit = pageSize;
    //CONSULTA
    const query = `
    SELECT productos.idProducto, productos.nombre, productos.precio, productos.cantidad, productos.descripcion, categorias.descripCategoria, productos.imagen  FROM productos JOIN categorias ON productos.idCategoria = categorias.idCategoria LIMIT :limitValue OFFSET :offsetValue
  `;
    //DATOS DE PAGINACION
    const replacements = {
      limitValue: limit,
      offsetValue: offset,
    };
    console.log("REPLACEMENTS", replacements);
    console.table(replacements);
    const results = await sequelize.query(query, {
      replacements: replacements,
      type: Sequelize.QueryTypes.SELECT,
    });
    res.send({ id: 200, mensaje: results });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarProductosI = async (req, res) => {
  try {
    const Productos = await sequelize.query(
      `SELECT productos.idProducto, productos.nombre, productos.precio, productos.cantidad, productos.descripcion, categorias.descripCategoria, productos.imagen  FROM productos JOIN categorias ON productos.idCategoria = categorias.idCategoria`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Productos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const BuscarProductos = async (req, res) => {
  try {
    let nombre = req.params.nombre;
    const Productos = await sequelize.query(
      `SELECT productos.idProducto, productos.nombre, productos.precio, productos.cantidad, productos.descripcion, categorias.descripCategoria, productos.imagen FROM productos JOIN categorias ON productos.idCategoria = categorias.idCategoria WHERE productos.nombre LIKE '%${nombre}%'`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Productos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarProductosCate = async (req, res) => {
  try {
    let idCate = req.params.id;
    const ProductosCate = await sequelize.query(
      `SELECT productos.idProducto, productos.nombre, productos.precio, productos.cantidad, productos.descripcion, categorias.descripCategoria, productos.imagen FROM productos JOIN categorias ON productos.idCategoria = categorias.idCategoria AND categorias.idCategoria=${idCate}`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: ProductosCate });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EliminarProductos = async (req, res) => {
  try {
    const Productos = await Producto.destroy({
      where: { idProducto: req.params.id },
    });
    res.send({ id: 200, mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarProductoId = async (req, res) => {
  try {
    let idProducto = req.params.id;
    const ProductosCate = await sequelize.query(
      `SELECT productos.idProducto, productos.nombre, productos.precio, productos.cantidad, productos.descripcion, categorias.descripCategoria, productos.imagen FROM productos JOIN categorias ON productos.idCategoria = categorias.idCategoria AND productos.idProducto=${idProducto}`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: ProductosCate });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const ListarTodosProductos = async (req, res) => {
  try {
    let pageNumber = parseInt(req.params.pagina);
    let pageSize = 3;
    const offset = (pageNumber - 1) * pageSize;
    const limit = pageSize;

    const Productos = await Producto.findAll({ offset: offset, limit: limit });
    res.send({ id: 200, mensaje: Productos });
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const VerDisponibilidad = async (req, res) => {
  try {
    let idProducto = req.params.id;
    let cantidadCliente = req.body.cantidad;
    const disponibilidad = await sequelize.query(
      `SELECT productos.cantidad FROM productos WHERE productos.idProducto = ${idProducto}`,
      { type: QueryTypes.SELECT }
    );
    console.log(disponibilidad[0].cantidad);
    let cantidadFinal = disponibilidad[0].cantidad - cantidadCliente;
    if (cantidadFinal < 0) {
      res.send({ id: 400, mensaje: false, cantidadFinal: cantidadFinal });
    } else {
      res.send({ id: 200, mensaje: true, cantidadFinal: cantidadFinal });
    }
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

module.exports = {
  ListarTodosProductos,
  ListarProductos,
  ListarProductosI,
  ListarProductosCate,
  EliminarProductos,
  ListarProductoId,
  VerDisponibilidad,
  BuscarProductos,
};
