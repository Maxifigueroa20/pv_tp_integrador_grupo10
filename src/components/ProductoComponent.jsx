import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import FavoritoComponent from "./FavoritoComponent";

const ProductoComponent = () => {
  const productos = useSelector((state) => state.productos.productos);
  const favoritos = useSelector((state) => state.favoritos.favoritos);
  const location = useLocation();

  const mostrarFavoritos = useMemo(
    () => location.pathname === "/favoritos",
    [location.pathname]
  );

  const productosAMostrar = useMemo(() => {
    return mostrarFavoritos ? favoritos : productos;
  }, [mostrarFavoritos, favoritos]);

  if (productosAMostrar.length === 0) {
    return (
      <section className="py-4 min-vh-50">
        <div className="container">
          <div
            className="mx-auto p-4 bg-white border border-1 border-secondary rounded-4 shadow-lg d-flex flex-column align-items-center justify-content-center"
            style={{ maxWidth: "500px", minHeight: "200px" }}
          >
            <div className="bi bi-box-seam text-secondary fs-1 mb-3"></div>
            <div
              className="alert alert-secondary w-100 text-center mb-0"
              role="alert"
            >
              <p className="mb-0">No hay productos para mostrar.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="container my-4">
      <div className="row g-3">
        {productosAMostrar.map((producto) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={producto.id}>
            <div className="card h-100 shadow border-1 position-relative overflow-hidden">
              <div
                className="d-flex justify-content-center align-items-center bg-secondary-subtle"
                style={{ height: "140px" }}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-fluid object-fit-contain"
                  style={{
                    width: "100px",
                    height: "100px",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <div className="card-body p-2">
                <h6
                  className="card-title mb-1 text-truncate"
                  title={producto.nombre}
                >
                  {producto.nombre}
                </h6>
                <div className="d-flex align-items-center mb-2">
                  <span className="fw-bold text-success small">
                    ${producto.precio}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <Link to={`/detalle/${producto.id}`}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm px-2 py-1"
                    >
                      Ver detalles
                    </button>
                  </Link>
                </div>
                <FavoritoComponent producto={producto} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductoComponent;
