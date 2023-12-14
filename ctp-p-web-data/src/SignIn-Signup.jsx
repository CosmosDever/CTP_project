import React, { useState } from 'react';
import './SignIn-Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SignInSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful sign-in
        console.log('Sign-in successful:', data);
      } else {
        // Handle sign-in error
        console.log('Sign-in error:', response.status);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
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
    </div>
  );
};

export default SignInSignUp;