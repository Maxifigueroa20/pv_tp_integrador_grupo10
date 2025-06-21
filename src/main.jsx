import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from "./app/store.js"
import { Provider } from "react-redux"
import App from "./App.jsx"
import Inicio from "./pages/Inicio.jsx"
import Favoritos from "./pages/Favoritos.jsx"
import Detalle from "./pages/Detalle.jsx"
import FormularioProducto from "./pages/FormularioProducto.jsx"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Inicio /> },
            { path: "favoritos", element: <Favoritos /> },
            { path: "detalle/:id", element: <Detalle /> },
            { path: "crear", element: <FormularioProducto /> },
            { path: "editar/:id", element: <FormularioProducto /> },
        ],
    },
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
)
