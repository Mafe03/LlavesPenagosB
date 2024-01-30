import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import HelperForm from "../../helper/HelperForm";
import Swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(Swal2);

const EditarProducto = ({
  props,
  show,
  handleClose,
  id,
  nombre,
  precio,
  cantidad,
  descripcion,
  setEditar,
  listarProducto,
}) => {
  const [datos, Setdatos] = useState([]);
  const token = localStorage.getItem("token2");
  const ListarCate = async (e) => {
    const request = await fetch("http://localhost:3600/categorias/listar", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });

    const data = await request.json();
    console.log(data);
    Setdatos(data.mensaje);
  };

  useEffect(() => {
    ListarCate();
  }, []);

  const Editar = async (e) => {
    e.preventDefault();
    let nombre = document.querySelector("#nombre");
    let precio = document.querySelector("#precio");
    let cantidad = document.querySelector("#cantidad");
    let descripcion = document.querySelector("#descripcion");
    let idCategoria = document.querySelector("#idCategoria");
    let imagen = document.querySelector("#imagen");
    if (
      nombre.value.length > 0 &&
      precio.value.length > 0 &&
      cantidad.value.length > 0 &&
      descripcion.value.length > 0 &&
      idCategoria.value.length > 0 &&
      imagen.files[0] !== undefined
    ) {
      const formData = new FormData();
      formData.append("nombre", nombre.value);
      formData.append("precio", precio.value);
      formData.append("cantidad", cantidad.value);
      formData.append("descripcion", descripcion.value);
      formData.append("idCategoria", idCategoria.value);
      formData.append("imagen", imagen.files[0]);
      fetch("http://localhost:3600/productos/editar/" + id, {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          if (res.id == 200) {
            Swal.fire({
              title: <strong> {"Editado"}</strong>,
              html: <i>{res.mensaje}</i>,
              icon: "success",
            });
            nombre.value = "";
            precio.value = "";
            cantidad.value = "";
            descripcion.value = "";
            setEditar(0);
            listarProducto();
          } else {
            Swal.fire({
              title: <strong> {"Error"}</strong>,
              html: <i>{res.mensaje}</i>,
              icon: "error",
            });
          }
        });
    } else {
      Swal.fire({
        title: <strong> {"Error"}</strong>,
        html: <i>{"No deje Campos Vacios"}</i>,
        icon: "error",
      });
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
            Editar producto
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={Editar}>
          <Modal.Body>
            <div className="mb-2">
              <label className="form-label">Nombre producto</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="nombre"
                name="nombre"
                defaultValue={nombre}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">precio</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="precio"
                name="precio"
                defaultValue={precio}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Cantidad</label>
              <input
                type="number"
                className="form-control border-secondary"
                id="cantidad"
                name="cantidad"
                defaultValue={cantidad}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Descripcion</label>
              <input
                type="text"
                className="form-control border-secondary"
                id="descripcion"
                name="descripcion"
                defaultValue={descripcion}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Categoria</label>
              <select
                type="text"
                className="form-control border-secondary"
                id="idCategoria"
                name="idCategoria"
                placeholder="Categoria"
              >
                {datos.map((cate) => {
                  return (
                    <option value={cate.idCategoria}>
                      {cate.descripCategoria}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-2">
              <label className="form-label">Imagen</label>
              <input
                type="file"
                className="form-control border-secondary"
                id="imagen"
                name="imagen"
                placeholder="Imagen"
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

export default EditarProducto;
