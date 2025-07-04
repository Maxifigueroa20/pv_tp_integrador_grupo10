import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/autenticacion/authSlice";
import Swal from "sweetalert2";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, salir",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/login");
      }
    });
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary bg-gradient"
      style={{ minHeight: "11vh" }}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4"
          to="/"
        >
          <i className="bi bi-box-seam"></i>
          <span className="d-none d-sm-inline">Gestión de Productos</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light fw-semibold rounded px-3"
                    to="/login"
                  >
                    Iniciar sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light fw-semibold rounded px-3"
                    to="/register"
                  >
                    Registrarse
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light fw-semibold rounded px-3"
                    to="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light fw-semibold rounded px-3"
                    to="/crear"
                  >
                    Crear Producto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light fw-semibold rounded px-3"
                    to="/favoritos"
                  >
                    Favoritos
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center ms-2">
                  <span className="text-light small me-2">
                    <i className="bi bi-person-circle"></i> {user.email}
                  </span>
                  <button
                    className="btn btn-danger btn-sm fw-semibold"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
