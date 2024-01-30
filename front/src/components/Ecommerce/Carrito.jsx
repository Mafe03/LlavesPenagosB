import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Carrito = () => {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    verCarrito();
  }, []);
  const verCarrito = () => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("productos")) || [];
    setProductosCarrito(productosGuardados);
    let total2 = productosGuardados.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setTotal(total2);
    //console.log(total2);
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

  const Cantidad = (id, nuevaCantidad) => {
    verCarrito();
    const nuevoCarrito = productosCarrito
      .map((producto) => {
        if (producto.id === id) {
          const cantidadMaxima = producto.cantidadMaxima;
          // Asegurarse de que la nueva cantidad no supere la cantidad máxima
          const cantidadActualizada = Math.min(nuevaCantidad, cantidadMaxima);
          if (cantidadActualizada > 0 && producto.precio > 0) {
            return {
              ...producto,
              cantidad: cantidadActualizada,
              total: cantidadActualizada * producto.precio,
            };
          } else {
            return null;
          }
        }
        return producto;
      })
      .filter(Boolean);

    localStorage.setItem("productos", JSON.stringify(nuevoCarrito));
    setProductosCarrito(nuevoCarrito);
    verCarrito();
  };
  return (
    <>
      <div className="untree_co-section before-footer-section">
        <div className="container-sm">
          <section className="container py-5">
            <div
              id="ast-checkout-wrap"
              class="ast-checkout-smaller ast-checkout-uppercase"
            >
              <NavLink to={"/Ecommerce/Carrito"}>
                <a href="" class="ast-current">
                  <span class="ast-step-number">1</span>
                  <p>Carrito de Compras</p>
                </a>
              </NavLink>
              <span class="ahfb-svg-iconset ast-inline-flex svg-baseline ms-2 me-2">
                <i class="fa-solid fa-chevron-right"></i>
              </span>{" "}
              <a href="">
                <span class="ast-step-number">2</span>
                <p>Verificar detalles</p>
              </a>
              <span class="ahfb-svg-iconset ast-inline-flex svg-baseline ms-2 me-2">
                <i class="fa-solid fa-chevron-right"></i>
              </span>{" "}
              <a
                href="#"
                class="ast-disable-click
								"
              >
                <span class="ast-step-number">3</span>
                <p>Orden Completa</p>
              </a>
            </div>
            <div className="row  pt-5 pb-3">
              <div className="col-lg-12">
                <h1 className="h1 text-start text-center">Carrito</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="site-blocks-table">
                  <table class="table border border-black  ">
                    <thead>
                      <tr id="tr2">
                        <th id="img"></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>SubTotal</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {productosCarrito.length > 0 ? (
                        productosCarrito.map((producto) => {
                          return (
                            <tr>
                              <td className="align-middle" id="img">
                                <div className="d-flex align-items-center">
                                  <img
                                    width="100px"
                                    height="100px"
                                    className="mb-0"
                                    src={producto.imagen}
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td className="align-middle" id="camisa">
                                <div className="d-flex align-items-center">
                                  <p className="mb-0">{producto.nombre}</p>
                                </div>
                              </td>
                              <td className="align-middle">
                                <div className="d-flex align-items-center">
                                  <p className="mb-0">${producto.precio}</p>
                                </div>
                              </td>
                              <td className="align-middle">
                                <div className="d-flex align-items-center">
                                  <div
                                    className="input-group mb-3 d-flex align-items-center quantity-container"
                                    style={{ maxWidth: "120px" }}
                                  >
                                    <input
                                      type="number"
                                      value={producto.cantidad}
                                      onChange={(e) =>
                                        Cantidad(producto.id, e.target.value)
                                      }
                                      max={producto.cantidadMaxima}
                                      min={0}
                                      className="form-control text-center quantity-amount"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle">
                                <div className="d-flex align-items-center">
                                  <p className="mb-0">
                                    ${formatearPrecio(producto.total)}
                                  </p>
                                </div>
                              </td>
                              <td className="align-middle">
                                <i
                                  class="fa-solid fa-delete-left"
                                  onClick={() => {
                                    Eliminar(producto.id);
                                  }}
                                ></i>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <td>No hay productos</td>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-4">
                <div class="card">
                  <div
                    class="card-header "
                    style={{
                      color: "white",
                      padding: "10px",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                    id="tr2"
                  >
                    Total Carrito
                  </div>
                  <div class="card-body">
                    <div className="d-flex">
                      <p class="card-text mt-3">Subtotal:</p>
                      <p class="card-text mt-3 ms-5">
                        ${formatearPrecio(total)}
                      </p>
                    </div>
                    <hr />
                    <div className="d-flex">
                      <p class="card-text mt-3">Total:</p>{" "}
                      <p class="card-text mt-3 ms-5">
                        ${formatearPrecio(total)}
                      </p>
                    </div>
                    <hr />
                    {productosCarrito.length > 0 ? (
                      <>
                        <NavLink to="/Ecommerce/PasarelaPago">
                          <button
                            href="#"
                            class="btn btn-dark w-100 mt-5 btn-gradient"
                          >
                            Pagar
                          </button>
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink to="/Ecommerce" className="">
                          <button
                            href="#"
                            className="btn btn-gradient2 w-100 mt-3 btn-dark"
                          >
                            Seguir comprando
                          </button>
                        </NavLink>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="footer-section">
        <div className="container relative">
          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
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
                  <a hreff="https://themewagon.com">ThemeWagon</a>
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

export default Carrito;
