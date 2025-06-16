import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary bg-gradient" style={{ minHeight: "11vh" }} data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4" to="/">
                    <i className="bi bi-box-seam"></i>
                    <span className="d-none d-sm-inline">Gestión de Productos</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light fw-semibold rounded px-3" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light fw-semibold rounded px-3" to="/">Formulario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light fw-semibold rounded px-3" to="/favoritos">Favoritos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar