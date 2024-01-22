import React, { useState, useEffect } from "react";
import envelope from "../../assets/images/envelope-outline.svg";
import extintor from "../../assets/images/extinot.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ImgEyes from "../../assets/images/eyes.png";
import ImgCart from "../../assets/images/cart.png";
import Button from "react-bootstrap/Button";

const Productos = (props) => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [modal, setModal] = useState([]);

  const token = localStorage.getItem("token");

  const ListarUnProducto = async (id) => {
    const request = await fetch(
      `http://localhost:3600/productos/listarUno/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await request.json();
    setModal([]);
    setModal(data.mensaje);
  };
  const listarProductosCategoria = async (idCategoria) => {
    const request = await fetch(
      `http://localhost:3600/productos/listarCategoria/${idCategoria}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await request.json();
    //console.log(data);
    //console.table(data);
    setProductos([]);
    setProductos(data.mensaje);
  };

  const listarProductos = async () => {
    const request = await fetch("http://localhost:3600/productos/listarI", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    //console.log(data);
    setProductos([]);
    setProductos(data.mensaje);
  };

  const listarCategorias = async () => {
    const request = await fetch("http://localhost:3600/categorias/listar", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    //console.log(data);
    setCategorias(data.mensaje);
  };

  useEffect(() => {
    listarCategorias();
  }, []);

  useEffect(() => {
    listarProductos();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
  };
  const handleShow2 = () => {
    setShow2(true);
  };

  return (
    <>
      <Modal
        show={show2}
        onHide={handleClose2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {modal.map((producto) => {
            return (
              <div className="d-flex" key={producto.idProducto}>
                <div className="flex-shrink-0">
                  <img src={producto.imagen} alt="..." width="300px" />
                </div>
                <div className="flex-grow-1 ms-3 d-flex flex-column justify-content-between">
                  <div>
                    <h3>{producto.nombre}</h3>

                    <p className="mt-3">{producto.descripcion}</p>
                    <p>$ {producto.precio}</p>
                    <p className="">Cantidad:</p>
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
                  <NavLink to="Carrito" className="">
                    <button
                      href="#"
                      className="btn btn-dark w-100 mt-auto btn-gradient"
                    >
                      <i class="bi bi-cart4"></i> Agregar al carrito
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton id="gradient">
          <Offcanvas.Title>Tu carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="fixed-body d-flex flex-column">
          <div className="d-flex">
            <div className="p-2 flex-fill">
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

            <div className="align-self-center">
              {" "}
              <i className="fa-solid fa-delete-left"></i>
            </div>
          </div>

          <div style={{ marginBottom: "265px" }}></div>

          <div className="d-grid gap-2 ">
            <hr />
            <div className="d-flex">
              <div className="p-2">Total:</div>
              <div className="ms-auto p-2">$ 120.000</div>
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

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="main-nav-start text-end">
              <div className="search-wrapper">
                <input type="text" placeholder="Buscar" required />
              </div>
            </div>
          </div>
          <h3>Categorias</h3>
          <div className="row mt-5">
            <div className="col-3">
              <div class="list-group" id="list-tab" role="tablist">
                <a
                  class="list-group-item list-group-item-action "
                  id="list-home-list"
                  data-bs-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="list-home"
                  onClick={() => {
                    listarProductos();
                  }}
                >
                  Todos
                </a>
                {categorias.map((categoria) => {
                  return (
                    <a
                      class="list-group-item list-group-item-action "
                      id="list-home-list"
                      data-bs-toggle="list"
                      href="#list-home"
                      role="tab"
                      aria-controls="list-home"
                      onClick={() => {
                        listarProductosCategoria(categoria.idCategoria);
                      }}
                    >
                      {categoria.descripCategoria}
                    </a>
                  );
                })}
              </div>
            </div>
            {productos.map((producto) => {
              return (
                <>
                  <div className="col-9 col-md-4 col-lg-3 mb-5 border border-secondary-subtle">
                    {" "}
                    <a className="product-item ">
                      <img
                        src={producto.imagen}
                        className="img-fluid product-thumbnail"
                      />
                      <hr />
                      <h3 className="product-title mb-2">{producto.nombre}</h3>

                      <span className="product-price ">
                        $ {producto.precio}
                      </span>
                      <span className="icon-cross" onClick={handleShow}>
                        <img src={ImgCart} className="img-fluid" />
                      </span>
                      <span
                        className="icon-cross2 "
                        onClick={() => {
                          ListarUnProducto(producto.idProducto);
                          handleShow2();
                        }}
                      >
                        <img src={ImgEyes} className="img-fluid" />
                      </span>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="footer-section">
        <div className="container relative">
          <div className="sofa-img">
            <img src={extintor} alt="Image" className="img-fluid" />
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <img src={envelope} alt="Image" className="img-fluid" />
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>

                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <a href="#" className="footer-logo">
                  Furni<span>.</span>
                </a>
              </div>
              <p className="mb-4">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>

              <ul className="list-unstyled custom-social">
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Knowledge base</a>
                    </li>
                    <li>
                      <a href="#">Live chat</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Our team</a>
                    </li>
                    <li>
                      <a href="#">Leadership</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Nordic Chair</a>
                    </li>
                    <li>
                      <a href="#">Kruzo Aero</a>
                    </li>
                    <li>
                      <a href="#">Ergonomic Chair</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>.
                  All Rights Reserved. &mdash; Designed with love by{" "}
                  <a href="https://untree.co">Untree.co</a> Distributed By{" "}
                  <a href="https://themewagon.com">ThemeWagon</a>
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Productos;
