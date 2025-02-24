import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 }); // Ensure new item has quantity
            }

            state.totalQuantity += 1;
            state.totalPrice += +action.payload.price; // Fix: Correctly accumulate total price
        },

        removeFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex !== -1) {
                const item = state.cartItems[itemIndex];
                state.totalQuantity -= item.quantity;
                state.totalPrice -= +item.price * item.quantity;
                state.cartItems.splice(itemIndex, 1);
            }
        },

        increaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += +item.price;
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= +item.price;
            }
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
