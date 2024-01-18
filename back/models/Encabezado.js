const Usuario = require("./Usuarios");
const MetodoPago = require("./MetodoPago");

module.exports = (sequelize, type) => {
  return sequelize.define(
    "encabezado",
    {
      idEncabezado: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fechaHora: {
        type: type.DATE,
      },
      total: {
        type: type.INTEGER,
      },
      idEstado: {
        type: type.INTEGER,
      },
      idUsuario: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "usuarios",
          key: "idUsuario",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      idMetodo: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: "metodopago",
          key: "idMetodo",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      timestamps: false,
      tableName: "encabezado",
    }
  );
};
