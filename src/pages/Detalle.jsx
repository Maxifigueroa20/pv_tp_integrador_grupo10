import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Detalle = () => {
  const { id } = useParams();
  const productos = useSelector((state) => state.productos.productos);

  const producto = useMemo(() => {
    return productos.find((producto) => producto.id === parseInt(id));
  }, [id, productos]);

  if (!producto) {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <div className="alert alert-secondary" role="alert">
              <p>El producto a mostrar no existe.</p>
              <Link to="/">
                <button type="button" className="btn btn-dark btn-sm me-1">
                  Regresar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section>
      {/* La parte visual detallada y FavoritoComponent queda para el siguiente commit */}
    </section>
  );
};

export default Detalle;
