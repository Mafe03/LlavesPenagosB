import React from "react";
import HelperForm from "../../helper/HelperForm";

const Pago = () => {
  const { form, cambiar } = HelperForm({});
  return (
    <>
      <div className="untree_co-section">
        <div className="container-sm">
          <section className="container py-5">
            <div
              id="ast-checkout-wrap"
              class="ast-checkout-smaller ast-checkout-uppercase"
            >
              <a href="">
                <span class="ast-step-number">1</span>
                <p>Carrito de Compras</p>
              </a>
              <span class="ahfb-svg-iconset ast-inline-flex svg-baseline ms-2 me-2">
                <i class="fa-solid fa-chevron-right"></i>
              </span>{" "}
              <a href="" class="ast-current">
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
                        onChange={cambiar}
                        placeholder="Cedula"
                      />
                      <label for="floatingInput">Cedula</label>
                    </div>

                    <div class="row g-2 mb-3">
                      <div class="col-md">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"
                          />
                          <label for="floatingInputGrid">Nombre</label>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            id="apellido"
                            name="apellido"
                            placeholder="Apellido"
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
                        onChange={cambiar}
                      />
                      <label for="floatingInput">Correo Electronico</label>
                    </div>
                    <div class="row g-2 mb-3">
                      <div class="col-md">
                        <div class="form-floating">
                          <input
                            type="number"
                            class="form-control"
                            id="celular"
                            name="celular"
                            placeholder="Celular"
                          />
                          <label for="floatingInputGrid">Celular</label>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            id="direcion"
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
                        onChange={cambiar}
                      />
                      <label for="floatingInput">Ciudad</label>
                    </div>
                    <button
                      href="#"
                      class="btn btn-success w-100 mt-3 btn-gradient"
                    >
                      Pagar
                    </button>
                  </form>
                </div>
                <div className="col-1 d-flex">
                  <div class="vertical-line"></div>
                </div>
                <div className="col-4">
                  <h2 className="h2 mb-4 text-start">Productos</h2>
                  <div className="card">
                    <div className="d-flex flex-row">
                      <div class="p-2 ">
                        <img
                          width="75px"
                          className=""
                          src="https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/flower-008-a-400x550.jpg"
                          alt=""
                          style={{ borderRadius: "5px" }}
                        />
                      </div>
                      <div className="p-2">
                        <p>Camiseta</p>
                      </div>
                      <div class="p-2">
                        <p>X12</p>
                      </div>
                      <div class="ms-5 p-2 d-flex align-items-end flex-column mt-auto">
                        <p>$ 120.000</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="d-flex">
                    <div class="p-2">Subtotal:</div>
                    <div class="ms-auto p-2">$ 120.000</div>
                  </div>
                  <hr />
                  <div class="d-flex mb-3 ">
                    <div class="p-2">Total:</div>
                    <div class="ms-auto p-2">$ 120.000</div>
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
