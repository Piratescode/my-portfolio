import React from 'react';
import heroImage from '../assets/laptop.jpg'; // Update the path if needed
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className='containers'>
        <div className="about-content">
          <h1>
            Crafting <span className="highlight">Educational Solutions</span> with <strong>Code.</strong>
          </h1>
          <p>
            I specialize in developing custom school portals and computer-based testing systems.
            Let’s transform your educational technology with innovative and reliable solutions
            tailored to your needs. I use cutting-edge technologies to deliver efficient and scalable
            applications.
          </p>
          <div className="about-buttons">
            <button className="primary-btn">Portals</button>
            <button className="outline-btn">Tests</button>
          </div>
        </div>
        
       
      </div>
      <div className='about-image'><img src={heroImage} alt="Developer working" /></div>


    </section>

  );
};

export default About;
