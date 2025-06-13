import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productos: []
}

export const productosSlice = createSlice({
    name: 'productos',
    initialState,
    reducers: {

    }
})

export const {  } = productosSlice.actions

export default productosSlice.reducer