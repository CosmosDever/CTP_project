import React, { useState } from 'react';
import axios from 'axios';

const Carpark = () => {
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = () => {
    axios.get('http://localhost:3001/carparking')
      .then(response => {
        setResponseData(response.data);
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
