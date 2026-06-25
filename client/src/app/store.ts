import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import cartReducer from './slices/cartSlice'
import storageReducer from './slices/storageSlice'

const store=configureStore({
    reducer:{
        ui:uiReducer,
        cart:cartReducer,
        storage:storageReducer
    },
})

export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;

export default store;
