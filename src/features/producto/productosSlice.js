import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProductos = createAsyncThunk('productos/fetchProductos', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data.map(p => ({
        id: p.id,
        imagen: p.image,
        nombre: p.title,
        precio: p.price,
        descripcion: p.description,
        categoria: p.category,
        rating: p.rating.rate,
        stock: p.rating.count
    }))
})

const initialState = {
    productos: [],
    status: 'idle',
    error: null
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductos.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProductos.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.productos = action.payload
            })
            .addCase(fetchProductos.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { agregarProducto, eliminarProducto, actualizarProducto } = productosSlice.actions

export default productosSlice.reducer