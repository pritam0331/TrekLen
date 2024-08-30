import React, { useState } from 'react';
import './SearchForm.css'; 

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
    <div className="container">
      <h2 className="title">Find your train journey</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
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
        <div className="formGroup">
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
        <div className="formGroup">
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
        <div className="formGroup">
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
        <div className="formGroup">
          <label className="label">&nbsp;</label>
          <button type="submit" className="button">Search →</button>
        </div>
      </form>
      <div className="filterOptions">
      <p className="filterLabel">Filter:</p>
        <span className="filterOption">Luxury</span>
        <span className="filterOption">Executive</span>
        <span className="filterOption">Business</span>
        <span className="filterOption">Economy</span>
      </div>
    </div>
  );
};

export default SearchForm;
