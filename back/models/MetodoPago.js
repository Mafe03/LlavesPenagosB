module.exports = (sequelize, type) => {
  return sequelize.define(
    "metodopago",
    {
      idMetodo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descripcion: {
        type: type.STRING(250),
      },
    },
    {
      timestamps: false,
      tableName: "metodopago",
    }
  );
};
