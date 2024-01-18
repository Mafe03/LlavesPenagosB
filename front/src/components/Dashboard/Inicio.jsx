import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditarUser from "./EditarUser";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Inicio = (props) => {
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
  };
  const handleShow2 = () => {
    setShow2(true);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Modal
        show={show2}
        onHide={handleClose2}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="gradient">
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar usuario
          </Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control border-secondary"
                id="idUsuario"
                name="idUsuario"
                placeholder="Cedula"
              />
              <label for="floatingInput">Cedula</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="nombres"
                name="nombres"
                placeholder="Nombres"
              />
              <label for="floatingInput">Nombres</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="apellidos"
                name="apellidos"
                placeholder="Apellidos"
              />
              <label for="floatingInput">Apellidos</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control border-secondary"
                id="telefono"
                name="telefono"
                placeholder="telefono"
              />
              <label for="floatingInput">Telefono</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control border-secondary"
                id="direccion"
                name="direccion"
                placeholder="Direccion"
              />
              <label for="floatingInput">Direccion</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control border-secondary"
                id="email"
                name="email"
                placeholder="Correo electronico"
              />
              <label for="floatingInput">Correo electronico</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control border-secondary"
                id="pass"
                name="pass"
                placeholder="Contraseña"
              />
              <label for="floatingPassword">Contraseña</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className=" btn-gradient2">
              <i class="fa-regular fa-rectangle-xmark"></i> Cerrar
            </button>
            <button className=" btn-gradient">
              <i class="fa-solid fa-floppy-disk"></i> Agregar
            </button>
          </Modal.Footer>
        </form>
      </Modal>
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title text-center">Usuarios</h2>
          <div className="col-12 text-end">
            <button onClick={handleShow2} className=" btn-gradient">
              <i class="bi bi-person-plus-fill"></i> Agregar usuario
            </button>
          </div>
          <div className="row stat-cards mt-4">
            <div className="col-md-6 col-xl-12">
              <table class="table  border border-black table-hover " id="tabla">
                <thead>
                  <tr id="tr">
                    <th>Cedula</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Telefono</th>
                    <th>Direccion</th>
                    <th>Correo electronico</th>
                    <th>Contraseña</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1114148261</td>
                    <td>Maria Fernanda</td>
                    <td>Villada Ballesteros</td>
                    <td>3007271180</td>
                    <td>calle 3</td>
                    <td>mafevillada030417@gmail.com</td>
                    <td>12345</td>
                    <td>
                      {" "}
                      <EditarUser
                        props={props}
                        show={show}
                        handleClose={handleClose}
                      ></EditarUser>
                      <a class="btn btn-app btn-gradient" onClick={handleShow}>
                        <i class="fas fa-edit"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="container footer--flex">
          <div class="footer-start">
            <p>
              2021 © Elegant Dashboard -{" "}
              <a
                href="elegant-dashboard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                elegant-dashboard.com
              </a>
            </p>
          </div>
          <ul class="footer-end">
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

export default Inicio;
