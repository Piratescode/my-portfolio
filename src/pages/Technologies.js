import React from "react";
import "./Technologies.css";

const technologies = [
  {
    name: "React",
    image: "/images/react.png",
    description: "A powerful library for building dynamic and responsive user interfaces."
  },
  {
    name: "Django",
    image: "/images/django.png",
    description: "A high-level Python web framework that encourages rapid development."
  },
  {
    name: "PostgreSQL",
    image: "/images/postgresql.png",
    description: "An advanced open-source relational database system."
  },
  {
    name: "Bootstrap",
    image: "/images/bootstrap.png",
    description: "A popular CSS framework for responsive and mobile-first design."
  },
];

const Technologies = () => {
  return (
    <div className="technologies-page">
    <div className="container">
      <h2>Technologies I Use</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <img src={tech.image} alt={tech.name} />
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Technologies;
