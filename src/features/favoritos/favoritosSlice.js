import { createSlice } from "@reduxjs/toolkit"

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
  }
})

export const { agregarFavorito, eliminarFavorito } = favoritosSlice.actions

export default favoritosSlice.reducer
