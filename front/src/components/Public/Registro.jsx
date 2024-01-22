import React, { useState } from "react";
import HelperForm from "../../helper/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { NavLink } from "react-bootstrap";

const MySwal = withReactContent(Swal2);

const Registro = () => {
  const { form, cambiar } = HelperForm({});
  const Registrar = async (e) => {
    e.preventDefault();
    let formulario = form;
    const request = await fetch("http://localhost:3600/usuarios/agregar", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: { "Content-Type": "application/json" },
    });
    const data = await request.json();
    console.log(data);
    if (data.id == 200) {
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {"Felicidades"} </strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      setTimeout(() => {
        window.location = "./";
      }, 500);
    } else {
      let mensaje = data.mensaje;
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
    }
  };
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={Registrar}>
              <span className="login100-form-title"> Registro </span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Cedula requerida: 111223556"
              >
                <input
                  className="input100"
                  type="number"
                  name="idUsuario"
                  id="idUsuario"
                  placeholder="Cedula"
                  onChange={cambiar}
                />

                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Nombre/s requerido"
              >
                <input
                  className="input100"
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Apellido/s requeridos"
              >
                <input
                  className="input100"
                  type="text"
                  name="apellido"
                  id="apellido"
                  placeholder="Apellido"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Telefono requerido"
              >
                <input
                  className="input100"
                  type="number"
                  name="telefono"
                  id="telefono"
                  placeholder="Telefono"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Dirección requerida"
              >
                <input
                  className="input100"
                  type="text"
                  name="direccion"
                  id="direccion"
                  placeholder="Direccion"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-home" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Correo requerido"
              >
                <input
                  className="input100"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Contraseña requerida"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  onChange={cambiar}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn btn-gradient">
                  Registrarse
                </button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1"> Estás registrado? </span>

                <a className="txt2" href="/">
                  {" "}
                  Inicio{" "}
                </a>
              </div>{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
