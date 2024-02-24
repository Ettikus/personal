// ContactPage.js
import React from 'react';
import Navigation from './Navigation';
import './App.css'; // Import CSS file

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="header">
          <h1>Contact Me</h1>
          <div className="contact-block">
            <h2>Email</h2>
            <p>
              <a href="mailto:maraisettienne@gmail.com">maraisettienne@gmail.com</a>
            </p>
          </div>
          <div className="contact-block">
            <h2>WhatsApp</h2>
            <p>
              <a href="https://wa.me/+27676140090">Send WhatsApp message</a>
            </p>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default ContactPage;
