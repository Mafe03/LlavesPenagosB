import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditarProducto from "./EditarProducto";

const Productos = (props) => {
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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <main className="main users chart-page" id="skip-target">
        <div className="container">
          <h2 className="main-title text-center">Productos</h2>
          <div className="col-12 text-end">
            <button onClick={handleShow2} className=" btn-gradient">
              <i class="bi bi-person-plus-fill"></i> Agregar producto
            </button>
          </div>
          <div className="row stat-cards mt-4">
            <div className="col-md-6 col-xl-12">
              <table class="table  border border-black table-hover ">
                <thead>
                  <tr id="tr">
                    <th>ID Producto</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Descripcion</th>
                    <th>Categoria</th>
                    <th>Imagen</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1114148261</td>
                    <td>Maria Fernanda</td>
                    <td>Villada Ballesteros</td>
                    <td>3007271180</td>
                    <td>mafevillada030417@gmail.com</td>
                    <td>12345</td>
                    <td>12345</td>
                    <td>
                      {" "}
                      <EditarProducto
                        props={props}
                        show={show}
                        handleClose={handleClose}
                      ></EditarProducto>
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

export default Productos;
