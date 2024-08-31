import React, { useState } from 'react';
import './SearchForm.css';
import train1 from './train4.jpg';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    passengers: '1 adult, 1 infant',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="search-form-container">
      <img src={train1} alt="Train" className="background-image" />
      <div className="form-overlay">
        <h2 className="title">Find your train journey</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="from" className="label">From</label>
            <input
              type="text"
              id="from"
              name="from"
              placeholder="Origin station"
              value={formData.from}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="to" className="label">To</label>
            <input
              type="text"
              id="to"
              name="to"
              placeholder="Destination station"
              value={formData.to}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="departure" className="label">Departure</label>
            <input
              type="date"
              id="departure"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passengers" className="label">Passengers</label>
            <select
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="input"
            >
              <option>1 adult, 1 infant</option>
              <option>2 adults</option>
              <option>2 adults, 1 child</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="button">Search →</button>
          </div>
        </form>
        <div className="filter-options">
          <span className="filter-label">Filter:</span>
          <span className="filter-option">Luxury</span>
          <span className="filter-option">Executive</span>
          <span className="filter-option">Business</span>
          <span className="filter-option">Economy</span>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
