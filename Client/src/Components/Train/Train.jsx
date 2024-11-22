import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Train.css";
import {
  TrainIcon,
  Headphones,
  User,
  Search,
  ArrowLeftRight,
  MapPin,
} from "lucide-react";
import agra from "../Train/agra.jpg";
import delhi from "../Train/delhi.jpg";
import banaras from "../Train/banaras.jpg";
import chennai from "../Train/chennai.jpg";
import goa from "../Train/goa.jpg";
import jaipur from "../Train/jaipur.jpg";
import kerala from "../Train/kerala.jpg";
import deal1 from "../Train/deal1.jpg";
import deal2 from "../Train/deal2.jpg";
import j1 from "../Train/j1.jpg";
import j2 from "../Train/j2.jpg";
import j3 from "../Train/j3.jpg";

function Train() {
  const [tripType, setTripType] = useState("oneWay");
  const [fareType, setFareType] = useState("regular");
  const [travelClass, setTravelClass] = useState("economy");
  const trips = [
    {
      image: delhi,
      title: "Mumbai to Delhi",
      trainType: "Executive train",
      company: "CityHopper Express",
      price: "₹399",
    },
    {
      image: banaras,
      title: "Delhi to Vanarasi",
      trainType: "Sleeper train",
      company: "UrbanSwift Travel",
      price: "₹499",
    },
    {
      image: goa,
      title: "Kolkata to Chennai",
      trainType: "Double-Decker train",
      company: "MetroWave",
      price: "₹399",
    },
    {
      image: chennai,
      title: "Hyderabad to Goa",
      trainType: "Economy train",
      company: "TravelEase Transport",
      price: "₹999",
    },
  ];

  const packages = [
    {
      image: goa,
      title: "Goa",
      trainType: "Double-Decker train",
      company: "MetroWave",
      price: "₹999",
    },
    {
      image: agra,
      title: "Agra",
      trainType: "Double-Decker train",
      company: "MetroWave",
      price: "₹999",
    },
    {
      image: kerala,
      title: "Kerala",
      trainType: "Double-Decker train",
      company: "MetroWave",
      price: "₹999",
    },
    {
      image: jaipur,
      title: "Jaipur",
      trainType: "Double-Decker train",
      company: "MetroWave",
      price: "₹999",
    },
  ];

  const destinations = [
    "Jakarta",
    "Bali",
    "Bandung",
    "Yogyakarta",
    "Surabaya",
    "Medan",
    "Semarang",
    "Makassar",
    "Palembang",
    "Manado",
    "Malang",
    "Bogor",
    "Batam",
    "Pontianak",
    "Balikpapan",
    "Samarinda",
    "Padang",
    "Bandar Lampung",
    "Banjarmasin",
    "Ambon",
  ];
  const trains = [
    { name: "Shatabdi Express", time: "08:30 AM" },
    { name: "Vande Bharat Express", time: "10:00 AM" },
    { name: "Rajdhani Express", time: "05:15 PM" },
  ];

  const [passengers, setPassengers] = useState(1);
  const navigate = useNavigate();

  const handleSearch = () => {
    const origin = document.querySelector('[placeholder="Origin"]').value;
    const destination = document.querySelector(
      '[placeholder="Destination"]'
    ).value;
    const departDate = document.querySelector(
      '[placeholder="Depart Date"]'
    ).value;
    const returnDate =
      tripType === "roundTrip"
        ? document.querySelector('[placeholder="Return Date"]').value
        : null;

    // Pass the selected train(s) as an array (even if it's just one train)
    const selectedTrains = [trains[1]]; // Wrap the selected train in an array

    navigate("/details", {
      state: {
        tripType,
        travelClass,
        passengers,
        fareType,
        origin,
        destination,
        departDate,
        returnDate,
        trains,
      },
    });
  };

  return (
    <>
      <section className="train-booking-section">
        <div className="train-header-content">
          <h1 className="train-main-heading">
            Ride the Rails, Embrace the Journey
          </h1>
          <p className="train-subheading">
            Find Countless Train Options & Deals To Various Destinations Around
            The World
          </p>
        </div>

        {/* <div className="train-content-wrapper">
        <div className="train-promo-card">
          <div className="train-promo-image">
            <img src={""} alt="train-Promo Plane"/>
          </div>
        </div>

        <div className="train-image">
          <img src={img} alt="Airplane"/>
        </div>
      </div> */}

        <h2 className="train-cta-text">Start Booking Your Train Now</h2>

        <div className="train-booking-container">
          <div className="train-nav-buttons">
            <button className="train-nav-button active">
              <TrainIcon className="icon" />
              Trains
            </button>
            <div className="train-spacer"></div>
            <button className="train-support-button"><a className="contact" href="/CustomerService">
              <Headphones className="icon" />
              Customer Support</a>
            </button>
          </div>

          <div className="train-booking-form">
            <div className="train-trip-type">
              <label
                className={`radio-label ${
                  tripType === "oneWay" ? "selected" : ""
                }`}>
                <input
                  type="radio"
                  name="tripType"
                  checked={tripType === "oneWay"}
                  onChange={() => setTripType("oneWay")}
                />
                One Way
              </label>

              {/* <label
                className={`radio-label ${
                  tripType === "roundTrip" ? "selected" : ""
                }`}>
                <input
                  type="radio"
                  name="tripType"
                  checked={tripType === "roundTrip"}
                  onChange={() => setTripType("roundTrip")}
                />
              <label className={`radio-label ${tripType === 'roundTrip' ? 'selected' : ''}`}>
                <input type="radio" name="tripType" checked={tripType === 'roundTrip'} onChange={() => setTripType('roundTrip')} />

                Round Trip
              </label>
              <label
                className={`radio-label ${
                  tripType === "multiCity" ? "selected" : ""
                }`}>
                <input
                  type="radio"
                  name="tripType"
                  checked={tripType === "multiCity"}
                  onChange={() => setTripType("multiCity")}
                />
                Multi-City
              </label>
              <select
                className="train-trip-select"
                value={travelClass}
======= */}
              {/* </label> */}
              <select className="train-trip-select" value={travelClass}

                onChange={(e) => setTravelClass(e.target.value)}>
                <option value="SL">SL</option>
                <option value="2S">2S</option>
                <option value="3E">3E</option>
                <option value="3AC">3AC</option>
                <option value="" className="2AC">2AC</option>
                <option value="" className="1AC">1AC</option>
              </select>
            </div>

            <div className="train-location-and-date-inputs">
              <input type="text" placeholder="Origin" className="input-field" />
              <div className="train-arrow-icon">
                <ArrowLeftRight size={24} />
              </div>

              <input
                type="text"
                placeholder="Destination"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Depart Date"
                className="input-field"
              />
              {/* {tripType === "roundTrip" && (
                <input
                  type="text"
                  placeholder="Return Date"
                  className="input-field"
                />
              )} */}

              {/* <input type="text" placeholder="Destination" className="input-field" />
              <input type="text" placeholder="Depart Date" className="input-field" /> */}
              {/* {tripType === 'roundTrip' && (
                <input type="text" placeholder="Return Date" className="input-field" />
              )} */}
              <div className="train-traveler-input">
                <User size={18} className="icon" />
                <input
                  type="number"
                  value={passengers}
                  defaultValue={1}
                  min={1}
                  className="input-field"
                  onChange={(e) =>
                    setPassengers(e.target.value > 6 ? 6 : e.target.value)
                  }
                />
              </div>
            </div>

            <div className="train-bottom-options">
              <label
                className={`radio-labels ${
                  fareType === "regular" ? "selected" : ""
                }`}>
                <input
                  type="radio"
                  name="fareType"
                  checked={fareType === "regular"}
                  onChange={() => setFareType("regular")}
                />
                Regular Fare
              </label>
              {/* <label
                className={`radio-labels ${
                  fareType === "student" ? "selected" : ""
                }`}>
                <input
                  type="radio"
                  name="fareType"
                  checked={fareType === "student"}
                  onChange={() => setFareType("student")}
                />
                </label> */}
              {/* <label className={`radio-labels ${fareType === 'student' ? 'selected' : ''}`}>
                <input type="radio" name="fareType" checked={fareType === 'student'} onChange={() => setFareType('student')} />
                Student Fare
              </label> */}
              <div className="train-spacer"></div>
              <button className="train-search-button" onClick={handleSearch}>
                <Search size={18} className="icon" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="train-top-route">
        <div className="train-top-content">
          <h1>Top train Route This Month</h1>
          <p>
            Explore the trandlist travel destinations for unforgetabble Journeys
          </p>
        </div>
        <div className="travel-cards">
          {trips.map((trip, index) => (
            <div className="card" key={index}>
              <img src={trip.image} alt={trip.title} className="card-image" />
              <div className="card-content">
                <h3>{trip.title}</h3>
                <p>
                  <MapPin size={18} /> {trip.trainType}
                </p>
                <p>
                  <trainIcon size={18} /> {trip.company}
                </p>
                <p className="price">Start from {trip.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="train-top-packages">
        <div className="train-top-content">
          <h1>Top travel packages this month</h1>
          <p>Explore most trending tour packages India</p>
        </div>
        <div className="travel-cards">
          {packages.map((trip, index) => (
            <div className="card" key={index}>
              <img src={trip.image} alt={trip.title} className="card-image" />
              <div className="card-content">
                <h3>{trip.title}</h3>
                <p>{trip.trainType}</p>
                <p>{trip.company}</p>
                <p className="price">Start from {trip.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="travel-section">
        <div className="train-top-content">
          <h1>Ready for your next journey?</h1>
          <p>
            Discover most affordable train and travel options to popular
            destinations below.
          </p>
        </div>
        <div className="travel-buttons">
          {destinations.map((destination, index) => (
            <button key={index} className="travel-button">
              Travel to {destination}
            </button>
          ))}
        </div>
      </section>

      <div className="flight-deals-section">
        <div className="section-header">
          <h2>Exclusive Journey deals just for you!</h2>
          <button className="see-all-button">See All</button>
        </div>

        <div className="deals-container">
          <div className="deal-card">
            <img src={deal1} alt="Deal 1" className="deal-image" />
            <div className="deal-overlay">
              <div className="deal-validity">
                Valid only on 2 Oct - 24 Oct 2024
              </div>
              <h3>Exclusive Travel Offers Just For You!</h3>
              <p className="deal-percentage">30%</p>
              <p className="terms">*with Terms and Condition</p>
            </div>
          </div>

          <div className="deal-card">
            <img src={deal2} alt="Deal 2" className="deal-image" />
            <div className="deal-overlay">
              <div className="deal-validity">
                Valid only on 10 Nov - 10 Dec 2024
              </div>
              <h3>Enjoy Cashback on Your Journey</h3>
              <p className="deal-percentage">Up to 500k</p>
              <p className="terms">*with Terms and Condition</p>
            </div>
          </div>
        </div>

        <div className="brand-logos">
          <img src="logo1.png" alt="Brand 1" />
          <img src="logo2.png" alt="Brand 2" />
          <img src="logo3.png" alt="Brand 3" />
          <img src="logo4.png" alt="Brand 4" />
          <img src="logo5.png" alt="Brand 5" />
          <img src="logo6.png" alt="Brand 6" />
          <img src="logo7.png" alt="Brand 7" />
        </div>
      </div>

      <div className="explore-section">
        <div className="explore-left">
          <div className="explore-card">
            <div className="overlay">
              <img src={j1} alt="explore 1" className="explore-image" />
              <h3>Explore more to get your comfort zone</h3>
              <p>Book your perfect stay with us.</p>
              <button className="booking-button">Booking Now →</button>
            </div>
          </div>
          <div className="explore-card-small">
            <div className="overlay">
              <img src={j2} alt="explore 1" className="explore-image" />
              <p>train & Travel Available</p>
              <h3>14,230</h3>
            </div>
          </div>
        </div>

        <div className="explore-right">
          <div className="overlay">
            <img src={j3} alt="explore 1" className="explore-image" />
            <h2>Beyond accommodation, creating memories of a lifetime</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Train;
