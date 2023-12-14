<<<<<<< HEAD
import React, { useState } from 'react';
import './SignIn-Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
>>>>>>> 627bd4538e720fd1351f11371b2f29b06cce4c6d

const SignInSignUp = () => {
  const [signupData, setSignupData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
  });
  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });


  // Handle signup form submission
  const handleSignup = () => {
    axios.post('http://localhost:3001/signup', signupData)
      .then(response => {
        if(response.data=="All fields are required"){
          console.log(response.data);
          alert("All fields are required."); // Show error alert
        }
        else if(response.data=="Email already exists"){
          console.log(response.data);
          alert("Email already exists. Please try again."); // Show error alert
        }
        else if(response.data=="Sign-up successful"){
          console.log(response.data);
          alert("Sign-up successful!");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Sign-up failed. Please try again."); // Show error alert
      });
  };

  // Handle signin form submission
  const handleSignin = () => {
    axios.post('http://localhost:3001/signin', signinData)
      .then(response => {
        if (response.data=="All fields are required") {
          console.log(response.data);
          alert("All fields are required."); // Show error alert
          return;
        }
        else if (response.data == "no user found") {
          console.log(response.data);
          alert("no user found. Please check your credentials."); // Show error alert
          return;
        }

        else if(response.data){
          localStorage.setItem('customer_id', response.data[0].ID);
          alert("Sign-in successful!");
          console.log(response.data);
          window.location.href = '/car-parking';
        }
      })
      .catch(error => {
        console.error(error);
        alert("Sign-in failed. Please check your credentials."); // Show error alert
      });
  };

  return (
<<<<<<< HEAD
    <div className='sign-in'>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className='mail'>
          <div className='mail-logo-signin'>
            <FontAwesomeIcon icon={faEnvelope} className="mail-logo" />
          </div>
          <input className = "mail-input-signin" type="email" value={email} placeholder="Enter your E-mail" onChange={handleEmailChange} required />
        </div> 

        <br />

        <input className = "password-input" type="password" value={password} placeholder="Enter your Password" onChange={handlePasswordChange} required />
        <br />
        <button type="submit">Sign In</button>
      </form>
=======
    <div>
      <div>
        <h2>Sign Up</h2>
        <form>
          <label>
            First Name:
            <input type="text" value={signupData.first_name} onChange={(e) => setSignupData({ ...signupData, first_name: e.target.value })} />
          </label>
          <label>
            Last Name:
            <input type="text" value={signupData.last_name} onChange={(e) => setSignupData({ ...signupData, last_name: e.target.value })} />
          </label>
          <label>
            Email:
            <input type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
          </label>
          <label>
            Password:
            <input type="password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
          </label>
          <label>
            Phone Number:
            <input type="text" value={signupData.phone_number} onChange={(e) => setSignupData({ ...signupData, phone_number: e.target.value })} />
          </label>
          <button type="button" onClick={handleSignup}>Sign Up</button>
        </form>
      </div>

      <div>
        <h2>Sign In</h2>
        <form>
          <label>
            Email:
            <input type="email" value={signinData.email} onChange={(e) => setSigninData({ ...signinData, email: e.target.value })} />
          </label>
          <label>
            Password:
            <input type="password" value={signinData.password} onChange={(e) => setSigninData({ ...signinData, password: e.target.value })} />
          </label>
          <button type="button" onClick={() => handleSignin()}>Sign In</button>
        </form>
      </div>
      <div>
        <h2>Password Change</h2>
        <Link to="/update-pass">
          <button type="button">Go to Password Change</button>
        </Link>
      </div>
>>>>>>> 627bd4538e720fd1351f11371b2f29b06cce4c6d
    </div>
  );
};

export default SignInSignUp;