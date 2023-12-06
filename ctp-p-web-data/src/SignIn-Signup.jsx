import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignInSignUp = () => {
  const [signupData, setSignupData] = useState({
    ID: '',
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
        if(response.data){
          console.log(response.data[0].ID);
          const customerID = response.data[0].ID;
          alert("Sign-in successful!");
          localStorage.setItem("customerID", customerID);
          console.log(signinData)
          console.log(customerID)

        }
        else{
          console.log(response.data);
          alert("Sign-in failed. Please check your credentials."); // Show error alert
        }
      })
      .catch(error => {
        console.error(error);
        alert("Sign-in failed. Please check your credentials."); // Show error alert
      });
  };

  return (
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
          <Link to = "/car-parking"><button type="button" onClick={() => handleSignin()}>Sign In</button></Link>
        </form>
      </div>
      <div>
        <h2>Password Change</h2>
        <Link to="/update-pass">
          <button type="button">Go to Password Change</button>
        </Link>
      </div>
    </div>
  );
};

export default SignInSignUp;