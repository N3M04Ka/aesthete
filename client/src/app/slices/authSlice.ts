import {createSlice,type PayloadAction} from '@reduxjs/toolkit'

interface AuthState{
    isAuthenticated:boolean;
    user:UserData|null;
}
interface UserData{
    userId:number,
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    passwordLength:number;
}

const savedUserData=localStorage.getItem('userData');
const initialState:AuthState={
    isAuthenticated:savedUserData!=null&&savedUserData!='undefined',
    user:savedUserData!=null&&savedUserData!='undefined'?JSON.parse(savedUserData):null,
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logIn:(state,action:PayloadAction<{user:UserData}>)=>{
            console.log(action.payload.user);
            state.user=action.payload.user;
            state.isAuthenticated=true;
            localStorage.setItem('userData',JSON.stringify(action.payload.user));
        },
        logOut:(state)=>{
            state.isAuthenticated=false;
            state.user=null;
            localStorage.removeItem('userData');
        },
        changePassword:(state,action:PayloadAction<{newPasswordLength:number}>)=>{
            state.user!.passwordLength=action.payload.newPasswordLength;
            localStorage.setItem('userData',JSON.stringify(state.user));
        }
    }
})

export const {logIn,logOut,changePassword} =authSlice.actions;
export default authSlice.reducer;
