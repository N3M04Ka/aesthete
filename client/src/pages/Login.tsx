import { useState } from 'react';
import {Link} from 'react-router-dom'
import NameInput from '@/components/NameInput'
import { TbEye } from "react-icons/tb";
import { TbEyeClosed } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { addSnackbar } from '@/app/slices/SnackbarSlice';
import { nanoid } from '@reduxjs/toolkit';
import validateEmail from '@/functions/validateEmail';
import validatePassword from '@/functions/validatePassword';
import { setCredentials } from '@/app/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import axios,{isAxiosError} from 'axios';
const apiUrl=import.meta.env.VITE_API_URL;

interface ResponseType{
    user_id:number,
    phone:string,
    firstName:string,
    lastName:string,
    accessToken:string,
}
export default function Login() {
    const [PasswordIsForgotten,setPasswordIsForgotten]=useState<boolean>(false);
    const [passwordIsHidden,setPasswordIsHidden]=useState<boolean>(true);
    const [userPassword,setUserPassword]=useState<string>('');
    const [userEmail,setUserEmail]=useState<string>('');
    const dispatch=useDispatch();
    const [emailIsInvalid,setEmailIsInvalid]=useState<boolean>(false);
    const [passwordIsInvalid,setPasswordIsInvalid]=useState<boolean>(false);
    const navigate=useNavigate();
    async function handleSubmit(e:React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        let email=data.get('email');
        let password=data.get('password');
        if(typeof email !== 'string'||typeof password !== 'string')
            return;
        email=email.trimStart().trimEnd().toLowerCase();
        password=password.trimStart().trimEnd();
        if(!validateEmail(email)){
            dispatch(addSnackbar({type:"error",message:"Invalid email",id:nanoid()}));
            setEmailIsInvalid(true);
            return;
        }
        setEmailIsInvalid(false);
        const result=validatePassword(password);
        setPasswordIsInvalid(!result.isOk);
        if(!result.isOk){
            dispatch(addSnackbar({type:"error",message:result.message!,id:nanoid()}));
            return;
        }
        let requestData;
        try{
            requestData=(await axios.post<ResponseType>(`${apiUrl}/auth/login`,{
                email,
                password
            },{withCredentials:true})).data;
            const {user_id:userId,firstName,lastName,phone,accessToken}=requestData;
            dispatch(setCredentials({user:{userId,firstName,lastName,email,phone},accessToken}));
            navigate('/collection');
        }
        catch(err){
            if(isAxiosError(err)){
                if(err.request!=null){
                    dispatch(addSnackbar({type:"error",message:(JSON.parse(err.request.response)).message,id:nanoid()}))
                }
                else if(err.response!=null)
                    console.log(err.response.data);
            }
            else if(err instanceof Error)
                console.log(err.stack);
            else
                console.log(err);
        }
    }
    return (
        <section className="login">
            <div className="container centered">
                {PasswordIsForgotten?(
                    <div className="forgotPasswordHolder">
                        <h1>Forgot Password</h1>
                        <p>Enter your email address and we'll send you a link to reset your password.</p>
                        <form action="" noValidate>
                            <NameInput label="EMAIL ADDRESS" placeholder="your@gmail.com"  isDisabled={false} type="email" name="email"/>
                            <button type="submit" className="submitBtn">SEND RESET LINK</button>
                        </form>
                        <button onClick={()=>setPasswordIsForgotten(false)}>Back to Sign in</button>
                    </div>
                ):(
                    <div className="loginHolder">
                        <h1>Welcome Back</h1>
                        <p>Sign in to access your account</p>
                        <form action="" noValidate onSubmit={handleSubmit}>
                            <input data-test="email-input" type="email" name="email" id="" placeholder="EMAIL ADDRESS" required value={userEmail} onChange={event=>setUserEmail(event.target.value)} style={{backgroundColor:emailIsInvalid?'#ff7f7f40':'transparent'}}/>
                            <div className="passwordHolder">
                                <input data-test="password-input" type={passwordIsHidden?'password':'text'} name="password" id="" placeholder="PASSWORD" required value={userPassword} onChange={event=>setUserPassword(event.target.value)} style={{backgroundColor:passwordIsInvalid?'#ff7f7f40':'transparent'}}/>
                                <button className="hidePassword" type="button" onClick={()=>setPasswordIsHidden(p=>!p)}>{passwordIsHidden?<TbEye/>:<TbEyeClosed/>}</button>
                            </div>
                            <button type="button" className="forgotPassword" onClick={()=> setPasswordIsForgotten(true)}>FORGOT PASSWORD?</button>
                            <button type="submit" className="submitBtn">SIGN IN</button>
                        </form>
                        <div className="singUpHolder">
                            <div className="center">
                                <p>Don't have an account?</p>
                                <Link to={"/auth/signUp"}>CREATE AN ACCOUNT</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
