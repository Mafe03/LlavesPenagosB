import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-start">
          <div className="sidebar-head">
            <a href="/Dashboard" className="logo-wrapper" title="Home">
              <span className="sr-only">Home</span>
              <span className="icon logo" aria-hidden="true"></span>
              <div className="logo-text">
                <span className="logo-title">Llaves y Extintores</span>
                <span className="logo-subtitle">Penagos</span>
              </div>
            </a>
            <button
              className="sidebar-toggle transparent-btn"
              title="Menu"
              type="button"
            >
              <span className="sr-only">Toggle menu</span>
              <span className="icon menu-toggle" aria-hidden="true"></span>
            </button>
          </div>
          <div className="sidebar-body">
            <ul className="sidebar-body-menu">
              <li>
                <NavLink to="/Dashboard">
                  <span className="icon home" aria-hidden="true"></span>
                  Usuario
                </NavLink>
              </li>
              <li>
                <NavLink to="Categorias">
                  <span className="icon home" aria-hidden="true"></span>
                  Categorias
                </NavLink>
              </li>
              <li>
                <NavLink to="Productos">
                  <span className="icon folder" aria-hidden="true"></span>
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="Servicios">
                  <span className="icon paper" aria-hidden="true"></span>
                  Servicio
                </NavLink>
              </li>
              <li>
                <NavLink to="MetodoPago">
                  <span className="icon image" aria-hidden="true"></span>Metodo
                  de Pago
                </NavLink>
              </li>
              <li>
                <NavLink to="Reportes">
                  <span className="icon message" aria-hidden="true"></span>
                  Reportes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <a href="##" className="sidebar-user">
            <span className="sidebar-user-img">
              <picture>
                <source
                  srcset="./img/avatar/avatar-illustrated-01.webp"
                  type="image/webp"
                />
                <img
                  src="./img/avatar/avatar-illustrated-01.png"
                  alt="User name"
                />
              </picture>
            </span>
            <div className="sidebar-user-info">
              <span className="sidebar-user__title">Nafisa Sh.</span>
              <span className="sidebar-user__subtitle">Support manager</span>
            </div>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Aside;
