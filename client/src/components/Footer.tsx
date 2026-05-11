import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
        <div className="container">
            <Link to='/'><span>AESTHETE</span></Link>
            <div className="footerLinks">
                <Link to='/terms-of-service'><span>Terms of Service</span></Link>
                <Link to='/privacy-policy'><span>Privacy Policy</span></Link>
                <Link to='/sustainability'><span>Sustainability</span></Link>
                <Link to='/contactUs'><span>Contact</span></Link>
            </div>
            <span>© 2026 AESTHETE. ALL THE RIGHTS RESERVED.</span>
        </div>
    </footer>
  );
}
