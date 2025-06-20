import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  agregarProducto,
  actualizarProducto,
} from "../features/producto/productosSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function FormularioProducto() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const producto = useSelector((state) =>
    state.productos.productos.find((p) => p.id === Number(id))
  );

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      nombre: "",
      precio: "",
      descripcion: "",
      categoria: "",
      imagen: "",
      stock: "",
      rating: "",
    },
  });

  useEffect(() => {
    if (producto) {
      reset({
        nombre: producto.nombre,
        precio: producto.precio,
        descripcion: producto.descripcion,
        categoria: producto.categoria,
        imagen: producto.imagen,
        stock: producto.stock,
        rating: producto.rating,
      });
    }
  }, [producto, reset]);

  const onSubmit = (data) => {
    if (producto) {
      dispatch(actualizarProducto({ ...data, id: producto.id }));
    } else {
      const nuevoProducto = {
        ...data,
        id: Date.now(),
      };
      dispatch(agregarProducto(nuevoProducto));
    }
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>{producto ? "Editar Producto" : "Crear Producto"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            className="form-control"
            {...register("nombre", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            {...register("precio", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            {...register("descripcion", { required: true })}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <input
            className="form-control"
            {...register("categoria", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen (URL)</label>
          <input
            className="form-control"
            {...register("imagen", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            {...register("stock", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            type="number"
            step="0.1"
            className="form-control"
            {...register("rating", { required: true, min: 0, max: 5 })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {producto ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
}
