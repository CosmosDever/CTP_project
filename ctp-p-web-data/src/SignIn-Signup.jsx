import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignInSignUp = () => {
  const [customers, setCustomers] = useState([]);
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

  // Fetch all customers on component mount
  useEffect(() => {
    axios.get('http://localhost:3001/customer')
      .then(response => setCustomers(response.data))
      .catch(error => console.error(error));
  }, []);

  // Handle signup form submission
  const handleSignup = () => {
    axios.post('http://localhost:3001/signup', signupData)
      .then(response => {
        console.log(response.data);
        // You can handle success here
      })
      .catch(error => console.error(error));
  };

  // Handle signin form submission
  const handleSignin = () => {
    axios.post('http://localhost:3001/signin', signinData)
      .then(response => {
        console.log(response.data);
        // You can handle success here
      })
      .catch(error => console.error(error));
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
          <button type="button" onClick={handleSignin}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInSignUp;