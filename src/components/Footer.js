// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-contact">
        <div className="footer-box">
          <i className="icon">📧</i>
          <h3>Email Us</h3>
          <p>
            For any inquiries or collaboration opportunities, feel free to reach out via email at
            <a href="mailto:contact@miradev.com"> contact@miradev.com</a>.
          </p>
        </div>

        <div className="footer-box">
          <i className="icon">📞</i>
          <h3>Call Us</h3>
          <p>
            You can also contact us by phone at <strong>+2348063460814</strong>. Our team is available to discuss your projects.
          </p>
        </div>

        <div className="footer-box">
          <i className="icon">📍</i>
          <h3>Visit Us</h3>
          <p>
            We welcome you to our office located at <strong>St. Thaddeus Science Academy, Madakiya</strong>.
          </p>
        </div>
      </div>

      <div className="footer-links">
        <a href="#portfolio">Portfolio</a>
        <a href="#technologies">Technologies</a>
        <a href="#about">About</a>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>Copyright © 2025 MiraDev Systems. All rights reserved.</p>
        <div className="footer-policies">
          <a href="#terms">Terms and Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
