import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import extintor from "../../assets/images/extinot.png";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logoLlaves.png";

const MySwal = withReactContent(Swal2);

const NarvbarE = () => {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const verCarrito = () => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("productos")) || [];
    setProductosCarrito(productosGuardados);
    let total2 = productosGuardados.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setTotal(total2);
  };

  const formatearPrecio = (precio) => {
    return precio.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const Eliminar = (productoId) => {
    // Obtener la lista de productos desde el localStorage
    const productosGuardados =
      JSON.parse(localStorage.getItem("productos")) || [];

    // Filtrar la lista para excluir el producto con el ID específico
    const nuevaLista = productosGuardados.filter(
      (producto) => producto.id !== productoId
    );
    //console.log(nuevaLista);
    // Actualizar el localStorage con la nueva lista
    localStorage.setItem("productos", JSON.stringify(nuevaLista));

    // Actualizar el estado del componente con la nueva lista
    setProductosCarrito([]);
    setProductosCarrito(nuevaLista);
    verCarrito();
  };
  const Navigate = useNavigate();
  const CerraSesion = () => {
    MySwal.fire({
      title: "Cerrar Sesión",
      text: "Desea salir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, deseo salir!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Cerrando!",
          text: "Hasta pronto!",
          icon: "success",
        });
        setTimeout(() => {
          Navigate("/Ecommerce/Cerrar");
        }, 500);
      }
    });
  };

  const datos = JSON.parse(localStorage.getItem("user"));
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton id="gradient">
          <Offcanvas.Title>Tu carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="fixed-body d-flex flex-column">
          {productosCarrito.length > 0 ? (
            productosCarrito.map((producto) => {
              return (
                <div className="d-flex border p-3 mt-2">
                  <img
                    width="100px"
                    height="100px"
                    src={producto.imagen}
                    alt=""
                    style={{ borderRadius: "5px", border: "1px solid #ddd" }}
                    className="mr-3"
                  />

                  <div className="p-2 flex-fill">
                    <p className="mt-3">{producto.nombre}</p>
                    <p className="mt-3">${producto.precio}</p>
                    <p className="mt-3">Cantidad: {producto.cantidad}</p>
                  </div>

                  <div className="align-self-center">
                    <i
                      className="fa-solid fa-delete-left"
                      onClick={() => {
                        Eliminar(producto.id);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h1>No hay productos</h1>
            </div>
          )}
          <div className="flex-fill"></div>{" "}
          {/* Espacio flexible para empujar los botones hacia abajo */}
          <div className="d-grid gap-2 ">
            <hr />
            <div className="d-flex">
              <div className="p-2">Total:</div>
              <div className="ms-auto p-2">$ {formatearPrecio(total)}</div>
            </div>
            <NavLink to="/Ecommerce/Carrito">
              <button className="btn btn-gradient w-100 " onClick={handleClose}>
                <i className="fa-solid fa-eye"></i> Ver carrito
              </button>
            </NavLink>
            <NavLink to="/Ecommerce/PasarelaPago">
              <button className="btn btn-gradient2 w-100" onClick={handleClose}>
                <i className="fa-solid fa-star"></i> Comprar ahora
              </button>
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
        id="nav"
      >
        <div className="container">
          <img src={logo} alt="" width={"5%"} />

          <div className="collapse navbar-collapse " id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink to="/Ecommerce">
                  <a className="nav-link">Inicio</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="Producto">
                  <a className="nav-link">Productos</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="Servicio">
                  <a className="nav-link">Servicios</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="Nosotros">
                  <a className="nav-link">Nosotros</a>
                </NavLink>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <NavLink to="Perfil">
                  <a className="nav-link">
                    <i class="bi bi-person-circle"></i>
                    <span>
                      {"   "}
                      {datos.nombre} {datos.apellido}
                    </span>
                  </a>
                </NavLink>
              </li>
              <li>
                <a
                  className="nav-link"
                  onClick={() => {
                    verCarrito();
                    handleShow();
                  }}
                >
                  <i class="bi bi-cart4"></i>
                </a>
              </li>
              <li>
                <a className="nav-link" onClick={CerraSesion}>
                  <i class="bi bi-box-arrow-right"></i>{" "}
                  <span>{""} Cerrar sesión</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NarvbarE;
