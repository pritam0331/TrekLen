import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bus.css';
import { BusIcon, Headphones, User, Search, ArrowLeftRight, MapPin } from 'lucide-react';
import img from './bus.jpeg';
import img1 from '../Flight/plane2.jpeg';
import img2 from './Rishikesh.jpg'
import img3 from './Mathura.jpg'
import img4 from './Ayodha.jpg'
import img5 from './Ahemdabad.jpg'

function Flight() {
  const [tripType, setTripType] = useState('oneWay');
  const [fareType, setFareType] = useState('regular');
  const [travelClass, setTravelClass] = useState('economy');
  const trips = [
    {
      image: img2,
      title: 'Delhi to Rishikesh',
      busType: 'Executive Bus',
      company: 'CityHopper Express',
      price: '₹399',
    },
    {
      image: img3,
      title: 'Varanasi to Mathura',
      busType: 'Sleeper Bus',
      company: 'UrbanSwift Travel',
      price: '₹499',
    },
    {
      image: img4,
      title: 'Mathutra to Ayodhya',
      busType: 'Double-Decker Bus',
      company: 'MetroWave',
      price: '₹399',
    },
    {
      image: img5,
      title: 'Hydrabad to Ahemdabad',
      busType: 'Economy Bus',
      company: 'TravelEase Transport',
      price: '₹999',
    },
  ];

  const packages = [
    {
      image: img2,
      title: 'Delhi to Rishikesh',
      busType: 'Executive Bus',
      company: 'CityHopper Express',
      price: '₹399',
    },
    {
      image: img3,
      title: 'Varanasi to Mathura',
      busType: 'Sleeper Bus',
      company: 'UrbanSwift Travel',
      price: '₹499',
    },
    {
      image: img4,
      title: 'Mathutra to Ayodhya',
      busType: 'Double-Decker Bus',
      company: 'MetroWave',
      price: '₹399',
    },
    {
      image: img5,
      title: 'Hydrabad to Ahemdabad',
      busType: 'Economy Bus',
      company: 'TravelEase Transport',
      price: '₹999',
    },
    {
      image: img2,
      title: 'Delhi to Rishikesh',
      busType: 'Executive Bus',
      company: 'CityHopper Express',
      price: '₹399',
    },
    {
      image: img3,
      title: 'Varanasi to Mathura',
      busType: 'Sleeper Bus',
      company: 'UrbanSwift Travel',
      price: '₹499',
    },
    {
      image: img4,
      title: 'Mathutra to Ayodhya',
      busType: 'Double-Decker Bus',
      company: 'MetroWave',
      price: '₹399',
    },
    {
      image: img5,
      title: 'Hydrabad to Ahemdabad',
      busType: 'Economy Bus',
      company: 'TravelEase Transport',
      price: '₹999',
    },
  ];

  const destinations = [
    'Jakarta', 'Bali', 'Bandung', 'Yogyakarta', 'Surabaya', 'Medan',
    'Semarang', 'Makassar', 'Palembang', 'Manado', 'Malang', 'Bogor',
    'Batam', 'Pontianak', 'Balikpapan', 'Samarinda', 'Padang',
    'Bandar Lampung', 'Banjarmasin', 'Ambon'
  ];

  const [passengers, setPassengers] = useState(1);

  const buses = [
    { name: "Volvo AC", time: "08:30 AM" },
    { name: "Neeta Bus", time: "10:00 AM" },
    { name: "KSRTC", time: "05:15 PM" },
  ];
  
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
  
    // Pass the selected bus(es) as an array (even if it's just one bus)
    const selectedBuses = [buses[0]]; // Wrap the selected bus in an array
  
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
        buses,
      },
    });
  };

  return (
    <>
      <section className="bus-booking-section">
        <div className="bus-header-content">
          <h1 className="bus-main-heading">navigate roads with comforts</h1>
          <p className="bus-subheading">Find Countless Flights Options & Deals To Various Destinations Around The World</p>
        </div>

        {/* <div className="bus-content-wrapper">
        <div className="bus-promo-card">
          <div className="bus-promo-image">
            <img src={img1} alt="bus-Promo Plane"/>
          </div>
        </div>

        <div className="bus-image">
          <img src={img} alt="Airplane"/>
        </div>
      </div> */}

        <h2 className="bus-cta-text">Start Booking Your Buses Now</h2>

        <div className="bus-booking-container">
          <div className="bus-nav-buttons">
            <button className="bus-nav-button active">
              <BusIcon className="icon" />
              Buses
            </button>
            <div className="bus-spacer"></div>
            <button className="bus-support-button"><a className="contact" href="/CustomerService">
              <Headphones className="icon" />
              Customer Support</a>
            </button>
          </div>

          <div className="bus-booking-form">
            <div className="bus-trip-type">
              <label className={`radio-label ${tripType === 'oneWay' ? 'selected' : ''}`}>
                <input type="radio" name="tripType" checked={tripType === 'oneWay'} onChange={() => setTripType('oneWay')} />
                One Way
              </label>
              <label className={`radio-label ${tripType === 'roundTrip' ? 'selected' : ''}`}>
                <input type="radio" name="tripType" checked={tripType === 'roundTrip'} onChange={() => setTripType('roundTrip')} />
                Round Trip
              </label>
              {/* <label className={`radio-label ${tripType === 'multiCity' ? 'selected' : ''}`}>
                <input type="radio" name="tripType" checked={tripType === 'multiCity'} onChange={() => setTripType('multiCity')} />
                Multi-City
              </label> */}
              <select className="bus-trip-select" value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}>
                <option value="Non-AC">NON-AC</option>
                <option value="AC">AC</option>
                <option value="double-dacker">Double-Dacker</option>
              </select>
            </div>

            <div className="bus-location-and-date-inputs">
              <input type="text" placeholder="Origin" className="input-field" />
              <div className="bus-arrow-icon">
                <ArrowLeftRight size={24} />
              </div>
              <input type="text" placeholder="Destination" className="input-field" />
              <input type="text" placeholder="Depart Date" className="input-field" />
              {tripType === 'roundTrip' && (
                <input type="text" placeholder="Return Date" className="input-field" />
              )}
              <div className="bus-traveler-input">
                <User size={18} className="icon" />
                <input type="number" value={passengers} defaultValue={1} min={1} className="input-field" onChange={(e) => setPassengers(e.target.value > 6 ? 6 : e.target.value)} />
              </div>
            </div>


            <div className="bus-bottom-options">
              <label className={`radio-labels ${fareType === 'regular' ? 'selected' : ''}`}>
                <input type="radio" name="fareType" checked={fareType === 'regular'} onChange={() => setFareType('regular')} />
                Regular Fare
              </label>
              {/* <label className={`radio-labels ${fareType === 'student' ? 'selected' : ''}`}>
                <input type="radio" name="fareType" checked={fareType === 'student'} onChange={() => setFareType('student')} />
                Student Fare
              </label> */}
              <div className="bus-spacer"></div>
              <button className="bus-search-button" onClick={handleSearch}>
                <Search size={18} className="icon" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bus-top-route">
        <div className="bus-top-content">
          <h1>Top Bus Route This Month</h1>
          <p>Explore the trandlist travel destinations for unforgetabble Journeys</p>
        </div>
        <div className="travel-cards">
          {trips.map((trip, index) => (
            <div className="card" key={index}>
              <img src={trip.image} alt={trip.title} className="card-image" />
              <div className="card-content">
                <h3>{trip.title}</h3>
                <p><MapPin size={18} /> {trip.busType}</p>
                <p><BusIcon size={18} /> {trip.company}</p>
                <p className="price">Start from {trip.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bus-top-packages">
        <div className="bus-top-content">
          <h1>Top travel packages this month</h1>
          <p>Explore most trending tour packages India</p>
        </div>
        <div className="travel-cards">
          {packages.map((trip, index) => (
            <div className="card" key={index}>
              <img src={trip.image} alt={trip.title} className="card-image" />
              <div className="card-content">
                <h3>{trip.title}</h3>
                <p>{trip.busType}</p>
                <p>{trip.company}</p>
                <p className="price">Start from {trip.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="travel-section">
        <div className="bus-top-content">
          <h1>Ready for your next journey?</h1>
          <p>Discover most affordable bus and travel options to popular destinations below.</p>
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
          <h2>Exclusive flight deals just for you!</h2>
          <button className="see-all-button">See All</button>
        </div>

        <div className="deals-container">
          <div className="deal-card">
            <img src={img5} alt="Deal 1" className="deal-image" />
            <div className="deal-overlay">
              <div className="deal-validity">Valid only on 2 Jan - 24 Jan 2024</div>
              <h3>Exclusive Travel Offers Just For You!</h3>
              <p className="deal-percentage">30%</p>
              <p className="terms">*with Terms and Condition</p>
            </div>
          </div>

          <div className="deal-card">
            <img src={img4} alt="Deal 2" className="deal-image" />
            <div className="deal-overlay">
              <div className="deal-validity">Valid only on 10 Jan - 10 Feb 2024</div>
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
              <h3>Explore more to get your comfort zone</h3>
              <p>Book your perfect stay with us.</p>
              <button className="booking-button">Booking Now →</button>
            </div>
          </div>
          <div className="explore-card-small">
            <div className="overlay">
              <p>Bus & Travel Available</p>
              <h3>14,230</h3>
            </div>
          </div>
        </div>

        <div className="explore-right">
          <div className="overlay">
            <h2>Beyond accommodation, creating memories of a lifetime</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flight;
