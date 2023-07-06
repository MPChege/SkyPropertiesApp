import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
