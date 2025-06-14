import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  agregarFavorito,
  eliminarFavorito,
} from "../features/favoritos/favoritosSlice";

const FavoritoComponent = ({ producto }) => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favoritos.favoritos);

  const esFavorito = useCallback(
    (productoID) => {
      return favoritos.some((favorito) => favorito.id === productoID);
    },
    [favoritos]
  );

  const handleFavorito = (producto) => {
    if (esFavorito(producto.id)) {
      dispatch(eliminarFavorito(producto));
    } else {
      dispatch(agregarFavorito(producto));
    }
  };

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={`checkbox-${producto.id}`}
        checked={esFavorito(producto.id)}
        onChange={() => handleFavorito(producto)}
      />
      <label className="form-check-label" htmlFor={`checkbox-${producto.id}`}>
        Marcar como favorito
      </label>
    </div>
  );
};

export default FavoritoComponent;
