import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import HelperForm from "../../helper/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Swal = withReactContent(Swal2);

const EditarMetodoPago = ({
  props,
  show,
  handleClose,
  id,
  metodo,
  setEditar,
  listarMetodop,
}) => {
  const { form, cambiar } = HelperForm({});
  const token = localStorage.getItem("token2");
  const Editar = async (e) => {
    const metodo = document.querySelector("#descripcion");
    e.preventDefault();
    let formulario = form;
    const request = await fetch(`http://localhost:3600/metodop/editar/${id}`, {
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
      metodo.value = "";
      setEditar(0);
      listarMetodop();
    } else {
      let mensaje = data.mensaje;
      Swal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{mensaje}</i>,
        icon: "error",
      });
      metodo.value = "";
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
            Editar metodo de pago
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={Editar}>
          <Modal.Body>
            <div className="mb-2">
              <label className="form-label">Metodo de pago</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="descripcion"
                name="descripcion"
                onChange={cambiar}
                defaultValue={metodo}
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

export default EditarMetodoPago;
