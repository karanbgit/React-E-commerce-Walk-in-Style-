import { configureStore } from '@reduxjs/toolkit'

import cardReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cardReducer
    }
})