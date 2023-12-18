import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope ,faPhone } from '@fortawesome/free-solid-svg-icons';
import Facebook_Logo from './assets/Facebook_Logo.png';
import mail_logo from './assets/mail_logo.png';
import phone_logo from './assets/Phone_logo.png';
import clock_logo from './assets/clock_logo.png';
import Swal from 'sweetalert2'

const Contact = () => {
  // State for the username and email
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');


  // Function to handle input change for username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Function to handle input change for email
  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Ok!",
      text: "we will get back to you as soon as we can!",
      icon: "success"
    });
    console.log(`Username: ${username}, Email: ${mail}, Phone: ${phone}`);
  }

  return (
    <div className='contactus'>
      <div className="container2">
        <div className="contact">Contact Us</div>
        <div className="text">Feel free to contact us anytime. We will get back to you as soon as we can!</div>
        <div className="username">
          <div className="username-input">
            <label className="label-user" htmlFor="username"></label>
            <div className='userlogo'>
              <FontAwesomeIcon icon={faUser} className="userlogo" />
            </div>
            <input className='user-input'
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        </div>

        <div className="mail">
          <div className="mail-input">
            <label className="label-user" htmlFor="mail"></label>
            <div className='mail-logo'>
              <FontAwesomeIcon icon={faEnvelope} className="mail-logo" />
            </div>
            <input className='m-input'
              type="text"
              id="mail"
              placeholder="Enter your E-mail"
              value={mail}
              onChange={handleMailChange}
            />
          </div>
        </div>

        <div className="phone">
          <div className="phone-input">
            <label className="label-phone" htmlFor="phone"></label>
            <div className='phone-logo'>
              <FontAwesomeIcon icon={faPhone} className="phone-logo" />
            </div>
            <input className='p-input'
              type="text"
              id="phone"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>

        <div>
          <button id="sendButton" className='send-button' onClick={handleFormSubmit}>Send</button>
        </div>
      </div>
      
      <div className='container3'>
        <div className='backgroud-info-1'></div>
        <div className='backgroud-info-2'></div>
        <div className='text-info'>
          <p1>Info</p1>
          <div className='facebook-logo'>
            <img src={Facebook_Logo} alt="facebooklogo" className='facebook-logo'/>
            <div className='facebook-text'>CenterPlaceParking</div>
          </div>
          <div className='mail-info-logo'>
            <img src={mail_logo} alt="maillogo" className='mail-info-logo'/>
            <div className='mail-text'>Centerplaceparking@gmail.com</div>
          </div>
          <div className='phone-info-logo'>
            <img src={phone_logo} alt="phonelogo" className='phone-info-logo'/>
            <div className='phone-text'>099 - 999 - 9999</div>
          </div>
          <div className='clock-info-logo'>
            <img src={clock_logo} alt="clocklogo" className='clock-info-logo'/>
            <div className='clock-text'>8.00 - 21.00</div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact;
