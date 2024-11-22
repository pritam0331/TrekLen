import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-center text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-4 mb-8">
        Terms & Conditions
      </h1>
      
      <div className="grid grid-cols-2 gap-8">
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl text-blue-600 border-b border-gray-200 pb-2 mb-4">
            1. Booking and Reservations
          </h2>
          <p className="mb-4">By booking a trip with TrekLen Travel, you agree to the following terms:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">All bookings are subject to availability and confirmation.</li>
            <li className="mb-2">Prices are subject to change until full payment is received.</li>
            <li className="mb-2">A valid government-issued ID is required for all travelers.</li>
          </ul>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl text-blue-600 border-b border-gray-200 pb-2 mb-4">
            2. Payment and Pricing
          </h2>
          <ul className="list-disc pl-8">
            <li className="mb-2">Full payment is due at the time of booking.</li>
            <li className="mb-2">We accept major credit cards and bank transfers.</li>
            <li className="mb-2">Cancellation and refund policies vary by trip type and destination.</li>
          </ul>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl text-blue-600 border-b border-gray-200 pb-2 mb-4">
            3. Travel Insurance
          </h2>
          <p className="mb-4">We strongly recommend purchasing comprehensive travel insurance. TrekLen Travel is not responsible for:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">Medical emergencies</li>
            <li className="mb-2">Trip cancellations</li>
            <li className="mb-2">Lost or damaged personal belongings</li>
          </ul>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl text-blue-600 border-b border-gray-200 pb-2 mb-4">
            4. Liability and Limitations
          </h2>
          <p className="mb-4">TrekLen Travel limits its liability to the total cost of the booked trip. We are not responsible for:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">Acts of nature</li>
            <li className="mb-2">Political unrest</li>
            <li className="mb-2">Changes in travel regulations</li>
          </ul>
        </section>
      </div>
      
      <div className="bg-gray-100 p-4 text-center font-bold rounded-lg mt-8">
        <p>By proceeding with a booking, you acknowledge that you have read, understood, and agree to these terms and conditions.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;