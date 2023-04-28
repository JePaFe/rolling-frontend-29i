import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Productos() {
  const [productos, setProductos] = useState([]);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const getProductos = () => {
    axios
      .get("http://localhost:3000/api/productos")
      .then((res) => setProductos(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductos();
  }, []);

  const destroy = (id) => {
    if (confirm("¿Esta seguro?")) {
      axios
        .delete(`http://localhost:3000/api/productos/${id}`)
        .then((res) => {
          console.log(res);
          getProductos();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const buscar = () => {
    if (search == "") {
      getProductos();
    } else {
      axios
        .get(`http://localhost:3000/api/productos/search/${search}`)
        .then((res) => setProductos(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Productos</h1>
        <Link to="/productos/create" className="btn btn-primary btn-sm">
          Crear
        </Link>
      </div>

      <div class="input-group mb-3">
        <input
          type="search"
          class="form-control"
          name="search"
          value={search}
          onChange={handleChangeSearch}
        />
        <button
          class="btn btn-outline-secondary"
          onClick={buscar}
          type="button"
        >
          Buscar
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productos &&
            productos.map((producto) => (
              <tr key={producto._id}>
                <td>{producto.nombre}</td>
                <td>$ {producto.precio}</td>
                <td>
                  <img
                    src={`http://localhost:3000/img/productos/${producto.imagen}`}
                    width={100}
                    alt={producto.nombre}
                  />
                </td>
                <td>
                  <div class="btn-group" role="group">
                    <Link
                      to={`/productos/edit/${producto._id}`}
                      class="btn btn-sm btn-danger"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => destroy(producto._id)}
                      type="button"
                      class="btn btn-sm btn-success"
                    >
                      Borrar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;
