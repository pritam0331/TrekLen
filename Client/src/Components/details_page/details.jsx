import React from "react";
import { useLocation } from "react-router-dom";
import "./details.css";

const Details = () => {
  const location = useLocation();
  const {
    tripType,
    travelClass,
    passengers,
    fareType,
    origin,
    destination,
    departDate,
    returnDate,
    trains, // Now this will be an array of train objects
  } = location.state || {};

  return (
    <>
      <h1 className="detail">Train Details</h1>

      <div className="train-table">
        <div className="header">
          <div className="cell">SL No.</div>
          <div className="cell">Train Name</div>
          <div className="cell">Source / Destination</div>
          <div className="cell">Sch. Arrival / Departure</div>
          <div className="cell">Exp. Arrival / Departure</div>
          <div className="cell">Train Type</div>
          <div className="cell">Train Time</div>
          <div className="cell"></div>
        </div>
        {trains &&
          trains.map((train, index) => (
            <div className="message" key={index}>
              <div className="cell">{index + 1}</div>
              <div className="cell">{train.name}</div>
              <div className="cell">{`${origin} / ${destination}`}</div>
              <div className="cell">{`${departDate}`}</div>
              <div className="cell">{`${departDate}`}</div>
              <div className="cell">{`${tripType}`}</div>
              <div className="cell">{train.time}</div>
              <button>Book</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Details;
