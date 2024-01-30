const express = require("express");
const router = express.Router();
const ProductosController = require("../controller/Productos");
const { Producto } = require("../models/Conexion");
const multer = require("multer");
const auth = require("../controller/auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    let imagePath = Date.now() + "-" + file.originalname;
    cb(null, imagePath);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // Tamaño máximo: 50 MB
  },
});

router.get("/productos/listar/:pagina?", ProductosController.ListarProductos);

router.get("/productos/listarI", ProductosController.ListarProductosI);

router.get(
  "/productos/buscarProducto/:nombre",
  ProductosController.BuscarProductos
);

router.get(
  "/productos/listarCategoria/:id",
  auth,
  ProductosController.ListarProductosCate
);

router.post(
  "/productos/agregar",
  upload.single("imagen"),
  auth,
  async (req, res) => {
    try {
      console.table(req.body);
      console.log("REQ FILE 2", req.file);
      const originalname = req.file.filename;

      const imagePath = `http://localhost:3600/${originalname}`;
      const Product = await Producto.create({
        ...req.body,
        imagen: imagePath,
      });
      res.send({ id: 200, mensaje: "Producto agregado" });
    } catch (error) {
      res.send({ id: 400, mensaje: error.message });
    }
  }
);
/**
 * Ruta con Funcion para Editar datos en la Base de Datos y Actualizar la Ruta de la Imagen
 */
router.put(
  "/productos/editar/:id",
  upload.single("imagen"),
  auth,
  async (req, res) => {
    try {
      const originalname = req.file.filename;
      const imagePath = `http://localhost:3600/${originalname}`;
      const Product = await Producto.update(
        { ...req.body, imagen: imagePath },
        {
          where: { idProducto: req.params.id },
        }
      );
      res.send({ id: 200, mensaje: "Producto editado " });
    } catch (error) {
      res.send({ id: 400, mensaje: error.message });
    }
  }
);

router.delete(
  "/productos/eliminar/:id",
  auth,
  ProductosController.EliminarProductos
);

router.get(
  "/productos/listarUno/:id",
  auth,
  ProductosController.ListarProductoId
);

router.post(
  "/productos/verDisponibilidad/:id",
  auth,
  ProductosController.VerDisponibilidad
);

module.exports = router;
