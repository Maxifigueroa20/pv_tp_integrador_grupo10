import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Inicio from "./pages/Inicio.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import Detalle from "./pages/Detalle.jsx";
import FormularioProducto from "./pages/FormularioProducto.jsx";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> }, // pública
      { path: "register", element: <Register /> }, // pública
      {
        index: true,
        element: (
          <PrivateRoute>
            <Inicio />
          </PrivateRoute>
        ),
      },
      {
        path: "favoritos",
        element: (
          <PrivateRoute>
            <Favoritos />
          </PrivateRoute>
        ),
      },
      {
        path: "detalle/:id",
        element: (
          <PrivateRoute>
            <Detalle />
          </PrivateRoute>
        ),
      },
      {
        path: "crear",
        element: (
          <PrivateRoute>
            <FormularioProducto />
          </PrivateRoute>
        ),
      },
      {
        path: "editar/:id",
        element: (
          <PrivateRoute>
            <FormularioProducto />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
