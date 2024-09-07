import React from 'react';
import { Instagram, Twitter, Facebook, Twitch, Music } from 'lucide-react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="logo">Horizone</h2>
            <p className="mission">
              Our mission is to equip modern explorers with cutting-edge, functional, and stylish
              bags that elevate every adventure.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Return</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="updates-social">
            <div className="get-updates">
              <h3>Get Updates</h3>
              <div className="email-form">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="social-icons">
              <Instagram />
              <Twitter />
              <Facebook />
              <Twitch />
              <Music />
            </div>
          </div>
        </div>
        
        <div className="footer-legal">
          <p>&copy;2024 Horizone. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <span> | </span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;