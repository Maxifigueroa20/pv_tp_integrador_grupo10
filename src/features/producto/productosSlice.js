import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productos: []
}

export const productosSlice = createSlice({
    name: 'productos',
    initialState,
    reducers: {
        agregarProducto: (state, action) => {
            state.productos.push(action.payload)
        },
        eliminarProducto: (state, action) => {
            state.productos = state.productos.filter(producto => producto.id !== action.payload)
        },
        actualizarProducto: (state, action) => {
            const actualizado = action.payload
            state.productos = state.productos.map(producto => producto.id === actualizado.id ? actualizado : producto)
        }
    }
})

export const { agregarProducto, eliminarProducto, actualizarProducto } = productosSlice.actions

export default productosSlice.reducer