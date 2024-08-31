import React from 'react';
import './Popular.css';
import banaras from './banaras.jpg';
import chennai from './chennai.jpg';
import delhi from './delhi.jpg';
import goa from './goa.jpg';

const Popular = () => {
  const routes = [
    {
      id: 1,
      image: delhi,
      title: "Mumbai to Delhi",
      type: "Luxury",
      train: "Rajdhani Express",
      price: 120
    },
    {
      id: 2,
      image: banaras,
      title: "Delhi to Varanasi",
      type: "Economy",
      train: "Kashi Vishwanath Express",
      price: 50
    },
    {
      id: 3,
      image: chennai,
      title: "Kolkata to Chennai",
      type: "Executive",
      train: "Coromandel Express",
      price: 85
    },
    {
      id: 4,
      image: goa,
      title: "Mumbai to Goa",
      type: "Luxury",
      train: "Mandovi Express",
      price: 119
    }
  ];

  return (
    <div className="popular-routes-container">
      <h2 className="popular-routes-title">Popular rail routes this month</h2>
      <p className="popular-routes-description">Discover the most trending routes worldwide for an unforgettable experience.</p>
      <div className="country-filters">
        {['Delhi', 'Assam', 'Mumbai', 'Manali'].map((country) => (
          <button key={country} className="country-filter-button">
            {country}
          </button>
        ))}
      </div>
      <div className="routes-container">
        {routes.map((route) => (
          <div key={route.id} className="route-card">
            <img src={route.image} alt={route.title} className="route-image" />
            <div className="route-details">
              <h3 className="route-title">{route.title}</h3>
              <div className="route-info">
                <span className="route-type">{route.type}</span>
                <span>• {route.train}</span>
              </div>
              <div className="route-footer">
                <span className="route-price">Rs.{route.price}</span>
                <button className="book-button">
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
