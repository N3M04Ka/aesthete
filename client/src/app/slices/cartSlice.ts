import {type PayloadAction,createSlice} from '@reduxjs/toolkit';

export interface Size{
    size:string,
    quantity:number
}
export interface CartItem{
    id:number,
    name:string,
    description:string,
    availableSizes:Size[],
    mainImage:string,
    otherImages:string[],
    quantity:number,
    price:number
}

interface CartState{
    items:CartItem[]
}

const initialState:CartState={
    items:[]
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action:PayloadAction<CartItem>)=>{
            const existingItem=state.items.find(item=>item.id===action.payload.id);
            if(existingItem)
                existingItem.quantity++;
            else
                state.items.push(action.payload);
        },
        removeItem:(state,action:PayloadAction<{id:number}>)=>{
            state.items=state.items.filter(item=>item.id!=action.payload.id);
        }
    }
})

export const {addItem,removeItem} =cartSlice.actions;

export default cartSlice.reducer;
