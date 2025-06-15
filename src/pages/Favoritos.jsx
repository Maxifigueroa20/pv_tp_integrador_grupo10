import ProductoComponent from "../components/ProductoComponent"

const Favoritos = () => {
    return (
        <section className="bg-light py-4" style={{ minHeight: "80vh" }}>
            <div className="container">
                <div className="mx-auto p-4 bg-white border border-1 border-dark rounded-4 shadow-lg" style={{ maxWidth: "1200px" }}>
                    <h2 className="text-center mb-4 fw-bold text-danger-emphasis">Productos Favoritos</h2>
                    <ProductoComponent />
                </div>
            </div>
        </section>
    )
}

export default Favoritos