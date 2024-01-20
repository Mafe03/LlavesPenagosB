const Categoria = require("./Categorias");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "productos",
    {
      idProducto: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: type.STRING(250),
      },
      precio: {
        type: type.INTEGER,
      },
      cantidad: {
        type: type.INTEGER,
      },
      descripcion: {
        type: type.STRING(250),
      },
      idCategoria: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "categorias",
          key: "idCategoria",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      imagen: {
        type: type.STRING(256),
      },
    },
    {
      timestamps: false,
      tableName: "productos",
    }
  );
};
