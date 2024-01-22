import React, { useState } from "react";
import User from "../../assets/img/avatar/avatar-illustrated-01.png";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logoLlaves.png";

const Aside = () => {
  const datos = JSON.parse(localStorage.getItem("user2"));
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-start">
          <div className="sidebar-head ">
            <a href="/Dashboard" className="logo-wrapper" title="Home">
              <span className="sr-only">Home</span>
              <img src={logo} alt="" width={"75%"} className="m-auto mt-2" />
            </a>
          </div>

          <div className="sidebar-body">
            <ul className="sidebar-body-menu">
              <li>
                <NavLink to="/Dashboard">
                  <span class="icon user-3" aria-hidden="true"></span>
                  Empleado
                </NavLink>
              </li>
              <li>
                <NavLink to="Categorias">
                  <span className="icon message" aria-hidden="true"></span>
                  Categorias
                </NavLink>
              </li>
              <li>
                <NavLink to="Productos">
                  <span className="icon dropbox" aria-hidden="true"></span>
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="Clientes">
                  <span className="icon user-3" aria-hidden="true"></span>
                  Clientes
                </NavLink>
              </li>
              <li>
                <NavLink to="MetodoPago">
                  <span className="icon folder" aria-hidden="true"></span>
                  Metodo de Pago
                </NavLink>
              </li>
              <li>
                <NavLink to="Pedidos">
                  <span className="icon google-drive" aria-hidden="true"></span>
                  Pedidos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <a href="##" className="sidebar-user">
            <span className="sidebar-user-img">
              <picture>
                <img src={User} />
              </picture>
            </span>
            <div className="sidebar-user-info">
              <span className="sidebar-user__title">
                {" "}
                {datos.nombre} {datos.apellido}
              </span>
              <span class="sidebar-user__subtitle">
                Empleado:{datos.idEmpleado}
              </span>
            </div>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Aside;
