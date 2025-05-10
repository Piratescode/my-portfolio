import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = ["Portfolio", "Technologies", "About"]

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/">MiraDev</a>
                </div>

                {/* Desktop */}
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    {links.map((link) => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
                
                <div className="nav-button">
                    <a href="#get-started">
                        <button>Get Started</button>
                    </a>
                </div>


                {/* Mobile */}
                <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;