import React, { useState } from 'react';
import axios from 'axios';
const Carpark = () => {
  const [responseData, setResponseData] = useState(null);
  const [customer_id] = useState({
    customer_id :localStorage.getItem("customerID")
  }); 
  const handleSubmit = () => {
    axios.post('http://localhost:3001/carparking',customer_id)
      .then(response => {
        setResponseData(response.data);
        console.log(customer_id);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <button type="button" onClick={handleSubmit}>Submit</button>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Carpark;
