import SideBar from '../components/SideBar'
import {useId,useState} from 'react'
import { IoMdCheckmark} from "react-icons/io";

interface props{
    label:string;
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
function CheckBoxInput({label}:props){
    const id=useId();
    const [checked,setChecked]=useState<boolean>(false);
    return (
        <div className="checkBox">
            <div className={"checkBoxItself"}>
                <input type="checkbox" name="check" id={id}  checked={checked} onChange={()=>{
                    console.log('changed to '+!checked);
                    setChecked(p=>!p);
                }}/>
                <div className={"newInput"+(checked?" checked":"")}><IoMdCheckmark color="ffffff" size={"2.2rem"} /></div>
            </div>
            <label htmlFor={id}>{label}</label>
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
                                <PasswordInput label="Current Password"/>
                                <PasswordInput label="New Password"/>
                                <PasswordInput label="Confirm New Password"/>
                                <button type="submit">UPDATE PASSWORD</button>
                            </form>
                        </div>
                        <div className="emailPreferences">
                            <h2>Email Preferences</h2>
                            <form action="" method="POST">
                                <CheckBoxInput label="AESTHETE Newsletter"/>
                                <CheckBoxInput label="Order Updates & Tracking"/>
                                <CheckBoxInput label="Exclusive promotions & Early Access"/>
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
