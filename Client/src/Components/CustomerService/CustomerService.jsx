import React from 'react';
import './CustomerService.css';

function CustomerService() {

  return (
    <section className="section">
    <div className="container">
      <div className="contact-container">
        <div className="contact-left">
          <h1>We'd love to help</h1>
          <h2>Reach out and we will get in touch within 24 hours</h2>
          <p>Or reach us via: <a href="mailto:TrekLen@gmail.com">TrekLen@gmail.com</a></p>
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
            </div>
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <div className="action-group">
              <button type="submit" className="send-btn">Send message</button>
            </div>
          </form>
        </div>
        <div className="contact-right">
        </div>
      </div>
    </div>
    </section>
  );
}

export default CustomerService;
