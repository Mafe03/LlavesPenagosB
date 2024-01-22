import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import HelperForm from "../../helper/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(Swal2);

const EditarCliente = ({
  props,
  show,
  handleClose,
  id,
  nombre,
  apellido,
  telefono,
  direccion,
  email,
  setEditar,
  listarCliente,
}) => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token2");

  const EditarEmple = async (e) => {
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const celular = document.querySelector("#telefono");
    const direccion = document.querySelector("#direccion");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");
    e.preventDefault();
    let formulario = form;
    const request = await fetch(`http://localhost:3600/usuarios/editar/${id}`, {
      method: "PUT",
      body: JSON.stringify(formulario),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await request.json();
    if (data.id == 200) {
      let mensaje = data.mensaje;
      Swal.fire({
        title: <strong> {"Editado"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "success",
      });
      setEditar(0);
      listarCliente();
    } else {
      let mensaje = data.mensaje;
      Swal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
      nombre.value = "";
      apellido.value = "";
      celular.value = "";
      direccion.value = "";
      email.value = "";
      pass.value = "";
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="gradient">
          <Modal.Title id="contained-modal-title-vcenter">
            Editar cliente
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={EditarEmple}>
          <Modal.Body>
            <div className="mb-2">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="nombre"
                name="nombre"
                onChange={cambiar}
                defaultValue={nombre}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="apellido"
                name="apellido"
                onChange={cambiar}
                defaultValue={apellido}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Telefono</label>
              <input
                type="number"
                className="form-control border-secondary"
                id="telefono"
                name="telefono"
                onChange={cambiar}
                defaultValue={telefono}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Direccion</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="direccion"
                name="direccion"
                onChange={cambiar}
                defaultValue={direccion}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Correo electronico</label>
              <input
                type="email"
                className="form-control border-secondary"
                id="email"
                name="email"
                onChange={cambiar}
                defaultValue={email}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Contraseña cliente</label>
              <input
                type="password"
                className="form-control border-secondary"
                id="pass"
                name="pass"
                onChange={cambiar}
                required
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
           
            <button type="submit" className=" btn-gradient">
              <i className="fas fa-edit"></i> Editar
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default EditarCliente;
