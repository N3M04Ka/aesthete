import NameInput from '@/components/NameInput'
import SideBar from '@/components/SideBar'
import { useSelector } from 'react-redux';
import { type RootState } from '@/app/store';
import { useNavigate } from 'react-router-dom';

export default function AccountInfo() {
    const userData=useSelector((state:RootState)=>state.auth.user);
    const navigate=useNavigate();
    return (
        <section className="accountInfo">
            <div className="container">
                <SideBar/>
                <div className="mainContent">
                    <h1>Personal Info</h1>
                    <p>Manage your personal details and contact information.</p>
                    <div className="topCards">
                        <div className="card">
                            <div className="top">
                                <span>BASIC DETAILS</span>
                                <button>Edit</button>
                            </div>
                            <NameInput label="Name" placeholder={`${userData!.firstName} ${userData!.lastName}`} isDisabled={true} type="string"/>
                            <NameInput label="Email" placeholder={`${userData!.email}`} isDisabled={true} type="string"/>
                            <NameInput label="Phone" placeholder={`${userData!.phone}`} isDisabled={true} type="string"/>
                        </div>
                        <div className="card">
                            <div className="top">
                                <span>SHIPPING ADDRESS</span>
                                <button>Edit</button>
                            </div>
                            <span>{`${userData!.firstName} ${userData!.lastName}`}</span>
                            <span>123 Minimalist Avenue</span>
                            <span>Apt 4B</span>
                            <span>New York, Ny 10001</span>
                            <span>United States</span>
                            <span className="default">Default</span>
                        </div>
                    </div>
                    <div className="card bottom">
                        <div className="left">
                            <NameInput label="PASSWORD" placeholder={'•'.repeat(userData!.password.length)} isDisabled={true} type="password"/>
                            <span>Last updated 3 months ago</span>
                        </div>
                        <button onClick={()=>navigate('/user/account-settings',{replace:true})}>Change Password</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
