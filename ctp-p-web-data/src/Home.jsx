import "./Home.css";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";


function Home() {


    const [count, setCount] = useState({});

    const getAPI = async () => {
        const res = await axios.get('http://localhost:3000/Signin-Signup').then(res => res.data);
        setCount(res);
    }

    useEffect(() => {
        getAPI();
    })



    return (
        <>
            <div className="picture">
                
            </div>
            <ul className="carparkingbox">
                <li className="carparkingButt">
                    <Link to="/carparking">Car Parking</Link>
                </li>
            </ul>
            
        </>
    );
}
export default Home;