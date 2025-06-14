import FacebookIcon from "../assets/facebook.svg"
import TwitterIcon from "../assets/twitter.svg"
import GithubIcon from "../assets/github.svg"

const Footer = () => {
    return (
        <div className="bg-dark text-white py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0">
                            &copy; 2025 Grupo N°10 — Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            <img
                                src={FacebookIcon}
                                alt="Facebook"
                                className="social-icon"
                                width="24"
                                height="24"
                            />
                            <img
                                src={TwitterIcon}
                                alt="Twitter"
                                className="social-icon"
                                width="24"
                                height="24"
                            />
                            <img
                                src={GithubIcon}
                                alt="GitHub"
                                className="social-icon"
                                width="24"
                                height="24"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer