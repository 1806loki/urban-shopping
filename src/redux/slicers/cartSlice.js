import {
    createSlice
} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem('cartItems')) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        deleteFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
    },
});

export const {
    addToCart,
    deleteFromCart
} = cartSlice.actions;

export const selectCartItems = state => (state.cart.items);

export default cartSlice.reducer;