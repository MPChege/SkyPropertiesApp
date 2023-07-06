import React, { useState } from 'react';
import './form.css';

export default function Form() {
  const [houseName, setHouseName] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');

  const handleHouseNameChange = (e) => {
    setHouseName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHouse = {
      houseName,
      address,
      price
    };

    // Perform the fetch request to post the data
    fetch('your-api-endpoint-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newHouse)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Handle success response here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error here
      });
  };

  return (
    <div className="form">
      <h2>Add a House</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="House Name" value={houseName} onChange={handleHouseNameChange} />
        <input type="text" placeholder="Address" value={address} onChange={handleAddressChange} />
        <input type="number" placeholder="Price" value={price} onChange={handlePriceChange} />
        <button type="submit">Add House</button>
      </form>
    </div>
  );
}
