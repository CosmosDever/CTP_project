import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Carpark = () => {
  const handleSubmit = () => {
    axios.get('http://localhost:3001/carparking')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Carpark;
