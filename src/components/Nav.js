import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-items'>
        <Link to="/">Home</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className='authentication'>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      </div>

    </div>
  )
}

export default Navbar;