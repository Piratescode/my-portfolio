import React from "react";
import "./GetStarted.css"; // create and style this

const GetStarted = () => {
  return (
    <section className="get-started-container">
      <div className="container-getstarted">
        <div className="get-started-heading">
          <h1>Get Started with MiraDev</h1>
          <p>Discover how we can help bring your project to life with our tailored digital solutions.</p>
        </div>

        <div className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Custom School Portals</li>
            <li>Computer-Based Testing Systems</li>
            <li>Web Development & Hosting</li>
          </ul>
        </div>

        <div className="quote-form">
          <h2>Request a Quote</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Project Description" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
