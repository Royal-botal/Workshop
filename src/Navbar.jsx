// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Import CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo logo-image-text">
                    <span className="logo-text">LONGTERM POWER SOLUTIONS</span>
                    <span className="logo-images-bg"></span>
                </h1>
            </div>
            <div className="navbar-links-row">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
