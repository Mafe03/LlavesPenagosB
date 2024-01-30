import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditarProducto from "./EditarProducto";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Productos = (props) => {
  const [datos, Setdatos] = useState([]);
  const [datos2, SetDatos2] = useState([]);
  const [Editar, setEditar] = useState(null);
  const token = localStorage.getItem("token2");
  const ListarCate = async (e) => {
    const request = await fetch("http://localhost:3600/categorias/listar", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await request.json();
    console.log(data);
    SetDatos2(data.mensaje);
  };

  useEffect(() => {
    ListarCate();
  }, []);

  const AgregarProducto = async (e) => {
    e.preventDefault();
    let nombre = document.querySelector("#nombre");
    let precio = document.querySelector("#precio");
    let cantidad = document.querySelector("#cantidad");
    let descripcion = document.querySelector("#descripcion");
    let idCategoria = document.querySelector("#idCategoria");
    let imagen = document.querySelector("#imagen");
    if (
      nombre.value.length > 0 &&
      precio.value.length > 0 &&
      cantidad.value.length > 0 &&
      descripcion.value.length > 0 &&
      idCategoria.value.length > 0 &&
      imagen.files[0] !== undefined
    ) {
      const formData = new FormData();
      formData.append("nombre", nombre.value);
      formData.append("precio", precio.value);
      formData.append("cantidad", cantidad.value);
      formData.append("descripcion", descripcion.value);
      formData.append("idCategoria", idCategoria.value);
      formData.append("imagen", imagen.files[0]);
      fetch("http://localhost:3600/productos/agregar", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          if (res.id == 200) {
            MySwal.fire({
              title: <strong> {"Agregado"}</strong>,
              html: <i>{res.mensaje}</i>,
              icon: "success",
            });
            nombre.value = "";
            precio.value = "";
            cantidad.value = "";
            descripcion.value = "";
            imagen.value.files[0] = "";
          } else {
            MySwal.fire({
              title: <strong> {"Error"}</strong>,
              html: <i>{res.mensaje}</i>,
              icon: "error",
            });
          }
        });
    } else {
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{"Hay campos vacíos"}</i>,
        icon: "error",
      });
    }
  };

  const ListarProducto = async () => {
    const request = await fetch("http://localhost:3600/productos/listarI", {
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
    ListarProducto();
  }, []);

  const Eliminar = (id, nombre) => {
    MySwal.fire({
      title: `¿Desea eliminar el producto ${nombre}?`,
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:3600/productos/eliminar/${id}`, {
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
              MySwal.fire({
                title: <strong>Eliminado</strong>,
                html: <i>{data.mensaje}</i>,
                icon: "success",
              });
              ListarProducto();
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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="gradient">
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar producto
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={AgregarProducto}>
          <Modal.Body>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="nombre"
                name="nombre"
                placeholder="Nombre producto"
              />
              <label>Nombre producto</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="precio"
                name="pr4ecio"
                placeholder="Precio producto"
              />
              <label>Precio producto</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="cantidad"
                name="cantidad"
                placeholder="Cantidad"
              />
              <label>Cantidad</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="descripcion"
                name="descripcion"
                placeholder="Descripcion producto"
              />
              <label>Descripcion producto</label>
            </div>
            <div className="form-floating mb-3">
              <select
                type="text"
                className="form-control border-secondary"
                id="idCategoria"
                name="idCategoria"
                placeholder="Categoria"
              >
                {datos2.map((cate) => {
                  return (
                    <option value={cate.idCategoria}>
                      {cate.descripCategoria}
                    </option>
                  );
                })}
              </select>
              <label>Categoria</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="file"
                className="form-control border-secondary"
                id="imagen"
                name="imagen"
                placeholder="Imagen"
              />
              <label>Imagen</label>
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
          <h2 className="main-title text-center ">Productos</h2>
          <div className="col-12 text-end">
            <button onClick={handleShow2} className=" btn-gradient">
              <i class="bi bi-person-plus-fill"></i> Agregar producto
            </button>
          </div>
          <div className="row stat-cards mt-4">
            <div className="col-md-6 col-xl-12">
              <table class="table  border border-black table-hover ">
                <thead>
                  <tr id="tr">
                    <th id="th">ID Producto</th>
                    <th id="th">Nombre</th>
                    <th id="th">Precio</th>
                    <th id="th">Cantidad</th>
                    <th id="th">Descripcion</th>
                    <th id="th">Categoria</th>
                    <th id="th">Imagen</th>
                    <th id="th">Editar</th>
                    <th id="th">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {datos.map((producto) => {
                    return (
                      <tr>
                        <td key={producto.idProducto}>{producto.idProducto}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.descripCategoria}</td>
                        <td>
                          {" "}
                          <img
                            src={producto.imagen}
                            alt=""
                            style={{ width: "55px", height: "55px" }}
                          />
                        </td>

                        <td style={{ color: "white" }}>
                          {" "}
                          <a
                            className="btn btn-app btn-gradient2"
                            onClick={() => {
                              setEditar(producto.idProducto);
                              handleShow();
                            }}
                          >
                            <i className="fas fa-edit"></i>
                          </a>
                        </td>
                        {Editar == producto.idProducto && (
                          <EditarProducto
                            props={props}
                            show={show}
                            handleClose={handleClose}
                            id={producto.idProducto}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            cantidad={producto.cantidad}
                            descripcion={producto.descripcion}
                            setEditar={setEditar}
                            listarProducto={ListarProducto}
                          ></EditarProducto>
                        )}
                        <td style={{ color: "white" }}>
                          {" "}
                          <a
                            className="btn btn-app btn-gradient"
                            onClick={() => {
                              Eliminar(producto.idProducto, producto.nombre);
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

export default Productos;
