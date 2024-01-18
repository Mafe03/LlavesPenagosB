module.exports = (sequelize, type) => {
  return sequelize.define(
    "categorias",
    {
      idCategoria: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descripCategoria: {
        type: type.STRING(256),
      },
    },
    {
      timestamps: false,
      tableName: "categorias",
    }
  );
};
