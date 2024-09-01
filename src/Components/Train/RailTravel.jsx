import React from 'react';
import './RailTravel.css';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';
import goa from '../Train/chennai.jpg';
import agra from '../Train/agra.jpg';
import kerala from '../Train/kerala.jpg';
import jaipur from '../Train/jaipur.jpg';

// Button component
const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded focus:outline-none';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Data for destinations and trending routes
const destinations = [
  { city: 'Goa', image: goa },
  { city: 'Jaipur', image: jaipur },
  { city: 'Agra', image: agra },
  { city: 'Kerala', image: kerala },
];

const trendingRoutes = [
  'Delhi-Manali-Leh','Delhi-Assam', 'Delhi-Agra-Jaipur', 'Mumbai-Goa', 'Banglore-Coorg-Mysore',
  'Kolkata-Darjeeling-Sikkim', 'Chennai-Mahabalipuram-Pondicherry', 'Delhi-Amritsar-Dharamshala',
  'Hyderabad-Hampi-Badami', 'Kolkata-Jaisalmer-Jodhpur', 'Rishikesh-Haridwar', 'Manglore-Kasargod',
  'Chandigarh-Manali-Leh', 'Jaipur-Jaisalmer-Jodhpur', 'Kolkata-Bagdogra-Siliguri',
  'Delhi-Rishikesh-Dehradun', 'Mumbai-Kolkata', 'Bhubaneswar-Puri-Konark',
];

// Main RailTravel component
const RailTravel = () => {
  return (
    <div className="space-y-8">
      {/* Favorite destinations section */}
      <section className="favorite-destinations">
        <h2 className="text-2xl font-bold mb-4 text-black">Favorite Destinations in India</h2>
        <p className="text-gray-600 mb-4">Discover the most trending hotels worldwide for an unforgettable experience.</p>
        <div className="grid">
          {destinations.map((dest, index) => (
            <div key={index} className="destination-card">
              <img src={dest.image} alt={dest.city} />
              <div className="card-header text-black">
                <div className="card-title">
                  <span>{dest.city}</span>
                  <ArrowRight className="arrow-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending rail routes section */}
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
            Most trending rail routes in Europe
          </h2>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            Trending exceptional hospitality that captivated travelers this month.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {trendingRoutes.map((route, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  whiteSpace: 'nowrap'
                }}
              >
                {route}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Promotional offers section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-black">Get Promo for a Cheaper Price</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-6 flex items-center">
            <div>
              <h3 className="font-bold mb-2 text-black">Unlock Your Journey with Unbeatable Savings</h3>
              <p className="text-3xl font-bold mb-2 text-black">35%</p>
              <p className="text-sm text-gray-600">Valid only on 10 Jan - 16 Jan 2024</p>
            </div>
            <img src="/api/placeholder/100/100" alt="Promo" className="w-24 h-24 rounded-full ml-auto" />
          </div>
          <div className="bg-gray-100 p-6 flex items-center">
            <div>
              <h3 className="font-bold mb-2 text-black">Snag Your Seat with Our Exclusive Promotion</h3>
              <p className="text-3xl font-bold mb-2 text-black">50%</p>
              <p className="text-sm text-gray-600">Valid only on 12 Jan - 20 Jan 2024</p>
            </div>
            <img src="/api/placeholder/100/100" alt="Promo" className="w-24 h-24 rounded-full ml-auto" />
          </div>
        </div>
      </section>

      {/* Additional sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 text-white p-6">
          <h3 className="text-xl font-bold mb-2">Explore More to Get Your Comfort Zone</h3>
          <p className="mb-4">Book your perfect stay with us.</p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-800">
            Booking Now <ArrowRightCircle className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-bold mb-2 text-black">Beyond Accommodation, Creating Memories of a Lifetime</h3>
          </div>
          <div>
            <p className="text-sm mb-2">Routes Available</p>
            <p className="text-3xl font-bold text-black">1,895</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RailTravel;