import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditarUser from "./EditarUser";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import HelperForm from "../../helper/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(Swal2);

const Inicio = (props) => {
  const [datos, Setdatos] = useState([]);
  const [Editar, setEditar] = useState(null);
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token2");

  const AgregarEmple = async (e) => {
    const cedula = document.querySelector("#idEmpleado");
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const celular = document.querySelector("#telefono");
    const direccion = document.querySelector("#direccion");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");

    e.preventDefault();

    let formulario = form;
    const request = await fetch("http://localhost:3600/empleado/agregar", {
      method: "POST",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    const data = await request.json();
    if (data.id == 200) {
      let mensaje = data.mensaje;
      Swal.fire({
        title: <strong> {"Agregado"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      cedula.value = "";
      nombre.value = "";
      apellido.value = "";
      celular.value = "";
      direccion.value = "";
      email.value = "";
      pass.value = "";
    } else {
      let mensaje = data.mensaje;
      Swal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
      cedula.value = "";
      nombre.value = "";
      apellido.value = "";
      celular.value = "";
      direccion.value = "";
      email.value = "";
      pass.value = "";
    }
  };

  const ListarEmple = async () => {
    const request = await fetch("http://localhost:3600/empleado/listar", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    console.log(data);
    Setdatos(data.mensaje);
  };

  useEffect(() => {
    ListarEmple();
  }, []);

  const Eliminar = (id, nombre) => {
    Swal.fire({
      title: `¿Desea eliminar el empleado ${nombre} ?`,
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:3600/empleado/eliminar/${id}`, {
          method: "DELETE", // Método de solicitud (puede ser GET, POST, etc.)
          headers: {
            Authorization: `${token}`, // Incluye el token JWT en el encabezado Authorization
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.id == 200) {
              Swal.fire({
                title: <strong>Eliminado</strong>,
                html: <i>Eliminado exitosamente</i>,
                icon: "success",
              });
              Listar();
            } else {
              MySwal.fire({
                title: <strong>ERROR</strong>,
                html: <i>{data.mensaje}</i>,
                icon: "error",
              });
            }
          });
      }
    });
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
  };
  const handleShow2 = () => {
    setShow2(true);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Modal
        show={show2}
        onHide={handleClose2}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="gradient">
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar usuario
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={AgregarEmple}>
          <Modal.Body>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control border-secondary"
                id="idEmpleado"
                name="idEmpleado"
                placeholder="Cedula"
                onChange={cambiar}
              />
              <label for="floatingInput">Cedula</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="nombre"
                name="nombre"
                placeholder="Nombres"
                onChange={cambiar}
              />
              <label for="floatingInput">Nombre</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="apellido"
                name="apellido"
                placeholder="Apellidos"
                onChange={cambiar}
              />
              <label for="floatingInput">Apellido</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control border-secondary"
                id="telefono"
                name="telefono"
                placeholder="telefono"
                onChange={cambiar}
              />
              <label for="floatingInput">Telefono</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="direccion"
                name="direccion"
                placeholder="Direccion"
                onChange={cambiar}
              />
              <label for="floatingInput">Direccion</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control border-secondary"
                id="email"
                name="email"
                placeholder="Correo electronico"
                onChange={cambiar}
              />
              <label for="floatingInput">Correo electronico</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control border-secondary"
                id="pass"
                name="pass"
                placeholder="Contraseña"
                onChange={cambiar}
              />
              <label for="floatingPassword">Contraseña</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className=" btn-gradient" type="submit">
              <i class="fa-solid fa-floppy-disk"></i> Agregar
            </button>
          </Modal.Footer>
        </form>
      </Modal>
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title text-center">Usuarios</h2>
          <div className="col-12 text-end">
            <button onClick={handleShow2} className=" btn-gradient">
              <i class="fa fa-user-plus" aria-hidden="true"></i> Agregar
              empleado
            </button>
          </div>
          <div className="row stat-cards mt-4">
            <div className="col-md-6 col-xl-12">
              <table class="table  border border-black table-hover " id="tabla">
                <thead>
                  <tr id="tr">
                    <th id="th">Cedula</th>
                    <th id="th">Nombres</th>
                    <th id="th">Apellidos</th>
                    <th id="th">Telefono</th>
                    <th id="th">Direccion</th>
                    <th id="th">Correo electronico</th>
                    <th id="th">Editar</th>
                    <th id="th">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {datos.map((empleado) => {
                    return (
                      <tr>
                        <td key={empleado.idEmpleado}>{empleado.idEmpleado}</td>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.apellido}</td>
                        <td>{empleado.telefono}</td>
                        <td>{empleado.direccion}</td>
                        <td>{empleado.email}</td>

                        <td id="th">
                          <a
                            onClick={() => {
                              setEditar(empleado.idEmpleado);
                              handleShow();
                            }}
                            class="btn btn-app btn-gradient2"
                          >
                            <i class="fas fa-edit"></i>
                          </a>
                        </td>
                        {Editar == empleado.idEmpleado && (
                          <EditarUser
                            props={props}
                            show={show}
                            handleClose={handleClose}
                            id={empleado.idEmpleado}
                            nombre={empleado.nombre}
                            apellido={empleado.apellido}
                            telefono={empleado.telefono}
                            direccion={empleado.direccion}
                            email={empleado.email}
                            setEditar={setEditar}
                            Listar={ListarEmple}
                          ></EditarUser>
                        )}

                        <td id="th">
                          {" "}
                          <a
                            onClick={() => {
                              Eliminar(
                                empleado.idEmpleado,
                                empleado.nombre + " " + empleado.apellido
                              );
                            }}
                            class="btn btn-app btn-gradient"
                          >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="container footer--flex">
          <div class="footer-start">
            <p>
              2021 © Llaves y Extintores Penagos-{" "}
              <a
                href="elegant-dashboard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                llavesyextintorespenagos.com
              </a>
            </p>
          </div>
          <ul class="footer-end">
            <li>
              <a href="##">About</a>
            </li>
            <li>
              <a href="##">Support</a>
            </li>
            <li>
              <a href="##">Puchase</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Inicio;
