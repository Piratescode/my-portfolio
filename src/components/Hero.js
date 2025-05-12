import myPhoto from "../assets/photo.jpg";
import React from 'react';
import './Hero.css';  // We'll add styles for this in the next step



const Hero = () => {
  return (
    <section className="hero">
    <div className="hero-container">
      
      {/* Left side: Text */}
      <div className="hero-text">
        <h1>Hello, I'm <span className="name">LordRain</span></h1>
        <h2><span className="animated-text"></span></h2>
        <p>Passionate Developer & Designer</p>
        <button>Get in Touch</button>
      </div>

      {/* Right side: Image with blob */}
      <div className="hero-image">
        <div className="blob">
        <img src={myPhoto} alt="My Photo" />


        </div>
      </div>

    </div>
  </section>
  );
};

export default Hero;
