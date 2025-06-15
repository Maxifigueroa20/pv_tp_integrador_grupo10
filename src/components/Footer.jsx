const Footer = () => {
    return (
        <footer className="bg-dark text-white d-flex align-items-center" style={{ minHeight: "9vh" }}>
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-6 d-flex align-items-center">
                        <p className="mb-0 text-center text-md-start w-100">
                            &copy; 2025 Grupo N°10 — Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-md-end justify-content-center">
                        <div className="d-flex gap-3">
                            <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
                            <i className="bi bi-twitter-x" style={{ fontSize: "1.5rem" }}></i>
                            <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer