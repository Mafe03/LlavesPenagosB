import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helper/UseAuth";

const LayaoutEco = () => {
  const { Autenticado } = UseAuth();
  return (
    <>{!Autenticado.idUsuario ? <Outlet /> : <Navigate to={"/Ecommerce"} />}</>
  );
};

export default LayaoutEco;
