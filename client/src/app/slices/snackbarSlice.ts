import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Snackbar } from '@/components/SnackbarHolder';

const initialState: Snackbar[] = [];
export const snackBarSlice = createSlice({
    name: "snackbars",
    initialState,
    reducers: {
        addSnackbar: (state, action: PayloadAction<Snackbar>) => {
            console.log('snackbar');
            if(state.length>0&&state[state.length-1].message==action.payload.message)
                return;
            state.push(action.payload);
        },
        removeSnackbar: (state, action: PayloadAction<string>) => {
            return state.filter((el) => el.id !== action.payload);
        }
    }
});

export const { addSnackbar, removeSnackbar } = snackBarSlice.actions;

export default snackBarSlice.reducer;
