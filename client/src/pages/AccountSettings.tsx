import SideBar from '../components/SideBar'
import {useId,useState} from 'react'
import { IoMdCheckmark} from "react-icons/io";

interface props{
    label:string;
    name:string;
}

function PasswordInput({label}:props){
    const id=useId();
    return (
        <div className="passwordInput">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id}name="password" />
        </div>
    )
}
function CheckBoxInput({label,name}:props){
    // const id=useId();
    return (
        <div className="checkBoxHolder">
            <label className="checkBox">
                <input type="checkbox" name={name}/>
                <span><IoMdCheckmark/></span>
            </label>
            <span>{label}</span>
        </div>
    )
}
export default function AccountSettings() {
    return (
        <main>
            <div className="accountSettings">
                <div className="container">
                    <SideBar/>
                    <div className="mainContent">
                        <h1>Account Settings</h1>
                        <div className="changePassword">
                            <h2>Change Password</h2>
                            <form action="" method="POST">
                                <PasswordInput label="Current Password" name="curPassword"/>
                                <PasswordInput label="New Password" name="newPassword"/>
                                <PasswordInput label="Confirm New Password" name="newPasswordRepeat"/>
                                <button type="submit">UPDATE PASSWORD</button>
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
                            <button>DELETE ACCOUNT</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
