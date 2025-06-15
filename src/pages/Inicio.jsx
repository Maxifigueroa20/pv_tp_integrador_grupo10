import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductos } from "../features/producto/productosSlice"
import ProductoComponent from "../components/ProductoComponent"

const Inicio = () => {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.productos.status)
    const error = useSelector((state) => state.productos.error)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductos())
        }
    }, [dispatch, status])

    if (status === 'loading') {
        return (
            <section className="bg-light py-4" style={{ minHeight: "80vh" }}>
                <div className="container">
                    <div className="mx-auto p-4 bg-white border border-1 border-dark rounded-4 shadow-lg d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: "500px", minHeight: "200px" }}>
                        <div className="spinner-border text-primary mb-3" role="status" aria-hidden="true"></div>
                        <p className="mb-0 fw-semibold text-primary-emphasis">Cargando productos...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (status === 'failed') {
        return (
            <section className="bg-light py-4" style={{ minHeight: "80vh" }}>
                <div className="container">
                    <div className="mx-auto p-4 bg-white border border-1 border-danger rounded-4 shadow-lg d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: "500px", minHeight: "200px" }}>
                        <div className="bi bi-exclamation-triangle-fill text-danger fs-1 mb-3"></div>
                        <div className="alert alert-danger w-100 text-center mb-0" role="alert">
                            <p className="mb-0">Error al cargar los productos: {error}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="bg-light py-4">
            <div className="container">
                <div className="mx-auto p-4 bg-white border border-1 border-dark rounded-4 shadow-lg" style={{ maxWidth: "1200px" }}>
                    <h2 className="text-center mb-4 fw-bold text-primary-emphasis">Productos Disponibles</h2>
                    <ProductoComponent />
                </div>
            </div>
        </section>
    )
}

export default Inicio