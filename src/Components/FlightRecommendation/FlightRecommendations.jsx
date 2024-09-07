import React from 'react';
import image1 from './MumbaiImg.jpeg';
import image2 from './DelhiImg.jpeg';
import image3 from './ChennaiImg.jpeg';
import image4 from './KolkataImg.jpeg';
import image5 from './HyderabadImg.jpeg';
import image6 from './JaipurImg.jpeg';

import './FlightRecommendations.css';

const FlightRecommendations = () => {
  const flights = [
    { from: 'Mumbai', to: 'Delhi', date: '04 Apr, 2024', price: 100.53, image: image1 },
    { from: 'Chennai', to: 'Bengaluru', date: '06 Apr, 2024', price: 80.94, image: image3 },
    { from: 'Kolkata', to: 'Goa', date: '07 Apr, 2024', price: 150.75, image: image4 },
    { from: 'Delhi', to: 'Mumbai', date: '08 Apr, 2024', price: 120.53, image: image2 },
    { from: 'Hyderabad', to: 'Ahmedabad', date: '09 Apr, 2024', price: 95.12, image: image5 },
    { from: 'Jaipur', to: 'Kochi', date: '10 Apr, 2024', price: 175.75, image: image6 },
  ];

  return (
    <div className="flight-recommendations">
      <a href='#' className="logo3">+ Recommendation</a> 
      <div className="header">
        <div className="title-section">
          <h2>Popular flights near your location available now.</h2>
        </div>
        <button className="see-more-btn">See More →</button>
      </div>
      <div className="flight-grid">
        {flights.map((flight, index) => (
          <div key={index} className="flight-card">
            <img src={flight.image} alt={`${flight.from} to ${flight.to}`} className="flight-image" />
            <div className="flight-info">
              <p className="flight-route">{flight.from} ✈ {flight.to}</p>
              <p className="flight-date">{flight.date}</p>
              <p className="flight-price">
                <span className="price-label">Start From</span>
                <span className="price-amount">₹{flight.price.toFixed(2)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightRecommendations;
