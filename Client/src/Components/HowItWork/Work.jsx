import React, { useState } from 'react';
import image from './workpage.jpeg';
import './Work.css';

const Work = () => {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (sectionNumber) => {
    setOpenSection(openSection === sectionNumber ? null : sectionNumber);
  };

  return (
    <div className="ticket-booking-container">
      <a href='#' className="logo2">+ How It Works</a> 
      <h5 className="ticket-booking-header">
        Effortless Ticket Booking Process: Simplifying Your Travel Arrangements
      </h5>
      <p className="ticket-booking-subheader">
        Simplify Your Travel: Effortless Ticket Booking Process Every Time.
      </p>

      <div className="ticket-booking-layout">
        <div className="flex-1">
          <img src={image} alt="Travel planning" className="ticket-booking-image" />
        </div>
        <div className="flex-1">
          {[
            { number: '01', title: 'Destination Research', description: 'Explore a vast array of options and find the perfect tickets for your journey hassle-free with our easy online booking.' },
            { number: '02', title: 'Flight Booking', description: 'Select and book your ideal flights with our user-friendly interface.' },
            { number: '03', title: 'Preparation & Enjoyment', description: 'Get ready for your trip and enjoy your travel experience.' }
          ].map((section) => (
            <div key={section.number} className="ticket-booking-section">
              <div
                className="ticket-booking-toggle"
                onClick={() => toggleSection(parseInt(section.number))}
              >
                <div>
                  <span className="ticket-booking-section-number">{section.number}</span>
                  <span className="ticket-booking-section-title">{section.title}</span>
                </div>
                <span className="ticket-booking-icon">
                  {openSection === parseInt(section.number) ? '-' : '+'}
                </span>
              </div>
              {openSection === parseInt(section.number) && (
                <div className="ticket-booking-content">
                  <p className="ticket-booking-description">{section.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;