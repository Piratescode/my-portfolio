import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = ["Home", "About", "Services", "Contact"]

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">MiraDev</div>

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

                {/* Mobile */}
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    <div className={isOpen ? "bar rotate" : "bar"}></div>
                    <div className={isOpen ? "bar fade" : "bar"}></div>
                    <div className={isOpen ? "bar rotate-reverse" : "bar"}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;