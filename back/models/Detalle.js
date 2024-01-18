const Producto = require("./Productos");
const Encabezado = require("./Encabezado");

module.exports = (sequelize, type) => {
  return sequelize.define(
    "detalle",
    {
      idDetalle: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cantidad: {
        type: type.INTEGER,
      },
      totalProd: {
        type: type.INTEGER,
      },
      idProducto: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "productos",
          key: "idProducto",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      idEncabezado: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "encabezado",
          key: "idEncabezado",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      timestamps: false,
      tableName: "detalle",
    }
  );
};
