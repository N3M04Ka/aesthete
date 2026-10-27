import {createSlice,type PayloadAction} from '@reduxjs/toolkit'

interface AuthState{
    isAuthenticated:boolean;
    user:UserData|null;
    accessToken:string|null;
}
interface UserData{
    userId:number,
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
}

const initialState:AuthState={
    isAuthenticated:false,
    user:null,
    accessToken:null,
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state,action:PayloadAction<{user:UserData,accessToken:string}>)=>{
            state.user=action.payload.user;
            state.isAuthenticated=true;
            state.accessToken=action.payload.accessToken
            localStorage.setItem('hasSession','true');
        },
        logOut:(state)=>{
            state.isAuthenticated=false;
            state.user=null;
            state.accessToken=null;
            localStorage.setItem('hasSession','false');
            console.log('logged out in authSlice');
        }
    }
})

export const {setCredentials,logOut} =authSlice.actions;
export default authSlice.reducer;
