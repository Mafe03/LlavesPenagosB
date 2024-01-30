import React, { useState } from "react";

const SobreNosotros = () => {
  return (
    <>
      <div className="hero mt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1 className="mb-4 mt-3">Sobre Nosotros</h1>
                <p className="mb-4" style={{ fontSize: "18px" }}>
                  En Llaves y Extintores Penagos, nos dedicamos a proporcionar
                  soluciones integrales para la seguridad y protección. Con años
                  de experiencia en la industria, nos hemos consolidado como
                  líderes en la venta de llaves y extintores, ofreciendo
                  productos de alta calidad y servicios excepcionales a nuestros
                  clientes.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section bg-light">
        <div className="container">
          <section className="container py-5">
            <h2 className="text-center mb-5">Nuestra Historia</h2>
            <p className="mb-4" style={{ fontSize: "18px" }}>
              Llaves y Extintores Penagos es una empresa familiar con una larga
              historia en el negocio de la seguridad. Desde nuestros humildes
              comienzos como una pequeña cerrajería, hemos crecido y
              diversificado nuestros servicios para convertirnos en líderes en
              la industria.
            </p>
            <p className="mb-4" style={{ fontSize: "18px" }}>
              Fundada en 1985 por Gildardo Penagos, nuestro enfoque siempre ha
              sido brindar soluciones de seguridad confiables y de alta calidad
              a nuestros clientes. A lo largo de los años, hemos expandido
              nuestras operaciones para incluir servicios de mantenimiento de
              extintores y otros equipos de seguridad.
            </p>
            <p className="mb-4" style={{ fontSize: "18px" }}>
              Nuestro compromiso con la excelencia y la satisfacción del cliente
              nos ha mantenido en la vanguardia de la industria. Continuamos
              sirviendo a nuestra comunidad con integridad y pasión, y esperamos
              seguir creciendo y adaptándonos para satisfacer las cambiantes
              necesidades de seguridad.
            </p>

            <div className="row card-container">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">Misión</h4>
                    <p className="card-text" style={{ fontSize: "16px" }}>
                      Nuestra misión es proporcionar productos y servicios de
                      alta calidad que satisfagan las necesidades de nuestros
                      clientes. Nos esforzamos por la excelencia en todo lo que
                      hacemos, desde la fabricación hasta la atención al
                      cliente, con un enfoque constante en la innovación y la
                      sostenibilidad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">Visión</h4>
                    <p className="card-text" style={{ fontSize: "16px" }}>
                      Nuestra visión es ser líderes en la industria, reconocidos
                      por nuestra integridad, compromiso con la calidad y
                      enfoque en la satisfacción del cliente. Buscamos expandir
                      nuestro alcance global y ser una fuente confiable de
                      soluciones innovadoras en el ámbito de las llaves y
                      extintores.
                    </p>
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

export default SobreNosotros;
