import { Link } from 'react-router-dom';
import NameInput from '../components/NameInput'

export default function SignUp() {
    return (
        <section className="signUp">
            <div className="container centered">
                <div className="signUpHolder">
                    <h1>Create an Account</h1>
                    <p> Join AESTHETE for a curated experience.</p>
                    <form action="">
                        <div className="name">
                            <NameInput placeholder="First Name" label="FIRST NAME" isDisabled={false} type="text"/>
                            <NameInput placeholder="Last Name" label="LAST NAME" isDisabled={false} type="text"/>
                        </div>
                        <NameInput placeholder="Email Address" label="EMAIL ADDRESS" isDisabled={false} type="email"/>
                        <NameInput placeholder="Password" label="PASSWORD" isDisabled={false} type="password"/>
                        <NameInput placeholder="Confirm Password" label="CONFIRM PASSWORD" isDisabled={false} type="password"/>
                        <button type="submit" className="submitBtn">CREATE ACCOUNT</button>
                    </form>
                    <Link to="/auth/login">ALREADY HAVE AN ACCOUNT? SIGN IN</Link>
                </div>
            </div>
        </section>
    );
}
