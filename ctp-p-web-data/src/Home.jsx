import "./Home.css";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import parking from './assets/parking.png'



function Home() {
    const isSignedIn = localStorage.getItem('customer_id') !== null; // Check if user is signed in

    
    return (
        <>
            <div className="homepic">  </div>
            <header>
            </header>
            <body>
                
                <ul className="carparkingbox">
                    <h1>Welcome to Centerpark</h1>
                    <h2>We'll help you find a parking space.</h2>
                    {isSignedIn 
                    ?   <li className="carparkingButt">
                            <Link to="/car-parking" className="carpark">Book your parking space now!</Link>
                        </li>
                    :   <li className="carparkingButt">
                            <Link to="/Signin-Signup" className="carpark">Book your parking space now!</Link>
                        </li>
                }
                    
                </ul>
                <div class = "container">
                        <div><img src="https://img.freepik.com/premium-photo/top-down-aerial-view-many-cars-parking-lot-supermarket-sale-car-dealer-market_127089-10749.jpg"/></div>
                        <div class = "text">
                                <p1>Hotel Parking Booking</p1>
                                <p5>
                                    <div>Hotel parking booking websites allow you to pre-book<br /></div>
                                    <div>parking at your hotel. Go through the search, reserve<br /></div>
                                    <div>and confirmation steps to make parking reservations<br /></div>
                                    <div>convenient and time-saving.</div>
                                </p5>
                        </div>
                    </div>
                    <div className="parking1"><img src={parking}/></div>
            </body>
        </>
    );
}
export default Home;