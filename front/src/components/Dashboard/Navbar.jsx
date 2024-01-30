import React, { useState } from "react";
import User from "../../assets/img/avatar/avatar-illustrated-01.png";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal2);

const Navbar = () => {
  const Navigate = useNavigate();
  const CerraSesion = () => {
    MySwal.fire({
      title: "Cerrar Sesión",
      text: "Desea salir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, deseo salir!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Cerrando!",
          text: "Hasta pronto!",
          icon: "success",
        });
        setTimeout(() => {
          Navigate("/Dashboard/CerrarDash");
        }, 500);
      }
    });
  };

  const datos = JSON.parse(localStorage.getItem("user2"));
  return (
    <>
      <nav className="main-nav--bg fixed-top">
        <div className="container main-nav">
          <div className="main-nav-start"></div>
          <div className="main-nav-end">
            <span className="nav-user-img">
              <picture>
                <img src={User} alt="User name" />
              </picture>
            </span>
            <div className="sidebar-user-info">
              <span className="sidebar-user__title">
                {" "}
                {datos.nombre} {datos.apellido}
              </span>
            </div>
            <div className="nav-user-wrapper">
              <a className="danger" onClick={CerraSesion}>
                <span className="icon thumbnail" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
