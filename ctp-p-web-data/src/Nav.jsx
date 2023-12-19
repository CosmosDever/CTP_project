import { Link } from "react-router-dom"
import "./Nav.css"
// import home from './assets/home.png'


function Nav() {

    const isSignedIn = localStorage.getItem('customer_id') !== null; // Check if user is signed in

    const handleLogout = () => {
        localStorage.removeItem('customer_id'); // Clear sign-in data
        localStorage.removeItem('reservation_id');
        localStorage.removeItem('space_id');
        
        // Redirect to home or update the state as needed
        window.location.href = '/';
    };

    return (

        <nav className='navbox'>
            <div className='logo'>
                <div><img src="logo.png" /></div>
                <div className='logo-text'>CenterPlace</div>
            </div>
            <ul className='navboxinnav'>
                {/* <li className ='navbutton'><Link to="/"><img src={home}/></Link></li> */}
                <li className ='navbutton'><Link to="/">Home</Link></li>
                <li className ='navbutton_contact'><Link to="/Contact">Contact us</Link></li>
                <li className ='navbutton_about'><Link to="/About">About us</Link></li>
                {isSignedIn 
                    ? <li className ='navbutton_sign' onClick={handleLogout}><Link to="/"> Log Out</Link></li>
                    : <li className ='navbutton_sign'><Link to="/Signin-Signup">Sign in / Sign up</Link></li>
                }
            </ul>
        </nav>
    )
}
export default Nav