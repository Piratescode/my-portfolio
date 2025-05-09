import React from 'react';
import './Hero.css';  // We'll add styles for this in the next step

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Stephen Alhamdu</h1>
        <p>Web Developer | React Enthusiast</p>
        <p>Building user-friendly web experiences with cutting-edge technologies</p>
        <a href="#projects" className="cta-btn">Check Out My Work</a>
      </div>
    </section>
  );
};

export default Hero;
