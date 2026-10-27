import SideBar from '@/components/SideBar'
import {useId} from 'react'
import { IoMdCheckmark} from "react-icons/io";
import {useState} from 'react'
import {useSelector} from 'react-redux';
import { type RootState } from '@/app/store';
import { addSnackbar } from '@/app/slices/SnackbarSlice';
import { nanoid } from '@reduxjs/toolkit';
import validatePassword from '@/functions/validatePassword';
import { useDispatch } from 'react-redux';
import axios,{isAxiosError} from 'axios';
const apiUrl=import.meta.env.VITE_API_URL;
import { logOut } from '@/app/slices/authSlice';
import { useNavigate } from 'react-router-dom';

interface props{
    label:string;
    name:string;
    value?:string;
    setter?:React.Dispatch<React.SetStateAction<string>>;
}

function PasswordInput({label,value,setter}:props){
    const id=useId();
    return (
        <div className="passwordInput">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id}name="password" value={value} onChange={event=>setter!(event.target.value)} required/>
        </div>
    )
}
function CheckBoxInput({label,name}:props){
    return (
        <div className="checkBoxHolder">
            <label className="checkBox">
                <input type="checkbox" name={name} />
                <span><IoMdCheckmark/></span>
            </label>
            <span>{label}</span>
        </div>
    )
}

export default function AccountSettings() {
    const userId=useSelector((state:RootState)=>state.auth.user?.userId);
    const [currentPassword,setCurrentPassword]=useState<string>('');
    const [firstNewPassword,setFirstNewPassword]=useState<string>('');
    const [secondNewPassword,setSecondNewPassword]=useState<string>('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    async function handleSubmit(event:React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        if(firstNewPassword!=secondNewPassword){
            dispatch(addSnackbar({type:"info",message:"passwords are not the same",id:nanoid()}));
            return;
        }
        const result=validatePassword(firstNewPassword);
        if(!result.isOk){
            dispatch(addSnackbar({type:"info",message:result.message!,id:nanoid()}));
            return;
        }
        try{
            await axios.post(apiUrl+'/auth/changePassword',{
                userId,
                newPassword:firstNewPassword,
                oldPassword:currentPassword
            },{withCredentials:true})
            dispatch(addSnackbar({type:"success",message:"Password has been updated",id:nanoid()}));
        }
        catch(err){
            if(isAxiosError(err)){
                if(err.request!=null){
                    dispatch(addSnackbar({type:'error',message:JSON.parse(err.request.response).message,id:nanoid()}))
                    console.log(JSON.parse(err.request.response).message)
                }
                else if(err.response!=null)
                    console.log(err.response.data);
            }
            else if(err instanceof Error)
                console.error(err.stack);
            else
                console.log(err);
        }
    }
    async function handleAccountDelete(){
        try{
            const result =await axios.post(apiUrl+'/auth/delete-account',{userId});
            console.log(result);
            if(result.data.isOk){
                dispatch(addSnackbar({type:"success",message:"Account has been deleted",id:nanoid()}));
                dispatch(logOut());
                navigate('/');
            }
            else
                dispatch(addSnackbar({type:"error",message:result.data.message,id:nanoid()}));
        }
        catch(err){
            if(isAxiosError(err)){
                if(err.response)
                    console.log(err.response);
                else if(err.request)
                    console.log(err.request);
            }
            else if(err instanceof Error)
                console.error(err.stack);
            else
                console.log(err);

        }
    }
    return (
        <section className="accountSettings">
            <div className="container">
                <SideBar/>
                <div className="mainContent">
                    <h1>Account Settings</h1>
                    <div className="changePassword">
                        <h2>Change Password</h2>
                        <form action="" method="POST" onSubmit={handleSubmit}>
                            <PasswordInput label="Current Password" name="curPassword" value={currentPassword} setter={setCurrentPassword}/>
                            <PasswordInput label="New Password" name="newPassword" value={firstNewPassword} setter={setFirstNewPassword}/>
                            <PasswordInput label="Confirm New Password" name="newPasswordRepeat" value={secondNewPassword} setter={setSecondNewPassword}/>
                            <button type="submit" >UPDATE PASSWORD</button>
                        </form>
                    </div>
                    <div className="emailPreferences">
                        <h2>Email Preferences</h2>
                        <form action="" method="POST">
                            <CheckBoxInput label="AESTHETE Newsletter" name="AestheteNews"/>
                            <CheckBoxInput label="Order Updates & Tracking" name="orderUpdateAndTracking"/>
                            <CheckBoxInput label="Exclusive promotions & Early Access" name="promotionsAndEAccess"/>
                        </form>
                    </div>
                    <div className="dangerZone">
                        <h2>Danger Zone</h2>
                        <p>Once you delete your account, there is no going back. Please be certain.</p>
                        <button onClick={handleAccountDelete}>DELETE ACCOUNT</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
