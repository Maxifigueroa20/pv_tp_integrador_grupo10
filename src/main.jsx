import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Inicio from "./pages/Inicio.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import Detalle from "./pages/Detalle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Inicio /> },
      { path: "favoritos", element: <Favoritos /> },
      { path: "detalle/:id", element: <Detalle /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
