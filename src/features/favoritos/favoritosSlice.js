import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  favoritos: [],
}

export const favoritosSlice = createSlice({
  name: "favoritos",
  initialState,
  reducers: {

  }
})

export const {  } = favoritosSlice.actions

export default favoritosSlice.reducer
