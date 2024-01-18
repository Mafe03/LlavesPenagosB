import React, { useState } from "react";
import Aside from "./Aside";
import Navbar from "./Navbar";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helper/UseAuthDash";

const LayoutDash = () => {
  const { Autenticado } = UseAuth();
  return (
    <>
      <div className="page-flex">
        <Aside />
        <div className="main-wrapper">
          <Navbar />
          {Autenticado.idEmpleado ? <Outlet /> : <Navigate to={"/LoginDash"} />}
        </div>
      </div>
    </>
  );
};

export default LayoutDash;
