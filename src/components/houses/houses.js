import React from 'react';
import './houses.css';

export default function Houses() {
  const houses = [
    { id: 1, name: 'House 1', address: 'Address 1', price: 100000 },
    { id: 2, name: 'House 2', address: 'Address 2', price: 150000 },
    { id: 3, name: 'House 3', address: 'Address 3', price: 200000 },
  ];

  return (
    <div className="houses">
      <h2>List of Houses</h2>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <h3>{house.name}</h3>
            <p>{house.address}</p>
            <p>Price: ${house.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
