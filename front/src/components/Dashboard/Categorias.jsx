import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import EditarCategoria from "./EditarCategoria";
import Button from "react-bootstrap/Button";
import EditarProducto from "./EditarProducto";
import HelperForm from "../../helper/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Swal = withReactContent(Swal2);

const Categorias = (props) => {
  const [datos, SetDatos] = useState([]);
  const [Editar, setEditar] = useState(null);

  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token2");

  const AgregarCate = async (e) => {
    const nombreCate = document.querySelector("#descripCategoria");
    e.preventDefault();
    let formulario = form;
    const request = await fetch("http://localhost:3600/categorias/agregar", {
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
      nombreCate.value = "";
    } else {
      let mensaje = data.mensaje;
      Swal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
      nombreCate.value = "";
    }
  };

  const ListarCategoria = async () => {
    const request = await fetch("http://localhost:3600/categorias/listar", {
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
    ListarCategoria();
  }, []);

  const Eliminar = (id, nombre) => {
    Swal.fire({
      title: `¿Desea eliminar la categoria ${nombre}?`,
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:3600/categorias/eliminar/${id}`, {
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
                html: <i>Categoria eliminada exitosamente</i>,
                icon: "success",
              });
              ListarCategoria();
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
            Agregar categoria
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={AgregarCate}>
          <Modal.Body>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="descripCategoria"
                name="descripCategoria"
                placeholder="Nombre categoria"
                onChange={cambiar}
              />
              <label>Nombre categoria</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className=" btn-gradient" type="submit">
              <i className="fa-solid fa-floppy-disk"></i> Agregar
            </button>
          </Modal.Footer>
        </form>
      </Modal>
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title text-center">Categorias</h2>
          <div className="col-12 text-end">
            <button onClick={handleShow2} className=" btn-gradient">
              <i className="fa fa-plus-circle" aria-hidden="true"></i> Agregar
              categorias
            </button>
          </div>
          <div className="row stat-cards mt-4">
            <div className="col-md-6 col-xl-12">
              <table className="table  border border-black table-hover ">
                <thead>
                  <tr id="tr">
                    <th id="th">Nro categoria</th>
                    <th id="th">Nombre categoria</th>
                    <th id="th">Editar</th>
                    <th id="th">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {datos.map((categoria) => {
                    return (
                      <tr>
                        <td key={categoria.idCategoria}>
                          {categoria.idCategoria}
                        </td>
                        <td>{categoria.descripCategoria}</td>
                        <td id="th">
                          <a
                            className="btn btn-app btn-gradient2"
                            onClick={() => {
                              setEditar(categoria.idCategoria);
                              handleShow();
                            }}
                          >
                            <i className="fas fa-edit"></i>
                          </a>
                        </td>
                        {Editar == categoria.idCategoria && (
                          <EditarCategoria
                            props={props}
                            show={show}
                            handleClose={handleClose}
                            id={categoria.idCategoria}
                            categoria={categoria.descripCategoria}
                            setEditar={setEditar}
                            listarCategoria={ListarCategoria}
                          ></EditarCategoria>
                        )}
                        <td id="th">
                          {" "}
                          <a
                            className="btn btn-app btn-gradient"
                            onClick={() => {
                              Eliminar(
                                categoria.idCategoria,
                                categoria.descripCategoria
                              );
                            }}
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

export default Categorias;
