import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaCog, FaLessThan } from 'react-icons/fa';

const Navbar = () => (
  <nav id="navbar">
    <button type="button" className="nav-btn" aria-label="Go back"><NavLink to="/" className="nav-btn"><FaLessThan /></NavLink></button>
    <button type="button" className="nav-btn" aria-label="Settings"><FaCog /></button>
  </nav>
);

export default Navbar;
