import React, { useState, useEffect } from "react";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal2);

const Pedidos = () => {
  const [pedidos, SetPedidos] = useState([]);
  const token = localStorage.getItem("token2");

  const Listar = async () => {
    const request = await fetch("http://localhost:3600/encabezado/listar", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    console.log(data);
    SetPedidos(data.mensaje);
  };

  useEffect(() => {
    Listar();
  }, []);

  const Agregar = (id) => {
    MySwal.fire({
      title: `¿Deseas confirmar el pedidio #${id}?`,
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:3600/encabezado/editarEstado/${id}`, {
          method: "PUT", // Método de solicitud (puede ser GET, POST, etc.)
          headers: {
            Authorization: `${token}`, // Incluye el token JWT en el encabezado Authorization
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.id == 200) {
              MySwal.fire({
                title: <strong>Felicitaciones</strong>,
                html: <i>El pedido a sido confirmado con exito</i>,
                icon: "success",
              });
              Listar();
            }
          });
      }
    });
  };
  return (
    <>
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title text-center">Pedidos</h2>
          <div className="row stat-cards mt-4">
            <div className="col-md-6 col-xl-12">
              <div className="container-fluid">
                <table className="table  border border-black table-hover ">
                  <thead>
                    <tr id="tr">
                      <th id="th">Nro Pedido</th>
                      <th id="th">Fecha y Hora</th>
                      <th id="th">Total</th>
                      <th id="th">Estado</th>
                      <th id="th">Cliente</th>
                      <th id="th">Metodo de pago</th>
                      <th id="th">Cambiar estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pedidos.map((pedido) => {
                      return (
                        <tr>
                          <th scope="row">{pedido.idEncabezado}</th>
                          <td>{pedido.fechaHora}</td>
                          <td>
                            {pedido.total.toLocaleString("en-US", {
                              thousandsSeparator: ".",
                            })}
                          </td>
                          <td>
                            {pedido.idEstado === 0 ? "Pendiente" : "Enviado"}
                          </td>
                          <td>{pedido.nombre + " " + pedido.apellido}</td>
                          <td>{pedido.descripcion}</td>
                          <td id="th">
                            {" "}
                            <a
                              className="btn btn-app btn-gradient2"
                              onClick={() => {
                                Agregar(pedido.idEncabezado);
                              }}
                            >
                              <i className="fas fa-edit"></i>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container footer--flex">
          <div className="footer-start">
            <p>
              2021 © Llaves y Extintores Penagos-{" "}
              <a
                href="elegant-dashboard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                llavesyextintorespenagos.com
              </a>
            </p>
          </div>
          <ul className="footer-end">
            <li>
              <a href="##">About</a>
            </li>
            <li>
              <a href="##">Support</a>
            </li>
            <li>
              <a href="##">Puchase</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Pedidos;
