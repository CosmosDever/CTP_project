import { Link } from "react-router-dom"
import "./Nav.css";
function Nav() {
    return (

        <nav class='navbox'>
            <div class='logo'>logo</div>
            <ul class='navboxinnav'>
                <li class ='navbutton'><Link to="/">Home</Link></li>
                <li class ='navbutton'><Link to="/Contact-us">Contact us</Link></li>
                <li class ='navbutton'><Link to="/About-us">About us</Link></li>
                <li class ='navbutton_sign'><Link to="/Signin-Signup">Sign in/Sign up</Link></li>
            </ul>
        </nav>
    )
}
export default Nav