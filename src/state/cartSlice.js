import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

const initialState = {
    products: [],
    totalAmount: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let product = action.payload
            let findProduct = state.products.find((item) => item.id === product.id)
            if (findProduct) {
                findProduct.quantity += 1
            } else {
                state.products.push(action.payload)
            }
        },
        removeToCart: (state, action) => {
            let productId = action.payload;
            state.products = state.products.filter((item) => item.id != productId)

        },
        incrementQuantity: (state, action) => {
            const productId = action.payload
            const findProduct = state.products.find((product) => {
                return product.id === productId
            })
            if (findProduct) {
                findProduct.quantity += 1
            }
        },
        decrementQuantity: (state, action) => {
            const productId = action.payload
            const findProduct = state.products.find((product) => {
                return product.id === productId
            })
            if (findProduct && findProduct.quantity > 1) {
                findProduct.quantity -= 1
            }
        },
        setTotalAmount: ((state, action) => {
            const amount = action.payload
            state.totalAmount = amount
        })
    },
})

export const { addToCart, removeToCart, incrementQuantity, decrementQuantity, setTotalAmount } = cartSlice.actions

export default cartSlice.reducer