import React from "react";
import HelperForm from "../../helper/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { NavLink } from "react-bootstrap";

const MySwal = withReactContent(Swal2);

const LoginDash = () => {
  const { form, cambiar } = HelperForm({});
  const LoginDashboard = async (e) => {
    e.preventDefault();
    let formulario = form;
    const request = await fetch("http://localhost:3600/empleado/login", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: { "Content-Type": "application/json" },
    });
    const data = await request.json();
    console.log(data);
    if (data.id == 200) {
      let token = data.token;
      let mensaje = data.mensaje;
      localStorage.setItem("token2", token);
      localStorage.setItem("user2", JSON.stringify(data.usuario));
      MySwal.fire({
        title: <strong> {"Felicidades"} </strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      const idUser = document.querySelector("#idEmpleado");
      const pass = document.querySelector("#pass");
      idUser.value = "";
      pass.value = "";

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
            <form
              className="login100-form validate-form"
              onSubmit={LoginDashboard}
            >
              <span className="login100-form-title"> Inicio Empleados </span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="number"
                  name="idEmpleado"
                  id="idEmpleado"
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
                data-validate="Password is required"
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

              <div className="container-login100-form-btn ">
                <button className="login100-form-btn btn-gradient">
                  Ingresar
                </button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1"> Eres cliente? </span>

                <a className="txt2" href="/">
                  {" "}
                  Ingresa aquí{" "}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDash;
