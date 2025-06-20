import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import FavoritoComponent from "../components/FavoritoComponent";
import { eliminarProducto } from "../features/producto/productosSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Detalle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const productos = useSelector((state) => state.productos.productos);

  const producto = useMemo(() => {
    return productos.find((producto) => producto.id === Number(id));
  }, [id, productos]);

  if (!producto) {
    return (
      <section className="bg-light py-4" style={{ minHeight: "80vh" }}>
        <div className="container">
          <div
            className="mx-auto p-4 bg-white border border-1 border-secondary rounded-4 shadow-lg d-flex flex-column align-items-center justify-content-center"
            style={{ maxWidth: "500px", minHeight: "200px" }}
          >
            <div className="bi bi-exclamation-triangle-fill text-secondary fs-1 mb-3"></div>
            <div
              className="alert alert-secondary w-100 text-center mb-3"
              role="alert"
            >
              El producto a mostrar no existe.
            </div>
            <Link to="/">
              <button type="button" className="btn btn-dark btn-sm">
                Regresar
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const handleEliminar = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás deshacer esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      dispatch(eliminarProducto(producto.id));
      navigate("/");
      Swal.fire("Eliminado", "El producto ha sido eliminado.", "success");
    }
  };

  return (
    <section className="bg-light py-4" style={{ minHeight: "80vh" }}>
      <div className="container">
        <div
          className="mx-auto p-4 bg-white border border-1 border-dark rounded-4 shadow-lg"
          style={{ maxWidth: "900px" }}
        >
          <div className="card flex-md-row border-0 bg-transparent">
            <div
              className="d-flex align-items-center justify-content-center bg-secondary-subtle rounded-3"
              style={{
                minWidth: "260px",
                minHeight: "260px",
                maxWidth: "320px",
                maxHeight: "320px",
              }}
            >
              <img
                src={producto.imagen}
                className="img-fluid object-fit-contain"
                style={{
                  width: "220px",
                  height: "220px",
                  mixBlendMode: "multiply",
                }}
                alt={producto.nombre}
              />
            </div>
            <div className="card-body d-flex flex-column justify-content-between py-2 px-md-4">
              <div>
                <p>
                  <small className="text-body-secondary">
                    ID del producto: {producto.id}
                  </small>
                </p>
                <h3 className="fw-bold text-primary-emphasis">
                  {producto.nombre}
                </h3>
                <p className="mb-2">{producto.descripcion}</p>
                <div className="mb-2">
                  <span className="badge bg-primary-subtle text-primary-emphasis me-2">
                    {producto.categoria}
                  </span>
                  <span className="badge bg-warning-subtle text-warning-emphasis me-2">
                    ⭐ {producto.rating}
                  </span>
                  <span className="badge bg-success-subtle text-success-emphasis">
                    Stock: {producto.stock}
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <h4 className="fw-bold text-success mb-0">
                  ${producto.precio}
                </h4>
                <div className="ms-auto d-flex gap-2">
                  <Link to="/">
                    <button type="button" className="btn btn-primary btn-sm">
                      Volver
                    </button>
                  </Link>
                  <Link to={`/editar/${producto.id}`}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm px-2 py-1"
                    >
                      Editar
                    </button>
                  </Link>
                  <button
                    onClick={handleEliminar}
                    type="button"
                    className="btn btn-danger btn-sm px-2 py-1"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <FavoritoComponent producto={producto} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detalle;
