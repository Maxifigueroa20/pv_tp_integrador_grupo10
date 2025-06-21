import { createSlice } from "@reduxjs/toolkit"
import { eliminarProducto } from "../producto/productosSlice"

const initialState = {
    favoritos: [],
}

export const favoritosSlice = createSlice({
    name: "favoritos",
    initialState,
    reducers: {
        agregarFavorito: (state, action) => {
            const existe = state.favoritos.some(
                (favorito) => favorito.id === action.payload.id
            )
            if (!existe) {
                state.favoritos.push(action.payload)
            }
        },
        eliminarFavorito: (state, action) => {
            state.favoritos = state.favoritos.filter(
                (favorito) => favorito.id !== action.payload.id
            )
        }
    },
    // maneja la reacción a la eliminación de productos desde el slice de productos
    extraReducers: (builder) => {
        builder.addCase(eliminarProducto, (state, action) => {
            state.favoritos = state.favoritos.filter(
                (favorito) => favorito.id !== action.payload
            )
        })
    }
})

export const { agregarFavorito, eliminarFavorito } = favoritosSlice.actions

export default favoritosSlice.reducer
