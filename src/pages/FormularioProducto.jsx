import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { agregarProducto, actualizarProducto } from "../features/producto/productosSlice"

export default function FormularioProducto() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const producto = useSelector(state => state.productos.productos.find(p => p.id === Number(id)))

    const { register, handleSubmit, reset, formState: { errors, touchedFields }, getValues } = useForm({
        defaultValues: {
            nombre: "",
            precio: "",
            descripcion: "",
            categoria: "",
            imagen: "",
            stock: "",
            rating: ""
        },
        reValidateMode: "onChange"
    })

    useEffect(() => {
        if (producto) {
            reset({
                nombre: producto.nombre,
                precio: producto.precio,
                descripcion: producto.descripcion,
                categoria: producto.categoria,
                imagen: producto.imagen,
                stock: producto.stock,
                rating: producto.rating
            })
        } else {
            reset({
                nombre: "",
                precio: "",
                descripcion: "",
                categoria: "",
                imagen: "",
                stock: "",
                rating: ""
            })
        }
    }, [producto, reset, id])

    const onSubmit = data => {
        if (producto) {
            dispatch(actualizarProducto({ ...data, id: producto.id }))
        } else {
            const nuevoProducto = { ...data, id: Date.now() }
            dispatch(agregarProducto(nuevoProducto))
        }
        navigate("/")
    }

    // Helper para clases de validación mejorado
    const inputClass = (name) => {
        if (errors[name]) return "form-control is-invalid"
        if (touchedFields[name]) {
            const value = getValues(name)
            if (typeof value === "string" && value.trim() !== "") return "form-control is-valid"
            if (typeof value === "number" && value !== undefined && value !== null && value !== "") return "form-control is-valid"
        }
        return "form-control"
    }

    return (
        <section className="bg-light py-4" style={{ minHeight: "80vh" }}>
            <div className="container">
                <div className="mx-auto p-3 bg-white border border-1 border-dark rounded-4 shadow-lg" style={{ maxWidth: "800px" }}>
                    <h2 className={`text-center mb-4 fw-bold ${producto ? "text-primary-emphasis" : "text-success-emphasis"}`}>
                        {producto ? "Editar Producto" : "Crear Producto"}
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
                        <div className="row g-3">
                            <div className="col-12 col-md-4">
                                <label className="form-label fw-semibold">Imagen (URL)</label>
                                <input type="text" className={inputClass("imagen")} {...register("imagen", { required: "La imagen es obligatoria" })} placeholder="https://..." />
                                {errors.imagen && <span className="invalid-feedback">{errors.imagen.message}</span>}
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label fw-semibold">Nombre</label>
                                <input type="text" className={inputClass("nombre")} {...register("nombre", { required: "El nombre es obligatorio" })} placeholder="Nombre del producto" />
                                {errors.nombre && <span className="invalid-feedback">{errors.nombre.message}</span>}
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label fw-semibold">Precio</label>
                                <input type="number" step="1.00" className={inputClass("precio")} {...register("precio", { required: "El precio es obligatorio" })} placeholder="0.00" />
                                {errors.precio && <span className="invalid-feedback">{errors.precio.message}</span>}
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label fw-semibold">Categoría</label>
                                <input type="text" className={inputClass("categoria")} {...register("categoria", { required: "La categoría es obligatoria" })} placeholder="Categoría" />
                                {errors.categoria && <span className="invalid-feedback">{errors.categoria.message}</span>}
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label fw-semibold">Rating</label>
                                <input type="number" step="0.1" className={inputClass("rating")} {...register("rating", { required: "El rating es obligatorio", min: 0, max: 5 })} placeholder="0-5" />
                                {errors.rating && <span className="invalid-feedback">{errors.rating.message}</span>}
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label fw-semibold">Stock</label>
                                <input type="number" className={inputClass("stock")} {...register("stock", { required: "El stock es obligatorio" })} placeholder="Cantidad" />
                                {errors.stock && <span className="invalid-feedback">{errors.stock.message}</span>}
                            </div>
                            <div className="col-12">
                                <label className="form-label fw-semibold">Descripción</label>
                                <textarea className={inputClass("descripcion")} {...register("descripcion", { required: "La descripción es obligatoria" })} rows={2} placeholder="Descripción del producto"></textarea>
                                {errors.descripcion && <span className="invalid-feedback">{errors.descripcion.message}</span>}
                            </div>
                            <div className="col-12 d-flex justify-content-center mt-3">
                                <button type="submit" className="btn btn-primary fw-bold px-5 py-2 shadow-sm" style={{ fontSize: "1.1rem" }}>
                                    {producto ? "Actualizar" : "Crear"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}