import React, { useState } from "react";
import extintor from "../../assets/images/extintores.jpg";
import llave from "../../assets/images/llavess.png";
import cerrojeria from "../../assets/images/cerrojeria.png";

import { NavLink } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <div className="hero mt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Bienvenido</h1>
                <p className="mb-4">
                  En Llaves y Extintores Penagos, somos la llave de confianza
                  para tu seguridad. Abrimos puertas con precisión y la
                  instalación de extintores. Tu tranquilidad es nuestra
                  prioridad. ¡Confía en nosotros para proteger lo que más
                  importa!
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section">
        <div className="container-sm">
          <div className="row">
            <div class="card-group">
              <div class="card mr-3 ">
                <img
                  src={cerrojeria}
                  className="card-img-top imagen"
                  alt="..."
                />
                <div className="card-body">
                  <h2 className="mb-4 section-title text-center">Cerrojeria</h2>
                  <p className="mb-4">
                    Instalación de nuevas cerraduras o reemplazo de cerraduras
                    existentes para mejorar la seguridad o en caso de pérdida de
                    llaves.{" "}
                  </p>
                </div>
              </div>
              <div className="card mr-3 ">
                <img src={llave} className="card-img-top imagen" alt="..." />
                <div className="card-body">
                  <h2 className="mb-4 section-title text-center">Llaves</h2>
                  <p className="mb-4">
                    Las llaves son elementos esenciales para el control de
                    acceso y la protección de propiedades y pertenencias. Se
                    utilizan en una variedad de entornos, desde el hogar y la
                    oficina hasta instalaciones industriales. Las llaves pueden
                    tener diseños y funciones diferentes, como llaves estándar,
                    llaves maestras.{" "}
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={extintor} className="card-img-top imagen" alt="..." />
                <div class="card-body">
                  <h2 className="mb-4 section-title text-center">Extintores</h2>
                  <p className="mb-4">
                    Los extintores son dispositivos de seguridad diseñados para
                    combatir y controlar incendios de manera rápida y eficiente.{" "}
                  </p>
                </div>
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

export default Inicio;
