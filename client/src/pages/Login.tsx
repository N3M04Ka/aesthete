import { useState } from 'react';
import {Link} from 'react-router-dom'
import NameInput from '@/components/NameInput'

export default function Login() {
    const [PasswordIsForgotten,setPasswordIsForgotten]=useState<boolean>(false);
    return (
        <section className="login">
            <div className="container centered">
                {PasswordIsForgotten?(
                    <div className="forgotPasswordHolder">
                        <h1>Forgot Password</h1>
                        <p>Enter your email address and we'll send you a link to reset your password.</p>
                        <form action="">
                            <NameInput label="EMAIL ADDRESS" placeholder="your@gmail.com"  isDisabled={false} type="email"/>
                            <button type="submit" className="submitBtn">SEND RESET LINK</button>
                        </form>
                        <button onClick={()=>setPasswordIsForgotten(false)}>Back to Sign in</button>
                    </div>
                ):(
                    <div className="loginHolder">
                        <h1>Welcome Back</h1>
                        <p>Sign in to access your account</p>
                        <form action="">
                            <input type="email" name="email" id="" placeholder="EMAIL ADDRESS"/>
                            <input type="password" name="password" id="" placeholder="PASSWORD"/>
                            <button className="forgotPassword" onClick={()=> setPasswordIsForgotten(true)}>FORGOT PASSWORD?</button>
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
