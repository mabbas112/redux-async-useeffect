import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggleCart: (state) => { state.cartIsVisible = !state.cartIsVisible },
        showNotification: (state, action) => {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }

})


export default uiSlice;
export const uiSliceActions = uiSlice.actions;