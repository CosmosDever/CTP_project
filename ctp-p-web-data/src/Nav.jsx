import { Link } from "react-router-dom"
import "./Nav.css";
import home from './assets/homelogo.png'

function Nav() {
    return (

        <nav className='navbox'>
            <div className='logo'>
                <div><img src="logo.png" /></div>
                <div className='logo-text'>Centerpark</div>
            </div>
            <ul className='navboxinnav'>
                <li className ='navbutton'><Link to="/"> <img src={home}/> </Link></li>
                <li className ='navbutton_contact'><Link to="/Contact">Contact us</Link></li>
                <li className ='navbutton_about'><Link to="/About">About us</Link></li>
                <li className ='navbutton_sign'><Link to="/Signin-Signup">Sign in/Sign up</Link></li>
            </ul>
        </nav>
    )
}
export default Nav