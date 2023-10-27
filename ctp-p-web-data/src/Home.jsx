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
            <header>
            </header>
            <body>
                <ul className="carparkingbox">
                    <li className="carparkingButt">
                        <Link to="/carparking">Car Parking</Link>
                    </li>
                </ul>
                <div class = "container">
                        <div><img src="https://img.freepik.com/premium-photo/top-down-aerial-view-many-cars-parking-lot-supermarket-sale-car-dealer-market_127089-10749.jpg"/></div>
                        <div class = "text">
                                <p>Hotel Parking Booking</p>
                                <p>Hotel parking booking websites allow you to pre-book parking at your hotel. 
                                Go through the search, reserve, and confirmation steps to make parking reservations 
                                convenient and time-saving.</p>
                        </div>
                    </div>
            </body>
        </>
    );
}
export default Home;