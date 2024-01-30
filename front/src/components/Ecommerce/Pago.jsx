import React, { useState, useEffect } from "react";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MySwal = withReactContent(Swal2);

const Pago = () => {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalFinal, setTotalFinal] = useState(0);
  const [error, setError] = useState(null);
  const [datos, SetDatos] = useState([]);
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");
  const datos1 = JSON.parse(localStorage.getItem("user"));

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
    setTotalFinal(total2);
  };

  const formatearPrecio = (precio) => {
    return precio.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const obtenerFechaYHoraActual = () => {
    const fechaActual = new Date();

    fechaActual.setHours(fechaActual.getHours() - 5);

    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaActual.getDate()).padStart(2, "0");

    const horas = String(fechaActual.getHours()).padStart(2, "0");
    const minutos = String(fechaActual.getMinutes()).padStart(2, "0");
    const segundos = String(fechaActual.getSeconds()).padStart(2, "0");

    const fechaFormateada = `${año}-${mes}-${dia}`;
    const horaFormateada = `${horas}:${minutos}:${segundos}`;

    return `${fechaFormateada} ${horaFormateada}`;
  };

  const Disponibilidad = async (id, cantidad) => {
    try {
      const response = await fetch(
        `http://localhost:3600/productos/verDisponibilidad/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ cantidad: cantidad }),
        }
      );

      const data = await response.json();
      return data.mensaje;
    } catch (error) {
      console.error("Error en la solicitud:", error);

      return false;
    }
  };

  const AgregarEncabezado = async (
    fechaHora,
    total,
    idEstado,
    idUsuario,
    idMetodo
  ) => {
    try {
      const response = await fetch("http://localhost:3600/encabezado/agregar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          fechaHora,
          total,
          idEstado,
          idUsuario,
          idMetodo,
        }),
      });

      const data = await response.json();
      if (data.id === 200) {
        return { status: 200 };
      } else {
        return { status: 400, errorMessage: data.errorMessage };
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return { status: 400, errorMessage: "Error de conexión" };
    }
  };

  const Encabezado = async (e) => {
    e.preventDefault();
    verCarrito();
    const usuario = await fetch(
      `http://localhost:3600/usuarios/listarUno/${idUsuario.value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const datosuser = await usuario.json();
    console.log(datosuser.mensaje[0].pass);
    const pass = datosuser.mensaje[0].pass;
    if (productosCarrito.length > 0) {
      for (const producto of productosCarrito) {
        const disponible = await Disponibilidad(producto.id, producto.cantidad);

        if (!disponible) {
          setError(`El producto "${producto.nombre}" no está disponible.`);
          MySwal.fire({
            title: <strong> {"Error"}</strong>,
            html: (
              <i>{`El producto "${producto.nombre}" no está disponible.`}</i>
            ),
            icon: "error",
          });
          return;
        }
      }

      setError(null);

      if (error === null) {
        const idUsuario = document.querySelector("#idUsuario");
        const nombre = document.querySelector("#nombre");
        const apellido = document.querySelector("#apellido");
        const email = document.querySelector("#email");
        const telefono = document.querySelector("#telefono");
        const direccion = document.querySelector("#direccion");
        const ciudad = document.querySelector("#ciudad");
        const metodoPago = document.querySelector("#idMetodo");
        if (
          idUsuario.value.length > 0 &&
          nombre.value.length > 0 &&
          apellido.value.length > 0 &&
          email.value.length > 0 &&
          telefono.value.length > 0 &&
          direccion.value.length > 0 &&
          ciudad.value.length > 0
        ) {
          const request = await fetch(
            `http://localhost:3600/usuarios/editar/${idUsuario.value}`,
            {
              method: "PUT",
              body: JSON.stringify({
                nombre: nombre.value,
                apellido: apellido.value,
                email: email.value,
                telefono: telefono.value,
                direccion: direccion.value,
                pass: pass,
                ciudad: ciudad.value,
              }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
              },
            }
          );
          const data = await request.json();

          if (data.id == 200) {
            let fechayhora = obtenerFechaYHoraActual();
            let respuestaEnca = AgregarEncabezado(
              fechayhora,
              totalFinal,
              0,
              idUsuario.value,
              metodoPago.value
            );
            respuestaEnca = (await respuestaEnca).status;
            if (respuestaEnca === 200) {
              try {
                let i = 1;

                for (const producto of productosCarrito) {
                  let id = producto.id;
                  let cantidad = producto.cantidad;
                  let totalProd = producto.total;
                  console.log(id);
                  console.log(cantidad);
                  console.log(totalProd);
                  const response = await fetch(
                    "http://localhost:3600/detalle/agregar",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `${token}`,
                      },
                      body: JSON.stringify({
                        cantidad: cantidad,
                        totalProd: totalProd,
                        idProducto: id,
                      }),
                    }
                  );
                  const data = await response.json();
                  console.log(data);
                  if (data.id === 400) {
                    MySwal.fire({
                      title: <strong> {"Error"}</strong>,
                      html: <i>{"Error al comprar"}</i>,
                      icon: "error",
                    });
                    break;
                  } else {
                    if (i == productosCarrito.length) {
                      MySwal.fire({
                        title: <strong> {"Felicitaciones"}</strong>,
                        html: <i>{"Compra ralizada correctamente"}</i>,
                        icon: "success",
                      });
                      localStorage.removeItem("productos");
                      setTimeout(() => {
                        Navigate("/Ecommerce/Factura");
                      }, 1500);
                    }
                  }
                  i = i + 1;
                }
              } catch (error) {
                console.error("Error durante el proceso de envío:", error);
              }
            } else {
              MySwal.fire({
                title: <strong> {"Error"}</strong>,
                html: <i>{"Error al comprar"}</i>,
                icon: "error",
              });
            }
          } else {
            let mensaje = data.mensaje;
            MySwal.fire({
              title: <strong> {"Error"}</strong>,
              html: <i>{mensaje || data.error}</i>,
              icon: "error",
            });
          }
        } else {
          MySwal.fire({
            title: <strong> {"Error"}</strong>,
            html: <i>{"No deje campos vacios"}</i>,
            icon: "error",
          });
        }
      } else {
        MySwal.fire({
          title: <strong> {"Error"}</strong>,
          html: <i>{error}</i>,
          icon: "error",
        });
      }
    } else {
      MySwal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{"Agregue productos al carrito de compras"}</i>,
        icon: "error",
      });
    }
  };

  const ListarMetodoP = async () => {
    const request = await fetch("http://localhost:3600/metodop/listar", {
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
    ListarMetodoP();
  }, []);
  return (
    <>
      <div className="untree_co-section">
        <div className="container-sm">
          <section className="container py-5">
            <div
              id="ast-checkout-wrap"
              className="ast-checkout-smaller ast-checkout-uppercase"
            >
              <NavLink to={"/Ecommerce/Carrito"}>
                <a href="">
                  <span className="ast-step-number">1</span>
                  <p>Carrito de Compras</p>
                </a>
              </NavLink>
              <span className="ahfb-svg-iconset ast-inline-flex svg-baseline ms-2 me-2">
                <i className="fa-solid fa-chevron-right"></i>
              </span>{" "}
              <a href="" className="ast-current">
                <span className="ast-step-number">2</span>
                <p>Verificar detalles</p>
              </a>
              <span className="ahfb-svg-iconset ast-inline-flex svg-baseline ms-2 me-2">
                <i className="fa-solid fa-chevron-right"></i>
              </span>{" "}
              <a
                href="#"
                className="ast-disable-click
								"
              >
                <span className="ast-step-number">3</span>
                <p>Orden Completa</p>
              </a>
            </div>
            <div className="row  pt-4 pb-3">
              <div className="col-lg-12">
                <h1 className="h1 text-start text-center">Datos de envio</h1>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-7">
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="idUsuario"
                        name="idUsuario"
                        placeholder="Cedula"
                        defaultValue={datos1.idUsuario}
                        disabled
                      />
                      <label for="floatingInput">Cedula</label>
                    </div>

                    <div className="row g-2 mb-3">
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"
                            defaultValue={datos1.nombre}
                          />
                          <label for="floatingInputGrid">Nombre</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="apellido"
                            name="apellido"
                            placeholder="Apellido"
                            defaultValue={datos1.apellido}
                          />
                          <label for="floatingInputGrid">Apellido</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Correo Electronico"
                        defaultValue={datos1.email}
                      />
                      <label for="floatingInput">Correo Electronico</label>
                    </div>
                    <div className="row g-2 mb-3">
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            placeholder="Celular"
                          />
                          <label for="floatingInputGrid">Celular</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="direccion"
                            name="direccion"
                            placeholder="Direccion"
                          />
                          <label for="floatingInputGrid">Direccion</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="ciudad"
                        name="ciudad"
                        placeholder="Ciudad"
                      />
                      <label for="floatingInput">Ciudad</label>
                    </div>

                    <div className="form-floating mb-3">
                      <select
                        type="text"
                        className="form-control"
                        id="idMetodo"
                        name="idMetodo"
                        placeholder="Metodo de Pago"
                      >
                        {datos.map((metodo) => {
                          return (
                            <option
                              value={metodo.idMetodo}
                              key={metodo.idMetodo}
                            >
                              {metodo.descripcion}
                            </option>
                          );
                        })}
                      </select>
                      <label>Metodo de pago</label>
                    </div>
                    {productosCarrito.length > 0 ? (
                      <NavLink to="Factura">
                        <button
                          className="btn btn-success w-100 mt-3 btn-gradient"
                          onClick={(e) => {
                            Encabezado(e);
                          }}
                        >
                          Pagar
                        </button>
                      </NavLink>
                    ) : (
                      <NavLink to="/Ecommerce/Producto">
                        <button
                          type="submit"
                          className="btn btn-success w-100 mt-3 btn-gradient"
                          style={{ fontSize: "120%" }}
                        >
                          Agregar Productos
                        </button>
                      </NavLink>
                    )}
                  </form>
                </div>
                <div className="col-1 d-flex">
                  <div className="vertical-line"></div>
                </div>
                <div className="col-4">
                  <h2 className="h2 mb-4 text-start">Productos</h2>
                  {productosCarrito.length > 0 ? (
                    productosCarrito.map((producto) => {
                      return (
                        <>
                          <div className="card mt-2" key={producto.id}>
                            <div className="d-flex flex-row">
                              <div className="p-2 ">
                                <img
                                  width="75px"
                                  height="100px"
                                  className=""
                                  src={producto.imagen}
                                  alt=""
                                  style={{ borderRadius: "5px" }}
                                />
                              </div>
                              <div className="p-2">
                                <p>{producto.nombre}</p>
                              </div>
                              <div className="p-2">
                                <p>X{producto.cantidad}</p>
                              </div>
                              <div className="ms-5 p-2 d-flex align-items-end flex-column mt-auto">
                                <p>$ {formatearPrecio(producto.precio)}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <div className="d-flex flex-row text-center">
                      <div className="p-2 ">
                        <h1>No hay productos</h1>
                      </div>
                    </div>
                  )}
                  <hr />
                  <div className="d-flex">
                    <div className="p-2">Total:</div>
                    <div className="ms-auto p-2">
                      $ {formatearPrecio(total)}
                    </div>
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
                  <span className="me-1">
                    <img
                      src="images/envelope-outline.svg"
                      alt="Image"
                      className="img-fluid"
                    />
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

export default Pago;
