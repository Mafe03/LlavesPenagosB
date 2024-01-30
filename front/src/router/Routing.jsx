import React, { useState } from "react";
import LayoutDash from "../components/Dashboard/LayoutDash";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../components/Dashboard/Inicio";
import Categorias from "../components/Dashboard/Categorias";
import Productos from "../components/Dashboard/Productos";
import MetodoPago from "../components/Dashboard/MetodoPago";
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
import Cerrar from "../components/Ecommerce/CerrarSesion";
import SobreNosotros from "../components/Ecommerce/SobreNosotros";
import CerrarSesionDash from "../components/Dashboard/CerrarSesionDash";
import Clientes from "../components/Dashboard/Clientes";
import Pedidos from "../components/Dashboard/Pedidos";
import Factura from "../components/Ecommerce/Factura";
import Perfil from "../components/Ecommerce/Perfil";

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
              <Route path="Factura" element={<Factura />} />
              <Route path="Perfil" element={<Perfil />} />
              <Route path="Nosotros" element={<SobreNosotros />} />
              <Route path="Cerrar" element={<Cerrar />} />
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
              <Route path="Clientes" element={<Clientes />} />
              <Route path="MetodoPago" element={<MetodoPago />} />
              <Route path="Pedidos" element={<Pedidos />} />
              <Route path="CerrarDash" element={<CerrarSesionDash />} />
            </Route>
          </Routes>
        </AuthProviderDash>
      </BrowserRouter>
    </>
  );
};

export default Routing;
