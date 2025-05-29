import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Portfolio", path: "/portfolio" },       // Routed page
    { name: "Technologies", path: "/technologies" },
    { name: "About", path: "/about" },           // Scroll to section
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.name}>
              {link.path.startsWith("#") ? (
                <a href={link.path} onClick={() => setIsOpen(false)}>
                    {link.name}
                </a>
              ) : (
                <Link to={link.path} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Get Started Button */}
        <div className="nav-button">
          <Link to="/get-started">
             <button>Get Started</button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
