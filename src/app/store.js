import { configureStore } from "@reduxjs/toolkit"
import productosReducer from "../features/producto/productosSlice"
import favoritosReducer from "../features/favoritos/favoritosSlice"
import authReducer from "../features/autenticacion/authSlice"

export const store = configureStore({
    reducer: {
        productos: productosReducer,
        favoritos: favoritosReducer,
        auth: authReducer
    }
})
