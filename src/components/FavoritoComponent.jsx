import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { agregarFavorito, eliminarFavorito } from "../features/favoritos/favoritosSlice"

const FavoritoComponent = ({ producto }) => {
    const dispatch = useDispatch()
    const favoritos = useSelector((state) => state.favoritos.favoritos)

    const esFavorito = useCallback((productoID) => {
        return favoritos.some((favorito) => favorito.id === productoID)
    }, [favoritos])

    const handleFavorito = (producto) => {
        if (esFavorito(producto.id)) {
            dispatch(eliminarFavorito(producto))
        } else {
            dispatch(agregarFavorito(producto))
        }
    }

    return (
        <button
            type="button"
            className="btn btn-link p-0 position-absolute top-0 end-0 m-2"
            onClick={() => handleFavorito(producto)}
        >
            <i className={`bi ${esFavorito(producto.id) ? "bi-heart-fill text-danger" : "bi-heart text-secondary"}`} style={{ fontSize: "1.5rem" }}></i>
        </button>
    )
}

export default FavoritoComponent
