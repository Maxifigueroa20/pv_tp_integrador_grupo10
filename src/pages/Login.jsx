import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
import { login } from "../features/autenticacion/authSlice"

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || []
        const user = users.find(u => u.email === data.email && u.password === data.password)
        if (user) {
            dispatch(login({ email: user.email }))
            Swal.fire({
                icon: "success",
                title: "¡Bienvenido!",
                text: `Bienvenido, ${user.email}`,
                confirmButtonColor: "#3085d6"
            }).then(() => {
                navigate("/")
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "Credenciales inválidas",
                text: "El correo o la contraseña no son correctos.",
                confirmButtonColor: "#3085d6"
            })
        }
    }

    return (
        <section className="bg-light py-4" style={{ minHeight: "80vh" }}>
            <div className="container">
                <div className="mx-auto p-4 bg-white border border-1 border-dark rounded-4 shadow-lg" style={{ maxWidth: "400px" }}>
                    <h2 className="text-center mb-4 fw-bold text-primary-emphasis">Iniciar sesión</h2>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Correo electrónico</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                {...register("email", {
                                    required: "El correo es obligatorio"
                                })}
                                placeholder="ejemplo@correo.com"
                            />
                            {errors.email && <span className="invalid-feedback">{errors.email.message}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Contraseña</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                {...register("password", {
                                    required: "La contraseña es obligatoria",
                                    minLength: {
                                        value: 6,
                                        message: "La contraseña debe tener al menos 6 caracteres"
                                    }
                                })}
                                placeholder="Tu contraseña"
                            />
                            {errors.password && <span className="invalid-feedback">{errors.password.message}</span>}
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-primary fw-bold px-4 py-2 shadow-sm">
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}