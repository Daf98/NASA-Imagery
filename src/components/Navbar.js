import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <button type="button"><NavLink to="/">Back</NavLink></button>
    </>
  )
}

export default Navbar;