import { useCallback } from "react";
import { useSelector } from "react-redux";

const FavoritoComponent = ({ producto }) => {
  const favoritos = useSelector((state) => state.favoritos.favoritos);

  const esFavorito = useCallback(
    (productoID) => {
      return favoritos.some((favorito) => favorito.id === productoID);
    },
    [favoritos]
  );

  // Renderizado básico con checkbox sin lógica dispatch aún
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={`checkbox-${producto.id}`}
        checked={esFavorito(producto.id)}
        // onChange queda para el próximo commit
      />
      <label className="form-check-label" htmlFor={`checkbox-${producto.id}`}>
        Marcar como favorito
      </label>
    </div>
  );
};

export default FavoritoComponent;
