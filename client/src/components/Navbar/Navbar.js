import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">NYT Search</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/about'>Results</NavLink></li>
          <li><NavLink to='/contact'>Saved</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar;