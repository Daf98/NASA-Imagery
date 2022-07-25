import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/detail">Detail</NavLink></li>
    </ul>
    </>
  )
}

export default Navbar;