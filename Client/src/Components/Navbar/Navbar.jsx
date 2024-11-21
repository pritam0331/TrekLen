// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <div>
//       <header className="navbar">
//         <h3 className="logo">TrekLen</h3>
//         <nav className="navlist">
//           <ul>
//             <li><a href='/'>Home</a></li>
//             <li><a href="/flight">Flight</a></li>
//             <li><a href="/train">Train</a></li> 
//             <li><a href="/bus">Bus</a></li>
//             <li><a href="">Hotel</a></li>
//             <li><a href="">Customer Support</a></li>
//           </ul>
//         </nav>
//         <button id='btn'>Log In</button>
//       </header>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">TrekLen</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/flight">Flight</a></li>
        <li><a href="/train">Train</a></li>
        <li><a href="/bus">Bus</a></li>
        <li><a href="/CustomerService">Customer Services</a></li>
        <button className="download-btn"><a href="/signup">Log-In</a></button>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "bar1" : ""}`}></div>
        <div className={`bar ${isOpen ? "bar2" : ""}`}></div>
        <div className={`bar ${isOpen ? "bar3" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
