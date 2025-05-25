// src/pages/Portfolio.jsx
import React from 'react';
import projectSample from '../assets/images/project-sample.jpg';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-container">
        <h2>Our Projects</h2>
        <p className="subtitle">
          Explore our diverse range of projects that demonstrate our expertise in developing innovative educational solutions tailored to client needs.
        </p>

        <div className="portfolio-content">
          <div className="portfolio-image">
          <img src={projectSample} alt="Project Dashboard" />          
          </div>

          <div className="portfolio-details">
            <ul>
              <li>
                <strong>#</strong> Dynamic School Portal for ABC Academy - A comprehensive portal with student registration and course management.
              </li>
              <li>
                <strong>#</strong> Computer-Based Testing System for XYZ University - A secure system for efficient exam administration.
              </li>
              <li>
                <strong>#</strong> Custom Solutions - Tailored applications for various educational institutions.
              </li>
            </ul>

            <div className="project-highlights">
              <div>
                <h4>ABC Academy</h4>
                <p>2023-05</p>
              </div>
              <div>
                <h4>XYZ University</h4>
                <p>2023-08</p>
              </div>
              <div>
                <h4>Innovative Solutions</h4>
                <p>Custom applications for educational needs.</p>
              </div>
              <div>
                <h4>User-Friendly</h4>
                <p>Designed for seamless interaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
