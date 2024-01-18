module.exports = (sequelize, type) => {
  return sequelize.define(
    "empleados",
    {
      idEmpleado: {
        type: type.INTEGER,
        primaryKey: true,
      },
      nombre: {
        type: type.STRING(250),
      },
      apellido: {
        type: type.STRING(250),
      },
      telefono: {
        type: type.STRING(250),
      },
      direccion: {
        type: type.STRING(250),
      },
      email: {
        type: type.STRING(250),
      },
      pass: {
        type: type.STRING(250),
      },
    },
    {
      timestamps: false,
      tableName: "empleados",
    }
  );
};
