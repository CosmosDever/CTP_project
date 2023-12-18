import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./SignIn-Signup.css";
import Swal from 'sweetalert2'


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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required.",
          });
        }
        else if(response.data=="Email already exists"){
          console.log(response.data);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email already exists. Please try again.",
          });
        }
        else if(response.data=="Sign-up successful"){
          console.log(response.data);
          Swal.fire({
            title: "Ok!",
            text: "Sign-up successful!",
            icon: "success"
          });
        }
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sign-up failed. Please try again.",
        });
      });
  };

  // Handle signin form submission
  const handleSignin = () => {
    axios.post('http://localhost:3001/signin', signinData)
      .then(response => {
        if (response.data=="All fields are required") {
          console.log(response.data);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required.",
          });
          return;
        }
        else if (response.data == "no user found") {
          console.log(response.data);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please check your credentials.",
          });
          return;
        }

        else if(response.data){
          localStorage.setItem('customer_id', response.data[0].ID);
          Swal.fire({
            title: "Ok!",
            text: "Sign-in successful!",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/car-parking";
            }
          });
          console.log(response.data);
        }
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sign-in failed. Please check your credentials.",
        });
      });
  };

  return (
    <div className='all'>
      <div className='signup'>
        <h2>Sign Up</h2>
        <form>
          <label>
            First Name<br/>
            <input className='blank-space'
              type="text" 
              placeholder="Enter your first name"
              value={signupData.first_name}   
              onChange={(e) => setSignupData({ ...signupData, first_name: e.target.value })} />
          </label>
          <label> <br/>
            Last Name<br/>
            <input className='blank-space'
              type="text"
              placeholder="Enter your last name"
              value={signupData.last_name} 
              onChange={(e) => setSignupData({ ...signupData, last_name: e.target.value })} />
          </label> 
          <label> <br/>
            Email<br/>
            <input className='blank-space'
              type="email" 
              placeholder="Enter your E-mail"
              value={signupData.email} 
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
          </label>
          <label> <br/>
            Password<br/>
            <input className='blank-space'
              type="password" 
              placeholder="Enter your password"
              value={signupData.password} 
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
          </label>
          <label> <br/>
            Phone Number<br/>
            <input className='blank-space'
              type="text" 
              placeholder="Enter your phone number"
              value={signupData.phone_number} 
              onChange={(e) => setSignupData({ ...signupData, phone_number: e.target.value })} />
          </label><br/><br/>
              <div>
                <button className='signup-button' type="button" onClick={handleSignup}>Sign Up</button>
              </div>
        </form>
      </div>
        <div className='signin-change'>
          <div className='signin'>
            <h2>Sign In</h2>
            <form>
              <label>
                Email <br/>
                <input className='blank-space'
                  type="email" 
                  placeholder="Enter your E-mail"
                  value={signinData.email} 
                  onChange={(e) => setSigninData({ ...signinData, email: e.target.value })} />
              </label>
              <label><br/>
                Password<br/>
                <input className='blank-space'
                  type="password" 
                  placeholder="Enter your password"
                  value={signinData.password} 
                  onChange={(e) => setSigninData({ ...signinData, password: e.target.value })} />
              </label><br/><br/>
              <div>
                <button className='signin-button' type="button" onClick={() => handleSignin()}>Sign In</button>
              </div>
            </form>
          </div>
          <div className='change'>
            <h2>Password Change</h2>
              <div>
                <Link to="/update-pass">
                  <button className='change-button' type="button">Go to Password Change</button>
                </Link>
              </div>
          </div>
        </div>
    </div>
  );
};

export default SignInSignUp;