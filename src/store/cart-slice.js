import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        replaceCart: (state, action) => {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addToCartHandler: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    description: newItem.description,
                    totalPrice: newItem.price,
                    title: newItem.title,
                    quantity: 1
                })
            } else {
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
                existingItem.quantity++
            }
            state.totalQuantity++;
        },
        removeFromCartHandler: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            state.totalQuantity--;
        }

    }
});



export default cartSlice;
export const cartSliceActions = cartSlice.actions;