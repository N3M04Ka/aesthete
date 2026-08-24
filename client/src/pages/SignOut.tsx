import { useDispatch } from "react-redux";
import {logOut} from '@/app/slices/authSlice'
import {useNavigate} from 'react-router-dom';

export default function SignOut() {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    function handeleLogOut(){
        dispatch(logOut());
        navigate('/');
    }
    return (
        <section className="signOut">
            <div className="container centered">
                <div className="content">
                    <h1>Sign Out</h1>
                    <p>Are you sure you want to sign out of your AESTHETE account?</p>
                    <div className="buttons">
                        <button onClick={handeleLogOut}>SIGN OUT</button>
                        <button onClick={()=>{navigate('/')}}>STAY SIGNED IN</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
