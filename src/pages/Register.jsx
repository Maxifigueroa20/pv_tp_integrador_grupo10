import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"

const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || []
        let existe = users.some(u => u.email === data.email)
        if (existe) {
            Swal.fire({
                icon: "error",
                title: "Correo ya registrado",
                text: "El correo ingresado ya está registrado. Por favor, usa otro.",
                confirmButtonColor: "#3085d6"
            })
        } else {
            users.push({ email: data.email, password: data.password })
            localStorage.setItem("users", JSON.stringify(users))
            Swal.fire({
                icon: "success",
                title: "¡Registro exitoso!",
                text: "Ahora puedes iniciar sesión.",
                confirmButtonColor: "#3085d6"
            }).then(() => {
                navigate("/login")
            })
        }
    }

    return (
        <section className="bg-light py-4" style={{ minHeight: "80vh" }}>
            <div className="container">
                <div className="mx-auto p-4 bg-white border border-1 border-dark rounded-4 shadow-lg" style={{ maxWidth: "400px" }}>
                    <h2 className="text-center mb-4 fw-bold text-success-emphasis">Registro</h2>
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
                                placeholder="Mínimo 6 caracteres"
                            />
                            {errors.password && <span className="invalid-feedback">{errors.password.message}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Confirmar contraseña</label>
                            <input
                                type="password"
                                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                                {...register("confirmPassword", {
                                    required: "Debes confirmar la contraseña",
                                    validate: value => value === watch("password") || "Las contraseñas no coinciden"
                                })}
                                placeholder="Repite la contraseña"
                            />
                            {errors.confirmPassword && <span className="invalid-feedback">{errors.confirmPassword.message}</span>}
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-success fw-bold px-4 py-2 shadow-sm">
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register