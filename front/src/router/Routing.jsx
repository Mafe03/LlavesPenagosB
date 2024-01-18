import React, { useState } from "react";
import LayoutDash from "../components/Dashboard/LayoutDash";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../components/Dashboard/Inicio";
import Categorias from "../components/Dashboard/Categorias";
import Productos from "../components/Dashboard/Productos";
import Servicios from "../components/Dashboard/Servicios";
import MetodoPago from "../components/Dashboard/MetodoPago";
import Reportes from "../components/Dashboard/Reportes";
import LayoutE from "../components/Ecommerce/LayoutE";
import InicioE from "../components/Ecommerce/Inicio";
import ProductosE from "../components/Ecommerce/Productos";
import Servicio from "../components/Ecommerce/Servicio";
import Carrito from "../components/Ecommerce/Carrito";
import Pago from "../components/Ecommerce/Pago";
import LoginDash from "../components/Public/LoginDash";
import LoginEco from "../components/Public/LoginEco";
import Registro from "../components/Public/Registro";
import { AuthProvider } from "../context/AuthProvider";
import LayaoutEco from "../components/Public/LayaoutEco";
import { AuthProviderDash } from "../context/AuthProviderDash";
import LayaoutDashboard from "../components/Public/LayaoutDash";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LayaoutEco />}>
              <Route index element={<LoginEco />}></Route>
              <Route path="/Registro" element={<Registro />}></Route>
            </Route>
            <Route path="/Ecommerce" element={<LayoutE />}>
              <Route index element={<InicioE />} />
              <Route path="Producto" element={<ProductosE />} />
              <Route path="Servicio" element={<Servicio />} />
              <Route path="Carrito" element={<Carrito />} />
              <Route path="PasarelaPago" element={<Pago />} />
            </Route>
          </Routes>
        </AuthProvider>
        <AuthProviderDash>
          <Routes>
            <Route path="/LoginDash" element={<LayaoutDashboard />}>
              <Route index element={<LoginDash />}></Route>
            </Route>
            <Route path="/Dashboard" element={<LayoutDash />}>
              <Route index element={<Inicio />} />
              <Route path="Categorias" element={<Categorias />} />
              <Route path="Productos" element={<Productos />} />
              <Route path="Servicios" element={<Servicios />} />
              <Route path="MetodoPago" element={<MetodoPago />} />
              <Route path="Reportes" element={<Reportes />} />
            </Route>
          </Routes>
        </AuthProviderDash>
      </BrowserRouter>
    </>
  );
};

export default Routing;
