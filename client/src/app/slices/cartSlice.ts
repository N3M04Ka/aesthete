import {type PayloadAction,createSlice} from '@reduxjs/toolkit';

export interface Size{
    size:string,
    quantity:number
}
export interface CartItem{
    id:string,
    name:string,
    description:string,
    size:string,
    mainImage:string,
    otherImages:string[],
    quantity:number,
    price:number
    color:string,
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
                existingItem.quantity+=action.payload.quantity;
            else
                state.items.push(action.payload);
        },
        removeItem:(state,action:PayloadAction<string>)=>{
            state.items=state.items.filter(item=>item.id!=action.payload);
        },
        changeItemQuantity:(state,action:PayloadAction<{id:string,newQuantity:number}>)=>{
            const existingItem=state.items.find(item=>item.id==action.payload.id);
            existingItem!.quantity=action.payload.newQuantity;
        }
    }
})

export const {addItem,removeItem,changeItemQuantity} =cartSlice.actions;

export default cartSlice.reducer;
