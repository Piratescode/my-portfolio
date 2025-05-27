import React from "react";
import "./GetStarted.css"; // create and style this

const GetStarted = () => {
  return (
    <div className="get-started-container">
        <div className="container">
      <h1>Get Started with MiraDev</h1>
      <p>Discover how we can help bring your project to life with our tailored digital solutions.</p>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Custom School Portals</li>
          <li>Computer-Based Testing Systems</li>
          <li>Web Development & Hosting</li>
        </ul>
      </section>

      <section className="quote-form">
        <h2>Request a Quote</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Project Description" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
      </div>
    </div>
  );
};

export default GetStarted;
