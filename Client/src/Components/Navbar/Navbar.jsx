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
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  // State for menu toggle
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const auth = localStorage.getItem('user')

  // State for user profile
  // const [user, setUser] = useState({
  //   isLoggedIn: false,
  //   username: "John Doe",
  //   email: "john.doe@example.com",
  //   icon: "https://via.placeholder.com/30", 
  // });

  const handleRemove = () => {
    localStorage.clear()
    navigate('/')
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setUser({ isLoggedIn: false }); // Clear user state on logout
  };

  return (
    <nav className="navbar">
      <div className="brand">TrekLen</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/flight">Flight</a></li>
        <li><a href="/train">Train</a></li>
        <li><a href="/bus">Bus</a></li>
        {/*   <li><a href="/CustomerService">Customer Services</a></li> */}

        {auth ? (
          // User profile dropdown
           <>
            <li><a href="/customerService" onClick={toggleMenu}>Customer Services</a></li>
            <li><button className="download-btn1" onClick={() => { handleRemove(); toggleMenu(); }}>Log Out</button></li>
          </>
        ) : (
          // Sign Up button for non-logged-in users
          <button className="download-btn"><a href="/signup">Sign Up</a></button>
        )}
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
