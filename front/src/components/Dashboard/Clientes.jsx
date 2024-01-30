import React, { useState, useEffect } from "react";
import EditarCliente from "./EditarCliente";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(Swal2);

const Clientes = (props) => {
  const [datos, SetDatos] = useState([]);
  const [Editar, setEditar] = useState(null);
  const token = localStorage.getItem("token2");

  const ListarCliente = async () => {
    const request = await fetch("http://localhost:3600/usuarios/listar", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    console.log(data);
    SetDatos(data.mensaje);
  };

  useEffect(() => {
    ListarCliente();
  }, []);

  const Eliminar = (id, nombre) => {
    Swal.fire({
      title: `¿Desea eliminar el cliente ${nombre}?`,
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:3600/usuarios/eliminar/${id}`, {
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

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title text-center">Clientes</h2>
          <div className="row stat-cards">
            <div className="col-md-6 col-xl-12 mt-3">
              <table className="table  border border-black table-hover ">
                <thead>
                  <tr id="tr">
                    <th id="th">Cedula</th>
                    <th id="th">Nombre cliente</th>
                    <th id="th">Apellido Cliente</th>
                    <th id="th">Telefono</th>
                    <th id="th">Direccion</th>
                    <th id="th">Email</th>
                    <th id="th">Editar</th>
                    <th id="th">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {datos.map((cliente) => {
                    return (
                      <tr>
                        <td>{cliente.idUsuario}</td>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellido}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.direccion}</td>
                        <td>{cliente.email}</td>
                        <td id="th">
                          <a
                            className="btn btn-app btn-gradient2"
                            onClick={() => {
                              setEditar(cliente.idUsuario);
                              handleShow();
                            }}
                          >
                            <i className="fas fa-edit"></i>
                          </a>
                        </td>
                        {Editar == cliente.idUsuario && (
                          <EditarCliente
                            props={props}
                            show={show}
                            handleClose={handleClose}
                            id={cliente.idUsuario}
                            nombre={cliente.nombre}
                            apellido={cliente.apellido}
                            telefono={cliente.telefono}
                            direccion={cliente.direccion}
                            email={cliente.email}
                            setEditar={setEditar}
                            ListarCliente={ListarCliente}
                          ></EditarCliente>
                        )}
                        <td id="th">
                          {" "}
                          <a
                            onClick={() => {
                              Eliminar(
                                cliente.idUsuario,
                                cliente.nombre + " " + cliente.apellido
                              );
                            }}
                            className="btn btn-app btn-gradient"
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>
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
      <footer className="footer">
        <div className="container footer--flex">
          <div className="footer-start">
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
          <ul className="footer-end">
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

export default Clientes;
