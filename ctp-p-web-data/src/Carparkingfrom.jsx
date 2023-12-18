import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./Caparking.css";
import { Link } from 'react-router-dom';
import car_logo from './assets/car.png'
import Swal from 'sweetalert2'
const Carpark = () => {
  const [responseData, setResponseData] = useState(null);
  const [data_park , setdata_park] = useState({
    customer_id: localStorage.getItem('customer_id'),
    space_id: '', 
    car_vin: '',
    room_key: '', 
    book_date: ''
  }); 
  const [canceldata , setcanceldata] = useState({
    re_id: '', 
    sp_id: ''
  });
  const handlesubmit=  ()=>{
    axios.post('http://localhost:3001/carparking',data_park)
      .then(response => {
        if(response.data=="All fields are required"){
          console.log(response.data);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required.",
          });
        }
        console.log(response.data);
        localStorage.setItem('parking_id', response.data[0].parking_id);
        console.log(response.data[0].reservation_id);
        console.log(response.data[0].parking_id);
        setcanceldata({
          ...canceldata,
          re_id: response.data[0].reservation_id,
          sp_id: response.data[0].parking_id
        });
        setResponseData(response.data);
      })
      
      .catch(error => {
        console.error(error);
      });
  }

  const shouldShowCar = (slotNumber) => {
    
    return parseInt(data_park.space_id) === slotNumber;
  };


  
  const handlecancel= ()=>{
    axios.post('http://localhost:3001/cancel',canceldata)
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
  const handleconfirm = ()=>{
    Swal.fire({
      title: "Ok!",
      text: "Reservation confirmed!",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/';
      }
    });

      
  }

//------------------------------------------------------------------------


  const [currentLayer, setCurrentLayer] = useState(1);
  const handleLayerChange = (layerNumber) => {
    setCurrentLayer(layerNumber);
  };

  const renderLayer = (layerNumber) => {
    const startSlot = (layerNumber - 1) * 12 + 1;
    return (
      <>
        <div className='parking-slot-holder'>
          {Array.from({ length: 6 }, (_, i) => startSlot + i).map(num => (
            <div className='parking-slot' key={`slot-${num}`} id={`slot-${num}`}> {num} <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(num) ? 'visible' : 'hidden'}`} /> </div>
          ))}
        </div>
        <div className='parking-way' id="entry-way"></div>
        <div className='parking-way'></div>
        <div className='parking-slot-holder'>
          {Array.from({ length: 6 }, (_, i) => startSlot + 6 + i).map(num => (
            <div className='parking-slot' key={`slot-${num}`} id={`slot-${num}`}>{num} <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(num) ? 'visible' : 'hidden'}`} /></div>
          ))}
        </div>
      </>
    );
  };

  
  
  

//----------------------------------------------------------------


  return (
    <div className='parking' >
      <div className='dashboard'>
        <div className='parking-form'>
          <label className='label-parking-1'>
                Room key:
                <input type="text" className="room-input" placeholder='Room key:' value={data_park.room_key} onChange={(e) => setdata_park({ ...data_park, room_key: e.target.value })} />
          </label>
          <label className='label-parking'> 
                Car VIN:
                <input type="text" className='car-vin' placeholder='Car VIN:' value={data_park.car_vin} onChange={(e) => setdata_park({ ...data_park, car_vin: e.target.value })} />
          </label>
          <label className='label-parking'>
                Book Date:
                <input type="date" className='book-date' value={data_park.book_date} onChange={(e) => setdata_park({ ...data_park, book_date: e.target.value })} />
          </label>
          <label className='label-parking'>
                Space ID:
                <input type="text" className='space-id' placeholder='Space ID:' value={data_park.space_id} onChange={(e) => setdata_park({ ...data_park, space_id: e.target.value })} />
          </label>
        </div>
      

        
        {responseData && responseData[0]!=="All fields are required" && (
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
              <div>
                <button type="button" className='confirm_button' onClick={handleconfirm}>confirm</button>
              </div>

              <div>
                <button type="button"  className='cancel_button' onClick={handlecancel}>cancel</button>
              </div>

            </div>

          </div>
        )}
      
        
      <div className='g-floor'>
      <div className='floor'>Floor:</div>
      <div className='new-car-entry'>
        <div onClick={() => handleLayerChange(1)} id="slot1" className={currentLayer === 1 ? 'active-button' : ''}>1</div>
        <div onClick={() => handleLayerChange(2)} id="slot2" className={currentLayer === 2 ? 'active-button' : ''}>2</div>
        <div onClick={() => handleLayerChange(3)} id="slot3" className={currentLayer === 3 ? 'active-button' : ''}>3</div>
        <div onClick={() => handleLayerChange(4)} id="slot4" className={currentLayer === 4 ? 'active-button' : ''}>4</div>
        <div onClick={() => handleLayerChange(5)} id="slot5" className={currentLayer === 5 ? 'active-button' : ''}>5</div>
        <div onClick={() => handleLayerChange(6)} id="slot6" className={currentLayer === 6 ? 'active-button' : ''}>6</div>
      </div>
      </div>

              

        <button type="button" className="send-button-parking" onClick={handlesubmit}>Submit</button>
      
        </div>
        <div className='container-parking' id="parkingspace">
          {currentLayer === 1 ? (
            <>
              <div className='parking-slot-holder'>
                <div className='parking-slot' id="slot-1">1 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(1) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-2">2 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(2) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-3">3 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(3) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-4">4 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(4) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-5">5 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(5) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-6">6 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(6) ? 'visible' : 'hidden'}`} /></div>
              </div>
              <div className='parking-way' id="entry-way"></div>
              <div className='parking-way'></div>
              <div className='parking-slot-holder'>
                <div className='parking-slot' id="slot-7">7 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(7) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-8">8 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(8) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-9">9 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(9) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-10">10 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(10) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-11">11 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(11) ? 'visible' : 'hidden'}`} /></div>
                <div className='parking-slot' id="slot-12">12 <img src={car_logo} alt="car" className={`img-car ${shouldShowCar(12) ? 'visible' : 'hidden'}`} /></div>
              </div>
            </>
          ) : renderLayer(currentLayer)}
        </div>




        <div className='outside'>Entry / Exit</div>
      
    </div>
    
  );
}

export default Carpark;
