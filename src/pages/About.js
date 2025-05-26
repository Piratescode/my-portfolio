import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
        <div className="container">
      <h2>About MiraDev</h2>
      <p className="intro">
        At MiraDev, we specialize in building modern web solutions tailored for educational institutions. 
        With expertise in full-stack development and a focus on usability, we deliver scalable and user-friendly applications.
      </p>

      <div className="about-grid">
        <div className="about-section">
          <h3>What We Do</h3>
          <p>
            We develop custom portals, CBT testing systems, and educational tools that empower schools and universities to manage operations more effectively.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Vision</h3>
          <p>
            To be the go-to tech partner for digital transformation in education—offering secure, intuitive, and scalable software solutions.
          </p>
        </div>

        <div className="about-section">
          <h3>Why Choose Us</h3>
          <p>
            Our focus on responsive design, strong backend architecture, and modern tech stacks ensures the best experience for both administrators and students.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
