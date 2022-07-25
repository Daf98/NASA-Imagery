import React from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <>
    <div>Home</div>
    <button><NavLink to="/detail">Go to detail</NavLink></button>
    </>
  )
  
}

export default Home