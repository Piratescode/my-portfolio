import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import myPhoto from "../assets/laptop.jpg"; // make sure the path is correct

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Crafting Educational Solutions with Code.</h2>
          <p>
            I specialize in developing custom school portals and computer-based
            testing systems. Let’s transform your educational technology with
            innovative and reliable solutions tailored to your needs.
          </p>
          <p>
            I use cutting-edge technologies to deliver efficient and scalable
            applications.
          </p>
        </div>
           {/* Add buttons for navigation */}
         <div className="about-buttons">
            <Link to="/portals" className="btn">Portal</Link>
            <Link to="/cbt-tests" className="btn">CBT Tests</Link>
          </div>
        </div>
      
    
      <div className="about-image">
        <img src={myPhoto} alt="LordRain" />
      </div>
    </section>
  );
}

export default About;
