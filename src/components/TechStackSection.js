import React from 'react';
import './TechStackSection.css';
import techImage from '../assets/tech-stack.jpg'; // Replace with your actual image path

const TechStackSection = () => {
  return (
    <section className="tech-stack-section">
      <div className='container'>
        <div className="tech-content">
          <h2>
            Our <em>Cutting-Edge</em> Tech<br /> Stack for <em>Educational Solutions</em>
          </h2>
          <p>
            At MiraDev Systems, we leverage a powerful combination of technologies to build robust and scalable school portals and computer-based testing systems. Our expertise ensures efficient and reliable solutions for your educational needs.
          </p>
          <ul className="tech-list">
            <li>💻 Frontend: HTML, CSS, JavaScript, React</li>
            <li>🛠️ Backend: Python, Django, FastAPI</li>
            <li>🗄️ Database: PostgreSQL, MySQL</li>
          </ul>
        </div>
        <div className="tech-image">
          <img src={techImage} alt="Tech Stack" />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
