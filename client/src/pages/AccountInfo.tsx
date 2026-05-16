import NameInput from '../components/NameInput'
import SideBar from '../components/SideBar'

export default function AccountInfo() {
    return (
        <main>
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
                                <NameInput label="Name" placeholder="Alexander Prierce" isDisabled={true} type="string"/>
                                <NameInput label="Email" placeholder="alexander.p@gmail.ru" isDisabled={true} type="string"/>
                                <NameInput label="Phone" placeholder="+1 (555) 123-4567" isDisabled={true} type="string"/>
                            </div>
                            <div className="card">
                                <div className="top">
                                    <span>SHIPPING ADDRESS</span>
                                    <button>Edit</button>
                                </div>
                                <span>Alexander Pierce</span>
                                <span>123 Minimalist Avenue</span>
                                <span>Apt 4B</span>
                                <span>New York, Ny 10001</span>
                                <span>United State</span>
                                <span className="default">Default</span>
                            </div>
                        </div>
                        <div className="card bottom">
                            <div className="left">
                                <NameInput label="PASSWORD" placeholder="•••••••••" isDisabled={true} type="password"/>
                                <span>Last updated 3 months ago</span>
                            </div>
                            <button>Change Password</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
