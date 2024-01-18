import React from "react";
import { useState, useEffect, createContext } from "react";

const AuthContextDash = createContext();
export const AuthProviderDash = ({ children }) => {
  const [Autenticado, setAutenticado] = useState({});
  useEffect(() => {
    autenticarUsuario();
  }, []);

  /**
   
Compara que el token sea valido
@returns objeto serializado de la comparacion de localstorage vs api*/
  const autenticarUsuario = async () => {
    //obtener datos del usuario logueado
    const token = localStorage.getItem("token2");
    const user = localStorage.getItem("user2");

    // validamos que los datos existan en el localstorage
    if (!token || !user) {
      return false;
    }
    // si existen los transformamos en objeto javascript para manipular el ID del usuario
    const userObj = JSON.parse(user);
    const id = userObj.idEmpleado;
    //console.log(id);
    // Comprobacion del token del localstorage vs el del Backend
    try {
      const request = await fetch(
        "http://localhost:3600/empleado/listarUno/" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      //console.log(request);
      if (request.status === 400) {
        return false;
      } else {
        const data = await request.json();
        //console.log("LA DATA", data);
        setAutenticado(data.mensaje[0]);
      }
    } catch (error) {
      //console.log("OCURRIO UN ERROR");
    }
  };

  //=======================================================================================================
  return (
    <AuthContextDash.Provider value={{ Autenticado, setAutenticado }}>
      {children}
    </AuthContextDash.Provider>
  );
};

export default AuthContextDash;
