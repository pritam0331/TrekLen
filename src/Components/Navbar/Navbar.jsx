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
            <li><a href='/'>Home</a></li>
            <li><a href="/flight">Flight</a></li>
            <li><a href="/train">Train</a></li> 
            <li><a href="/bus">Bus</a></li>
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