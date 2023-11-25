import { Link } from "react-router-dom"
import "./Nav.css";
function Nav() {
    return (

        <nav className='navbox'>
            <div className='logo'>
                <div><img src="logo.png" /></div>
            </div>
            <ul className='navboxinnav'>
                <li className ='navbutton'><Link to="/">dHome</Link></li>
                <li className ='navbutton'><Link to="/Contact">Contact us</Link></li>
                <li className ='navbutton'><Link to="/About">About us</Link></li>
                <li className ='navbutton_sign'><Link to="/Signin-Signup">Sign in/Sign up</Link></li>
            </ul>
        </nav>
    )
}
export default Nav