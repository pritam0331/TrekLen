import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer className="footer">
  <div className="waves">
    <div className="wave" id="wave1" />
    <div className="wave" id="wave2" />
    <div className="wave" id="wave3" />
    <div className="wave" id="wave4" />
  </div>
  <ul className="social-icon">
    <li className="social-icon__item">
      <a className="social-icon__link" href="#">
        <ion-icon name="logo-facebook" />
      </a>
    </li>
    <li className="social-icon__item">
      <a className="social-icon__link" href="#">
        <ion-icon name="logo-twitter" />
      </a>
    </li>
    <li className="social-icon__item">
      <a className="social-icon__link" href="#">
        <ion-icon name="logo-linkedin" />
      </a>
    </li>
    <li className="social-icon__item">
      <a className="social-icon__link" href="#">
        <ion-icon name="logo-instagram" />
      </a>
    </li>
  </ul>
  <ul className="menu">
    <li className="menu__item">
      <a className="menu__link" href="#">
        Home
      </a>
    </li>
    <li className="menu__item">
      <a className="menu__link" href="#">
        About
      </a>
    </li>
    <li className="menu__item">
      <a className="menu__link" href="#">
        Services
      </a>
    </li>
    <li className="menu__item">
      <a className="menu__link" href="#">
        Team
      </a>
    </li>
    <li className="menu__item">
      <a className="menu__link" href="#">
        Contact
      </a>
    </li>
  </ul>
  <p>©2021 Nadine Coelho | All Rights Reserved</p>
</footer>

    </div>
  )
}

export default Footer