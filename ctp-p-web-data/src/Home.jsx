import "./Home.css";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";



function Home() {
    
    return (
        <>
            <header>
            </header>
            <body>
                <ul className="carparkingbox">
                    <li className="carparkingButt">
                        <Link to="/car-parking" className="carpark">Car Parking</Link>
                    </li>
                </ul>
                <div class = "container">
                        <div><img src="https://img.freepik.com/premium-photo/top-down-aerial-view-many-cars-parking-lot-supermarket-sale-car-dealer-market_127089-10749.jpg"/></div>
                        <div class = "text">
                                <p>Hotel Parking Booking</p>
                                <p>
                                    <div>Hotel parking booking websites allow you to pre-book<br /></div>
                                    <div>parking at your hotel. Go through the search, reserve,<br /></div>
                                    <div>and confirmation steps to make parking reservations<br /></div>
                                    <div>convenient and time-saving.</div>
                                </p>
                        </div>
                    </div>
            </body>
        </>
    );
}
export default Home;