import React from 'react';
import './profile.css';

export default function Profile() {
  const agent = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };

  return (
    <div className="profile">
      <h2>Agent Profile</h2>
      <p>Name: {agent.name}</p>
      <p>Email: {agent.email}</p>
      <p>Phone: {agent.phone}</p>
    </div>
  );
}
