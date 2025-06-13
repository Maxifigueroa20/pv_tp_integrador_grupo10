import { configureStore } from "@reduxjs/toolkit"
import productosReducer from "../features/product/productosSlice"
import favoritosReducer from "../features/favoritos/favoritosSlice"

export const store = configureStore({
  reducer: {
    productos: productosReducer,
    favoritos: favoritosReducer
  }
})
