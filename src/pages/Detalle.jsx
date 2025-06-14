import { useMemo } from "react"
import { useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import FavoritoComponent from "../components/FavoritoComponent"

const Detalle = () => {
    const { id } = useParams()
    const productos = useSelector((state) => state.productos.productos)

    const producto = useMemo(() => {
        return productos.find((producto) => producto.id === Number(id))
    }, [id, productos])

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
        )
    }

    return (
        <section>
            <div className="container my-4">
                <div className="row g-0 border border-1 border-dark-subtle rounded shadow">
                    <div className="col-md-4">
                        <img
                            src={producto.imagen}
                            className="img-fluid h-100 w-100 object-fit-cover rounded"
                            alt={producto.nombre}
                        />
                    </div>
                    <div className="col-md-8 px-3 py-2 bg-body-secondary">
                        <p>
                            <small className="text-body-secondary">
                                ID del producto: {producto.id}
                            </small>
                        </p>
                        <h5> {producto.nombre} </h5>
                        <p> {producto.descripcion} </p>
                        <p> Categoria: {producto.categoria} </p>
                        <p> Rating: {producto.rating} </p>
                        <p> Stock: {producto.stock} </p>
                        <div className="d-flex align-items-center my-2">
                            <h5> ${producto.precio} </h5>
                            <div className="ms-auto">
                                <Link to="/">
                                    <button type="button" className="btn btn-dark btn-sm me-1">
                                        Volver
                                    </button>
                                </Link>
                                <button className="btn btn-dark btn-sm ms-1">Editar</button>
                            </div>
                        </div>
                        <FavoritoComponent producto={producto} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detalle
