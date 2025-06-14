import { useMemo } from "react"
import { useSelector } from "react-redux"
import { useLocation, Link } from "react-router-dom"
import FavoritoComponent from "../components/FavoritoComponent"

const ProductoComponent = () => {
    const productos = useSelector((state) => state.productos.productos)
    const favoritos = useSelector((state) => state.favoritos.favoritos)
    const location = useLocation()

    const mostrarFavoritos = useMemo(() => location.pathname === '/favoritos', [location.pathname])

    const productosAMostrar = useMemo(() => {
        return mostrarFavoritos ? favoritos : productos
    }, [mostrarFavoritos])

    if (productosAMostrar.length === 0) {
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-secondary" role="alert">
                            <p>No hay productos para mostrar.</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div className="container my-4">
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 gy-4">
                {productosAMostrar.map((producto) => (
                    <div className="col" key={producto.id}>
                        <div className="card shadow">
                            <img src={producto.imagen} className="card-img-top" />
                            <div className="card-body bg-body-secondary">
                                <h5 className="card-title"> {producto.nombre} </h5>
                                <p className="card-text"> {producto.descripcion} </p>
                                <div className="d-flex align-items-center">
                                    <h5 className="card-text"> ${producto.precio} </h5>
                                    <div className="ms-auto">
                                        <Link to={`/detalle/${producto.id}`}>
                                            <button type="button" className="btn btn-dark btn-sm me-1">Detalles</button>
                                        </Link>
                                        <button className="btn btn-dark btn-sm ms-1">Editar</button>
                                    </div>
                                </div>
                                <FavoritoComponent producto={producto} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductoComponent