import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "./ui-slice";

const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
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

export const sendToCart = (cart) => {
    console.log('i am in action creator');

    return async (dispatch) => {

        dispatch(uiSliceActions.showNotification({
            status: 'Pending',
            title: 'Sending',
            message: 'Sending cart data'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://module19-c35c0-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            })
            if (!response.ok)
                throw new Error("Something wrong")
        }

        try {
            await sendRequest();
            dispatch(uiSliceActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent cart data successfully'
            }))
        } catch (error) {
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data failed'
            }))
        }


    }
}


export default cartSlice;
export const cartSliceActions = cartSlice.actions;