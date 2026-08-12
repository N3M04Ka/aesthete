import { type PayloadAction, createSlice,nanoid } from '@reduxjs/toolkit';
import { type Snackbar } from '@/components/SnackbarHolder';

const initialState: Snackbar[] = [];

export const snackBarSlice = createSlice({
    name: "snackbars",
    initialState,
    reducers: {
        addSnackbar: (state, action: PayloadAction<Snackbar>) => {
            if(state.length>=10)
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
