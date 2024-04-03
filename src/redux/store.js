import {
    configureStore
} from '@reduxjs/toolkit';
import cartReducer from './slicers/cartSlice';
import productReducer from './slicers/productSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    },
});

export default store;