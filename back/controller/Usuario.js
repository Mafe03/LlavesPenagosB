const { Usuario, sequelize } = require("../models/Conexion");
const { QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AgregarUsuario = async (req, res) => {
  try {
    let datos = req.body;
    let consulta = await Usuario.findOne({
      where: { idUsuario: req.body.idUsuario },
    });
    if (consulta == null) {
      let password = await bcrypt.hash(datos.pass, 10);
      const Metodos = await Usuario.create({
        ...req.body,
        pass: password,
      });
      res.send({
        id: 200,
        mensaje: "Usuario agregado exitosamente",
      });
    } else {
      res.send({ id: 400, mensaje: "Usuario ya existe" });
    }
  } catch (error) {
    res.send({ id: 400, mensaje: error.message });
  }
};

const EditarUsuario = async (req, res) => {
  try {
    let datos = req.body;
    let password = await bcrypt.hash(datos.pass, 10);
    const Users = await Usuario.update(
      { ...req.body, pass: password },
      {
        where: { idUsuario: req.params.id },
      }
    );
    res.send({ id: 200, mensaje: "Usuario editado exitosamente" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const EliminarUsuario = async (req, res) => {
  try {
    const Users = await Usuario.destroy({
      where: { idUsuario: req.params.id },
    });
    res.send({ id: 200, mensaje: "El usuario ha sido eliminado" });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const ListarTodosUsuarios = async (req, res) => {
  try {
    const Users = await sequelize.query(
      "SELECT usuarios.idUsuario, usuarios.nombre, usuarios.apellido, usuarios.telefono, usuarios.direccion, usuarios.email FROM usuarios",
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Users });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const ListarUnUsuario = async (req, res) => {
  try {
    const Users = await sequelize.query(
      `SELECT usuarios.idUsuario, usuarios.nombre, usuarios.apellido, usuarios.telefono, usuarios.direccion, usuarios.email, usuarios.pass FROM usuarios WHERE idUsuario=${req.params.id}`,
      { type: QueryTypes.SELECT }
    );
    res.send({ id: 200, mensaje: Users });
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

const Login = async (req, res) => {
  try {
    let data = req.body;

    if (!data.idUsuario || !data.pass) {
      res.send({ id: 400, mensaje: "Correo / Contraseña incorrecta" });
    }

    let dataUsers = await sequelize.query(
      "SELECT * FROM usuarios WHERE idUsuario=" + data.idUsuario,
      { type: QueryTypes.SELECT }
    );
    if (dataUsers[0] == null) {
      res.send({ id: 400, mensaje: "Usuario no existe" });
    } else {
      let password = bcrypt.compareSync(data.pass, dataUsers[0].pass);
      if (!password) {
        res.send({ id: 400, mensaje: "Contraseña incorrecta" });
      } else {
        const token = jwt.sign(
          {
            idUsuario: dataUsers[0].idUsuario,
            nombre: dataUsers[0].nombre,
            apellido: dataUsers[0].apellido,
            email: dataUsers[0].email,
          },
          "Mafe&Angie",
          {
            expiresIn: "1d",
          }
        );
        return res.status(200).send({
          id: 200,
          mensaje: "Bienvenido",
          usuario: {
            idUsuario: dataUsers[0].idUsuario,
            nombre: dataUsers[0].nombre,
            apellido: dataUsers[0].apellido,
            email: dataUsers[0].email,
          },
          token: token,
        });
      }
    }
  } catch (error) {
    res.send({ id: 400, mensaje: error.messages });
  }
};

module.exports = {
  AgregarUsuario,
  EditarUsuario,
  EliminarUsuario,
  ListarTodosUsuarios,
  ListarUnUsuario,
  Login,
};
