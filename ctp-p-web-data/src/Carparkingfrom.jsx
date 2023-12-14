import React, { useState } from 'react';
import axios from 'axios';
import "./Caparking.css";
import { Link } from 'react-router-dom';
const Carpark = () => {
  const [responseData, setResponseData] = useState(null);
  const [data_park , setdata_park] = useState({
    customer_id: localStorage.getItem('customer_id'),
    space_id: '', 
    car_vin: '',
    room_key: '', 
    book_date: ''
  }); 
  const handlesubmit= ()=>{
    axios.post('http://localhost:3001/carparking',data_park)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('reservation_id', response.data[0].ID);
        setResponseData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  const [reservation_id ] = useState({
    reservation_id : String(parseInt(localStorage.getItem('reservation_id'))+1)
  });
  const handlecancel= ()=>{
    axios.post('http://localhost:3001/cancel',reservation_id)
      .then(response => {
        if (response.data == "Reservation cancelled successfully") {
          window.location.href = '/car-parking';
          console.log(response.data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <div>
      <label>
            Room key:
            <input type="text" value={data_park.room_key} onChange={(e) => setdata_park({ ...data_park, room_key: e.target.value })} />
      </label>
      <label>
            Car VIN:
            <input type="text" value={data_park.car_vin} onChange={(e) => setdata_park({ ...data_park, car_vin: e.target.value })} />
      </label>
      <label>
            Book Date:
            <input type="date" value={data_park.book_date} onChange={(e) => setdata_park({ ...data_park, book_date: e.target.value })} />
      </label>
      <label>
            Space ID:
            <input type="text" value={data_park.space_id} onChange={(e) => setdata_park({ ...data_park, space_id: e.target.value })} />
      </label>
    

      <button type="button" onClick={handlesubmit}>Submit</button>
      {responseData && responseData.length > 0 && (
        <div className='c_reservationCard'>
          <h2>Confrim Booking</h2>
          <ul>
            {Object.entries(responseData[0]).map(([key, value]) => (
              key === 'customer_name' && (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              )
              
            ))}
          </ul>
          <ul>
            {Object.entries(responseData[0]).map(([key, value]) => (
              key === 'room_id' && (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              )
              
            ))}
          </ul>
          <ul>
            {Object.entries(responseData[0]).map(([key, value]) => (
              key === 'car_vin' && (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              )
              
            ))}
          </ul>
          <ul>
            {Object.entries(responseData[0]).map(([key, value]) => (
              key === 'book_date' && (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              )
              
            ))}
          </ul>
          <div className='buttons'>
            <div className='confirm_button'>
              <Link to="/"> <button type="button">confirm</button></Link>
            </div>

            <div className='cancel_button'>
              <button type="button" onClick={handlecancel}>cancel</button>
            </div>

          </div>
          

        </div>
      )}
      
    </div>
    
  );
}

export default Carpark;
