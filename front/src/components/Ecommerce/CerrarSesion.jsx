import UseAuth from "../../helper/UseAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cerrar = () => {
  const { setAutenticado } = UseAuth();
  const Navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    setAutenticado({});
    Navigate("/");
  });

  return (
    <>
      <h1>Cerrando sesion .....</h1>
    </>
  );
};

export default Cerrar;
