import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  
  const handleToggle = () => {
    setClicked(!clicked);
  };
  
  const closeMenu = () => {
    setClicked(false);
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setClicked(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div>
      <header className={clicked ? "navbar active" : "navbar"}>
        <h3 className="logo">
          <img src='' alt='Logo' className="logo-image" />TUXIMO
        </h3>
        <nav className={clicked ? 'navlist active' : 'navlist'}>
          <div className='menu-icon' onClick={handleToggle}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul onClick={closeMenu}>
            <li><a href="" onClick={closeMenu}>Flight</a></li>
            <li><a href="" onClick={closeMenu}>Train</a></li>
            <li><a href="" onClick={closeMenu}>Bus</a></li>
            <li><a href="" onClick={closeMenu}>Hotel</a></li>
            <li><a href="" onClick={closeMenu}>Customer Support</a></li>
          </ul>
        </nav>
        <button id='btn' onClick={closeMenu}>Log In</button>
      </header>
    </div>
  );
}

export default Navbar;
