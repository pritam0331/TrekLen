import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      {/* sdfghjkl */}
      <header className="navbar">
        <h3 className="logo"><img src='' alt='Logo' className="logo-image"/>TUXIMO</h3>
        <nav className="navlist">
          <ul>
            <li><a href="">Flight</a></li>
            <li><a href="">Train</a></li>
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
