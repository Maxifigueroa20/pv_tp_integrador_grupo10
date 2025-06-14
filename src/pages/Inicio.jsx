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
    return <div className="container my-4"><p>Cargando productos...</p></div>
  }

  if (status === 'failed') {
    return (
      <div className="container my-4">
        <div className="alert alert-danger" role="alert">
          <p>Error al cargar los productos: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <section>
      <h2>Productos Disponibles</h2>
      <ProductoComponent />
    </section>
  )
}

export default Inicio