import React, { useState } from 'react';
import './Flight.css';
import { Plane, Headphones, User, Search, ArrowLeftRight } from 'lucide-react';
import img from './plane.png';
import img1 from './plane2.jpeg';

function Flight() {
  const [tripType, setTripType] = useState('oneWay');
  const [fareType, setFareType] = useState('regular');
  const [travelClass, setTravelClass] = useState('economy');

  return (
    <section className="booking-section">
      <div className="header-content">
        <h1 className="main-heading">WHERE TO FLY?</h1>
        <p className="subheading">Find Countless Flights Options & Deals To Various Destinations Around The World</p>
      </div>

      <div className="content-wrapper">
        <div className="promo-card">
          <div className="promo-image">
            <img src={img1} alt="Promo Plane" />
          </div>
        </div>

        <div className="airplane-image">
          <img src={img} alt="Airplane" />
        </div>
      </div>

      <h2 className="cta-text">Start Booking Your Flight Now</h2>

      <div className="flight-booking-container">
      <div className="nav-buttons">
        <button className="nav-button active">
          <Plane className="icon" />
          Flights
        </button>
        <div className="spacer"></div>
        <button className="support-button">
          <Headphones className="icon" />
          Customer Support
        </button>
      </div>

      <div className="booking-form">
        <div className="trip-type">
          <label className={`radio-label ${tripType === 'oneWay' ? 'selected' : ''}`}>
            <input type="radio" name="tripType" checked={tripType === 'oneWay'}  onChange={() => setTripType('oneWay')}/>
            One Way
          </label>
          <label className={`radio-label ${tripType === 'roundTrip' ? 'selected' : ''}`}>
            <input type="radio" name="tripType" checked={tripType === 'roundTrip'}  onChange={() => setTripType('roundTrip')}/>
            Round Trip
          </label>
          <label className={`radio-label ${tripType === 'multiCity' ? 'selected' : ''}`}>
            <input type="radio" name="tripType" checked={tripType === 'multiCity'}  onChange={() => setTripType('multiCity')}/>
            Multi-City
          </label>
          <select className="trip-select" value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}>
          <option value="economy">Economy</option>
            <option value="premiumEconomy">Premium Economy</option>
            <option value="business">Business Class</option>
            <option value="first">First Class</option>
          </select>
        </div>

        <div className="location-inputs">
          <input type="text" placeholder="Origin" className="input-field" />
          <div className="arrow-icon">
            <ArrowLeftRight size={24} />
          </div>
          <input type="text" placeholder="Destination" className="input-field" />
        </div>

        <div className="date-traveler-inputs">
          <input type="text" placeholder="Depart Date" className="input-field" />
          <input type="text" placeholder="Return Date" className="input-field" />
          <div className="traveler-input">
            <User size={18} className="icon" />
            <input type="number" defaultValue={1} min={1} className="input-field" />
          </div>
          <button className="search-button">
            <Search size={18} className="icon" />
            Search
          </button>
        </div>

        <div className="bottom-options">
          <label className={`radio-labels ${fareType === 'regular' ? 'selected' : ''}`}>
            <input type="radio" name="fareType" checked={fareType === 'regular'} onChange={() => setFareType('regular')} />
            Regular Fare
          </label>
          <label className={`radio-labels ${fareType === 'student' ? 'selected' : ''}`}>
            <input type="radio" name="fareType" checked={fareType === 'student'} onChange={() => setFareType('student')}/>
            Student Fare
          </label>
          <div className="spacer"></div>
          <button className="link-button">My Booking</button>
          <button className="link-button secondary">Flight Status</button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Flight;
