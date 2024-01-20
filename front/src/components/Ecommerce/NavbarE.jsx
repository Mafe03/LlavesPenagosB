import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import extintor from "../../assets/images/extinot.png";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal2);

const NarvbarE = () => {
  const Navigate = useNavigate();
  const CerraSesion = () => {
    MySwal.fire({
      title: "Cerrar Sesión",
      text: "Desea salir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, deseo salirr!",
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
          <div class="d-flex">
            <div class="p-2 flex-fill">
              <img
                width="100px"
                className=""
                src="https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/flower-008-a-400x550.jpg"
                alt=""
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="p-2 flex-fill">
              <p className="mt-3">Camiseta</p>
              <p className="mt-3"> $ 120.000</p>
              <div className="d-flex align-items-center mt-3">
                <div
                  className="input-group mb-3 d-flex align-items-center quantity-container"
                  style={{ maxWidth: "120px" }}
                >
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-black decrease"
                      type="button"
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center quantity-amount"
                    value="1"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-black increase"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="align-self-center">
              {" "}
              <i class="fa-solid fa-delete-left"></i>
            </div>
          </div>

          <div style={{ marginBottom: "265px" }}></div>

          <div className="d-grid gap-2 ">
            <hr />
            <div class="d-flex">
              <div class="p-2">Total:</div>
              <div class="ms-auto p-2">$ 120.000</div>
            </div>
            <NavLink to="/Ecommerce/Carrito">
              <button className="btn btn-gradient w-100 ">
                <i className="fa-solid fa-eye"></i> Ver carrito
              </button>
            </NavLink>
            <button className="btn btn-gradient2 w-100">
              <i className="fa-solid fa-star"></i> Comprar ahora
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
        id="nav"
      >
        <div className="container">
          <NavLink to="/Ecommerce">
            <a className="navbar-brand">Llaves Penagos</a>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
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
                <a className="nav-link" href="services.html">
                  Sobre Nosotros
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link">
                  <i class="bi bi-person-circle"></i>
                  <span>
                    {"   "}
                    {datos.nombre} {datos.apellido}
                  </span>
                </a>
              </li>
              <li>
                <a className="nav-link" onClick={handleShow}>
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
