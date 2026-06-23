import {createSlice,type PayloadAction} from '@reduxjs/toolkit';

interface UIState{
    smallScreen:boolean,
    filterIsOpen:boolean,
    searchPanelIsShown:boolean,
    burgerMenuIsShownUp:boolean,
}
const initialState: UIState={
    smallScreen:window.innerWidth<=985,
    filterIsOpen:false,
    searchPanelIsShown:false,
    burgerMenuIsShownUp:false,
};

export const uiSlice =createSlice({
    name:'ui',
    initialState,
    reducers:{
        setSmallScreen:(state,action:PayloadAction<boolean>)=>{
            state.smallScreen=action.payload;
        },
        setFilterIsOpen:(state,action:PayloadAction<boolean>)=>{
            state.filterIsOpen=action.payload;
        },
        setSearchPanelIsShown:(state,action:PayloadAction<boolean>)=>{
            state.searchPanelIsShown=action.payload;
        },
        setBurgerMenuIsShownUp:(state,action:PayloadAction<boolean>)=>{
            state.burgerMenuIsShownUp=action.payload;
        }
    }
})
export const {setSmallScreen,setFilterIsOpen,setSearchPanelIsShown,setBurgerMenuIsShownUp}=uiSlice.actions;

export default uiSlice.reducer;
