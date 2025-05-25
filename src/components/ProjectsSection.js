import React from 'react';
import './ProjectsSection.css';
import dashboardImage from '../assets/dashboard.jpg'; // Update with your actual image path

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className='container'>
      <div className="projects-image">
        <img src={dashboardImage} alt="Solutions Dashboard" />
      </div>
      <div className="projects-content">
        <div className="projects-left">
          <h2>Our Projects</h2>
          <p>
            Explore our diverse portfolio of innovative solutions tailored for educational institutions, including dynamic school portals and efficient testing systems.
          </p>
          <ul>
            <li># Dynamic School Portal for ABC Academy</li>
            <li># Computer-Based Testing System for XYZ University</li>
            <li># Custom Solutions for Educational Needs</li>
          </ul>
        </div>
        <div className="projects-right">
          <div>
            <h4>ABC Academy</h4>
            <p>2023-05</p>
            <h4>Innovative Solutions</h4>
            <p>Tailored for Education</p>
          </div>
          <div>
            <h4>XYZ University</h4>
            <p>2023-08</p>
            <h4>Client Focused</h4>
            <p>Delivering Results</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
