import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import cartReducer from './slices/cartSlice'

const store=configureStore({
    reducer:{
        ui:uiReducer,
        cart:cartReducer
    },
})

export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;

export default store;
