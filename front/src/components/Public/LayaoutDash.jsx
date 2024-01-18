import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UseAuth from "../../helper/UseAuthDash";

const LayaoutDashboard = () => {
  const { Autenticado } = UseAuth();
  return (
    <>{!Autenticado.idEmpleado ? <Outlet /> : <Navigate to={"/Dashboard"} />}</>
  );
};

export default LayaoutDashboard;
