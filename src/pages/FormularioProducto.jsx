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

  return <div></div>;
}
