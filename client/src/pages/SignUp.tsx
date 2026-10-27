import { Link } from 'react-router-dom';
import NameInput from '@/components/NameInput'
import validateName from '@/functions/validateName';
import validateEmail from '@/functions/validateEmail';
import validatePassword from '@/functions/validatePassword';
import validatePhone from '@/functions/validatePhone';
import { useDispatch } from 'react-redux';
import { addSnackbar } from '@/app/slices/SnackbarSlice';
import axios,{isAxiosError} from 'axios';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '@/app/slices/authSlice';

const apiUrl=import.meta.env.VITE_API_URL;

type ResponseType={
    userId:number,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    accessToken:string
}
export default function SignUp() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const submitHandler=async (event:React.SubmitEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const data=new FormData(event.currentTarget);
        const firstName=data.get("firstName") as string;
        const lastName=data.get("lastName") as string ;
        const email=data.get("email") as string ;
        const phone=data.get("phone") as string ;
        const password1=data.get("password1") as string ;
        const password2=data.get("password2") as string ;
        try{
            if(!validateName(firstName)||!validateName(lastName)){
                dispatch(addSnackbar({type:"error",message:"Invalid name",id:nanoid()}))
                return;
            }
            if(!validateEmail(email)){
                dispatch(addSnackbar({type:"error",message:"Invalid email",id:nanoid()}))
                return;
            }
            if(!validatePassword(password1)){
                dispatch(addSnackbar({type:"error",message:"Invalid password",id:nanoid()}))
                return;
            }
            if(!validatePhone(phone)){
                dispatch(addSnackbar({type:"error",message:"Invalid phone",id:nanoid()}))
                return;
            }
            if(password1!=password2){
                dispatch(addSnackbar({type:"error",message:"Passwords have to be the same",id:nanoid()}))
                return;
            }
            if(!validatePassword(password1)){
                dispatch(addSnackbar({type:"error",message:"Invalid password",id:nanoid()}));
                return;
            }
            const result=await axios.post<ResponseType>(`${apiUrl}/auth/signUp`,{
                firstName,
                lastName,
                email,
                phone,
                password:password1
            });
            console.log(result.data);
            // if(!result.data.isOk){
            //     dispatch(addSnackbar({type:"error",message:result.data.message,id:nanoid()}))
            // }
            // else{
            //     navigate('/collection')
            //     dispatch(setCredentials({user:{userId:result.data.userId,firstName,lastName,phone,email},accessToken:result.accessToken}))
            // }
            const {userId,accessToken}=result.data;
            navigate('/collection')
            dispatch(setCredentials({user:{userId,firstName,lastName,phone,email},accessToken}))
        }catch(err){
            if(isAxiosError(err)){
                if(err.response){
                    console.error(err.response.data.data);
                    dispatch(addSnackbar({type:"error",message:err.response.data.data,id:nanoid()}));
                }
                else if(err.request)
                    console.log('Could not reach the server')
            }
            else if(err instanceof Error)
                console.error(err.message);
            else
                console.log(err);
        }
    }
    return (
        <section className="signUp">
            <div className="container centered">
                <div className="signUpHolder">
                    <h1>Create an Account</h1>
                    <p> Join AESTHETE for a curated experience.</p>
                    <form action="" onSubmit={submitHandler}>
                        <div className="name">
                            <NameInput dataTest="firstName" placeholder="First Name" label="FIRST NAME" isDisabled={false} type="text" name="firstName"/>
                            <NameInput dataTest="lastName" placeholder="Last Name" label="LAST NAME" isDisabled={false} type="text" name="lastName"/>
                        </div>
                        <NameInput dataTest="email" placeholder="Email Address" label="EMAIL ADDRESS" isDisabled={false} type="email" name="email"/>
                        <NameInput dataTest="phone" placeholder="Phone" label="PHONE" isDisabled={false} type="text" name="phone"/>
                        <NameInput dataTest="password1" placeholder="Password" label="PASSWORD" isDisabled={false} type="password" name="password1"/>
                        <NameInput dataTest="password2" placeholder="Confirm Password" label="CONFIRM PASSWORD" isDisabled={false} type="password" name="password2"/>
                        <button type="submit" className="submitBtn">CREATE ACCOUNT</button>
                    </form>
                    <Link to="/auth/login">ALREADY HAVE AN ACCOUNT? SIGN IN</Link>
                </div>
            </div>
        </section>
    );
}
