// In your React component
import React, { useState } from 'react';
import axios from 'axios';

const PasswordChange = () => {
  const [passwordData, setPasswordData] = useState({
    email: '',
    newPassword: ''
  });

  // Handle password change form submission
  const handlePasswordChange = () => {
    axios.post('http://localhost:3001/changepassword', passwordData)
      .then(response => {
        console.log(response.data);
        if(response.data=="Password changed successfully"){
            alert("Password changed successfully!");
        }
        else{
            alert("Failed to change password. Please check your credentials."); // Show error alert
        }
        // You can handle success here
      })
      .catch(error => {
        console.error(error);
        alert("Failed to change password. Please check your credentials."); // Show error alert
      });
  };

  return (
    <div >
      <h2>Password Change</h2>
      <form>
        <label>
          Email:
          <input type="email" value={passwordData.email} onChange={(e) => setPasswordData({ ...passwordData, email: e.target.value })} />
        </label>
        <label>
          New Password:
          <input type="password" value={passwordData.newPassword} onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })} />
        </label>
        <button type="button" onClick={handlePasswordChange}>Change Password</button>
      </form>
    </div>
  );
};

export default PasswordChange;
