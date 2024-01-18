import React, { useState } from "react";
import Navbar from "../Ecommerce/NavbarE";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helper/UseAuth";

const LayoutE = () => {
  const { Autenticado } = UseAuth();
  return (
    <>
      <body>
        <Navbar />
        {Autenticado.idUsuario ? <Outlet /> : <Navigate to={"/"} />}
      </body>
    </>
  );
};

export default LayoutE;
