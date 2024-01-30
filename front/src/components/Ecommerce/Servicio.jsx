import React, { useState } from "react";
import cerrojero from "../../assets/images/cerrojero.png";
import recarga from "../../assets/images/recarga.jpg";
import duplicado from "../../assets/images/duplicado.png";

const Servicio = () => {
  return (
    <>
      <div className="hero mt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Servicios</h1>
                <p className="mb-2" style={{ fontSize: "18px" }}>
                  "En Llaves y Extintores Penagos, encendemos la seguridad y
                  apagamos las preocupaciones. Tu tranquilidad, nuestra
                  prioridad."
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-section ">
        <div className="container-sm ">
          <div className="row my-5 d-flex justify-content-center">
            <div className="col-6 col-md-6 col-lg-3 mb-4 ">
              <div className="feature">
                <div className="icon">
                  <img
                    src={cerrojero}
                    alt="Image"
                    className="imf-fluid"
                    style={{ width: "310px", height: "300px" }}
                  />
                </div>
                <h3 className="font-weight-bold mt-3">Cambio de cerrojeria</h3>
                <p className="mt-3">
                  Nos especializamos en ofrecer un servicio completo y confiable
                  de cambio de cerrajería. Ya sea que necesite actualizar sus
                  cerraduras por razones de seguridad, renovar el aspecto
                  estético de sus puertas o mejorar la eficiencia de su sistema
                  de acceso, estamos aquí para brindarle soluciones a medida..
                </p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src={duplicado}
                    alt="Image"
                    className="imf-fluid"
                    style={{ width: "310px", height: "300px" }}
                  />
                </div>
                <h3 className="font-weight-bold mt-3">
                  Copia de llave a domicilio
                </h3>
                <p className="mt-3">
                  Entendemos la importancia de contar con llaves de repuesto de
                  manera conveniente y eficiente. Es por eso que ofrecemos un
                  servicio especializado de copia de llaves a domicilio para
                  brindarle la comodidad que necesita.
                </p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src={recarga}
                    alt="Image"
                    className="imf-fluid"
                    style={{ width: "310px", height: "300px" }}
                  />
                </div>
                <h3 className="font-weight-bold mt-3">Recarga de extintores</h3>
                <p className="mt-3">
                  Nos comprometemos a garantizar su seguridad y la de su
                  entorno. Nuestro servicio de recarga de extintores está
                  diseñado para mantener sus equipos de seguridad en óptimas
                  condiciones, listos para actuar en caso de emergencia.
                </p>
              </div>
            </div>
          </div>
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

export default Servicio;
