// import React, { useState } from 'react';
// import './Flight.css';
// import { Plane, Headphones, User, Search, ArrowLeftRight } from 'lucide-react';
// import img from './plane.png';
// import img1 from './plane2.jpeg';

// function Flight() {
//   const [tripType, setTripType] = useState('oneWay');
//   const [fareType, setFareType] = useState('regular');
//   const [travelClass, setTravelClass] = useState('economy');

//   return (
//     <section className="booking-section">
//       <div className="header-content">
//         <h1 className="main-heading">WHERE TO FLY?</h1>
//         <p className="subheading">Find Countless Flights Options & Deals To Various Destinations Around The World</p>
//       </div>

//       <div className="content-wrapper">
//         <div className="promo-card">
//           <div className="promo-image">
//             <img src={img1} alt="Promo Plane" />
//           </div>
//         </div>

//         <div className="airplane-image">
//           <img src={img} alt="Airplane" />
//         </div>
//       </div>

//       <h2 className="cta-text">Start Booking Your Flight Now</h2>

//       <div className="flight-booking-container">
//       <div className="nav-buttons">
//         <button className="nav-button active">
//           <Plane className="icon" />
//           Flights
//         </button>
//         <div className="spacer"></div>
//         <button className="support-button">
//           <Headphones className="icon" />
//           Customer Support
//         </button>
//       </div>

//       <div className="booking-form">
//         <div className="trip-type">
//           <label className={`radio-label ${tripType === 'oneWay' ? 'selected' : ''}`}>
//             <input type="radio" name="tripType" checked={tripType === 'oneWay'}  onChange={() => setTripType('oneWay')}/>
//             One Way
//           </label>
//           <label className={`radio-label ${tripType === 'roundTrip' ? 'selected' : ''}`}>
//             <input type="radio" name="tripType" checked={tripType === 'roundTrip'}  onChange={() => setTripType('roundTrip')}/>
//             Round Trip
//           </label>
//           <label className={`radio-label ${tripType === 'multiCity' ? 'selected' : ''}`}>
//             <input type="radio" name="tripType" checked={tripType === 'multiCity'}  onChange={() => setTripType('multiCity')}/>
//             Multi-City
//           </label>
//           <select className="trip-select" value={travelClass}
//             onChange={(e) => setTravelClass(e.target.value)}>
//           <option value="economy">Economy</option>
//             <option value="premiumEconomy">Premium Economy</option>
//             <option value="flightiness">flightiness Class</option>
//             <option value="first">First Class</option>
//           </select>
//         </div>

//         <div className="location-inputs">
//           <input type="text" placeholder="Origin" className="input-field" />
//           <div className="arrow-icon">
//             <ArrowLeftRight size={24} />
//           </div>
//           <input type="text" placeholder="Destination" className="input-field" />
//         </div>

//         <div className="date-traveler-inputs">
//           <input type="text" placeholder="Depart Date" className="input-field" />
//           <input type="text" placeholder="Return Date" className="input-field" />
//           <div className="traveler-input">
//             <User size={18} className="icon" />
//             <input type="number" defaultValue={1} min={1} className="input-field" />
//           </div>
//           <button className="search-button">
//             <Search size={18} className="icon" />
//             Search
//           </button>
//         </div>

//         <div className="bottom-options">
//           <label className={`radio-labels ${fareType === 'regular' ? 'selected' : ''}`}>
//             <input type="radio" name="fareType" checked={fareType === 'regular'} onChange={() => setFareType('regular')} />
//             Regular Fare
//           </label>
//           <label className={`radio-labels ${fareType === 'student' ? 'selected' : ''}`}>
//             <input type="radio" name="fareType" checked={fareType === 'student'} onChange={() => setFareType('student')}/>
//             Student Fare
//           </label>
//           <div className="spacer"></div>
//           <button className="link-button">My Booking</button>
//           <button className="link-button secondary">Flight Status</button>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// }

// export default Flight;
import React, { useState } from 'react';
import './Flight.css';
import { PlaneIcon, Headphones, User, Search, ArrowLeftRight, MapPin } from 'lucide-react';
// import img from './flight.jpeg';
// import img1 from '../Flight/plane2.jpeg';
import img2 from '../Bus/Rishikesh.jpg'
import img3 from '../Bus/Mathura.jpg'
import img4 from '../Bus/Ayodha.jpg'
import img5 from '../Bus/Ahemdabad.jpg'

function Flight() {
  const [tripType, setTripType] = useState('oneWay');
  const [fareType, setFareType] = useState('regular');
  const [travelClass, setTravelClass] = useState('economy');
  const trips = [
    {
      image: img2,
      title: 'Delhi to Rishikesh',
      flightType: 'Executive flight',
      company: 'CityHopper Express',
      price: '₹399',
    },
    {
      image: img3,
      title: 'Varanasi to Mathura',
      flightType: 'Sleeper flight',
      company: 'UrbanSwift Travel',
      price: '₹499',
    },
    {
      image: img4,
      title: 'Mathutra to Ayodhya',
      flightType: 'Double-Decker flight',
      company: 'MetroWave',
      price: '₹399',
    },
    {
      image: img5,
      title: 'Hydrabad to Ahemdabad',
      flightType: 'Economy flight',
      company: 'TravelEase Transport',
      price: '₹999',
    },
  ];

  const packages = [
    {
      image: img2,
      title: 'Delhi to Rishikesh',
      flightType: 'Executive flight',
      company: 'CityHopper Express',
      price: '₹399',
    },
    {
      image: img3,
      title: 'Varanasi to Mathura',
      flightType: 'Sleeper flight',
      company: 'UrbanSwift Travel',
      price: '₹499',
    },
    {
      image: img4,
      title: 'Mathutra to Ayodhya',
      flightType: 'Double-Decker flight',
      company: 'MetroWave',
      price: '₹399',
    },
    {
      image: img5,
      title: 'Hydrabad to Ahemdabad',
      flightType: 'Economy flight',
      company: 'TravelEase Transport',
      price: '₹999',
    },
    {
      image: img2,
      title: 'Delhi to Rishikesh',
      flightType: 'Executive flight',
      company: 'CityHopper Express',
      price: '₹399',
    },
    {
      image: img3,
      title: 'Varanasi to Mathura',
      flightType: 'Sleeper flight',
      company: 'UrbanSwift Travel',
      price: '₹499',
    },
    {
      image: img4,
      title: 'Mathutra to Ayodhya',
      flightType: 'Double-Decker flight',
      company: 'MetroWave',
      price: '₹399',
    },
    {
      image: img5,
      title: 'Hydrabad to Ahemdabad',
      flightType: 'Economy flight',
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

  return (
    <>
      <section className="flight-booking-section">
        <div className="flight-header-content">
          <h1 className="flight-main-heading">navigate sky with comforts</h1>
          <p className="flight-subheading">Find Countless Flights Options & Deals To Various Destinations Around The World</p>
        </div>

        {/* <div className="flight-content-wrapper">
        <div className="flight-promo-card">
          <div className="flight-promo-image">
            <img src={img1} alt="flight-Promo Plane"/>
          </div>
        </div>

        <div className="flight-image">
          <img src={img} alt="Airplane"/>
        </div>
      </div> */}

        <h2 className="flight-cta-text">Start Booking Your Flight Now</h2>

        <div className="flight-booking-container">
          <div className="flight-nav-buttons">
            <button className="flight-nav-button active">
              <PlaneIcon className="icon" />
              Flights
            </button>
            <div className="flight-spacer"></div>
            <button className="flight-support-button"><a className="contact" href="/CustomerService">
              <Headphones className="icon" />
              Customer Support</a>
            </button>
          </div>

          <div className="flight-booking-form">
            <div className="flight-trip-type">
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
              <select className="flight-trip-select" value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}>
                <option value="economy">Economy</option>
                <option value="premiumEconomy">Premium Economy</option>
                <option value="flightiness">flightiness Class</option>
                <option value="first">First Class</option>
              </select>
            </div>

            <div className="flight-location-and-date-inputs">
              <input type="text" placeholder="Origin" className="input-field" />
              <div className="flight-arrow-icon">
                <ArrowLeftRight size={24} />
              </div>
              <input type="text" placeholder="Destination" className="input-field" />
              <input type="text" placeholder="Depart Date" className="input-field" />
              {tripType === 'roundTrip' && (
                <input type="text" placeholder="Return Date" className="input-field" />
              )}
              <div className="flight-traveler-input">
                <User size={18} className="icon" />
                <input type="number" value={passengers} defaultValue={1} min={1} className="input-field" onChange={(e) => setPassengers(e.target.value > 6 ? 6 : e.target.value)} />
              </div>
            </div>


            <div className="flight-bottom-options">
              <label className={`radio-labels ${fareType === 'regular' ? 'selected' : ''}`}>
                <input type="radio" name="fareType" checked={fareType === 'regular'} onChange={() => setFareType('regular')} />
                Regular Fare
              </label>
              {/* <label className={`radio-labels ${fareType === 'student' ? 'selected' : ''}`}>
                <input type="radio" name="fareType" checked={fareType === 'student'} onChange={() => setFareType('student')} />
                Student Fare
              </label> */}
              <div className="flight-spacer"></div>
              <button className="flight-search-button">
                <Search size={18} className="icon" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flight-top-route">
        <div className="flight-top-content">
          <h1>Top flight Route This Month</h1>
          <p>Explore the trandlist travel destinations for unforgetabble Journeys</p>
        </div>
        <div className="travel-cards">
          {trips.map((trip, index) => (
            <div className="card" key={index}>
              <img src={trip.image} alt={trip.title} className="card-image" />
              <div className="card-content">
                <h3>{trip.title}</h3>
                <p><MapPin size={18} /> {trip.flightType}</p>
                <p><flightIcon size={18} /> {trip.company}</p>
                <p className="price">Start from {trip.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flight-top-packages">
        <div className="flight-top-content">
          <h1>Top travel packages this month</h1>
          <p>Explore most trending tour packages India</p>
        </div>
        <div className="travel-cards">
          {packages.map((trip, index) => (
            <div className="card" key={index}>
              <img src={trip.image} alt={trip.title} className="card-image" />
              <div className="card-content">
                <h3>{trip.title}</h3>
                <p>{trip.flightType}</p>
                <p>{trip.company}</p>
                <p className="price">Start from {trip.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="travel-section">
        <div className="flight-top-content">
          <h1>Ready for your next journey?</h1>
          <p>Discover most affordable flight and travel options to popular destinations below.</p>
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
              <p>flight & Travel Available</p>
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
