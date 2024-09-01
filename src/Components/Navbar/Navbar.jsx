import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <header className="navbar">
        <h3 className="logo">TrekLen</h3>
        <nav className="navlist">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/flight">Flight</Link></li>
            <li><Link to="/train">Train</Link></li> 
            <li><a href="">Bus</a></li>
            <li><a href="">Hotel</a></li>
            <li><a href="">Customer Support</a></li>
          </ul>
        </nav>
        <button id='btn'>Log In</button>
      </header>
    </div>
  );
}

export default Navbar;