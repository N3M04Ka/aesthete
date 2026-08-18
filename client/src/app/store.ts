import {configureStore} from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import cartReducer from './slices/cartSlice'
import storageReducer from './slices/storageSlice'
import snackbarReducer from './slices/SnackbarSlice'
import authReducer from './slices/authSlice'
const store=configureStore({
    reducer:{
        ui:uiReducer,
        cart:cartReducer,
        storage:storageReducer,
        snackbar:snackbarReducer,
        auth:authReducer,
    },
})

export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;

export default store;
