// src/pages/Home.js
import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
        <div className='container'>
      <h2>Get in Touch</h2>
      <p>Fill out the form below and we’ll get back to you shortly.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
      </div>
    </section>
  );
};

export default ContactSection;
