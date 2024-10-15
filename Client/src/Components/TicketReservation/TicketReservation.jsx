import React from 'react';
import './TicketReservation.css';

const TicketReservation = () => {
  return (
    <div className="seamless-reservation">
      <a href='#' className="logo2">+ Best Featured</a> 
      <h1>Seamless Ticket Reservation: Top Booking Platform Feature</h1>
      <p className="subtitle">Enjoy hassle-free ticket booking with our seamless and user-friendly platform feature.</p>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-questions">
            <span>Refund policy and fees?</span>
            <span>Infant booking process?</span>
          </div>
          <div className="feature-highlight">Seat upgrade availability ?</div>
          <div className="feature-questions">
            <span>Cancellation process?</span>
            <span>Meal preferences?</span>
          </div>
          <h3>CS Standby 24 Hours</h3>
          <p>Customer support available round-the-clock for your convenience.</p>
        </div>
        
        <div className="feature-card">
          <div className="payment-methods">
            <div className="payment-method paypal">
              <span className="payment-icon">P</span>
              <span>Paypal</span>
              <span className="payment-email">flyease@gmail.com</span>
            </div>
            <div className="payment-method stripe">
              <span className="payment-icon">S</span>
              <span>Stripe</span>
              <span className="payment-number">**** **** **** 3232</span>
            </div>
          </div>
          <h3>Multi Payment Methods</h3>
          <p>Diverse payment options for seamless booking experience.</p>
        </div>
        
        <div className="feature-card">
          <div className="gps-icon">›</div>
          <h3>Automatic GPS Messages</h3>
          <p>Automated GPS notifications for hassle-free travel updates.</p>
        </div>
        
        <div className="feature-card wide">
          <h3>Facilitates Travel To A Total Of 43 Countries Worldwide</h3>
          <p>Enabling seamless travel across 43 countries with global accessibility.</p>
          <div className="country-flags">
            <span className="flag">🇷🇺</span>
            <span className="flag">🇪🇺</span>
            <span className="flag">🇺🇦</span>
            <span className="flag">🇸🇪</span>
            <span className="flag">🇬🇧</span>
          </div>
        </div>
        
        <div className="feature-card wide">
          <h3>The Plane Is In The Best Condition Every Day</h3>
          <p>Ensuring top-notch aircraft maintenance for a safe travel experience daily.</p>
          <img src="/api/placeholder/400/200" alt="Airplane in flight" className="plane-image" />
        </div>
      </div>
    </div>
  );
};

export default TicketReservation;