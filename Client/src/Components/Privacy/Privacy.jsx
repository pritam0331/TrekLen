import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-center text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-4 mb-8">
        Privacy Policy
      </h1>
      
      <div className="grid grid-cols-2 gap-8">
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl text-blue-600 border-b border-gray-200 pb-2 mb-4">
            1. Information Collection
          </h2>
          <ul className="list-disc pl-8">
            <li className="mb-2">Personal details during booking</li>
            <li className="mb-2">Payment information</li>
            <li className="mb-2">Travel preferences and requirements</li>
          </ul>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl text-blue-600 border-b border-gray-200 pb-2 mb-4">
            2. Data Usage
          </h2>
          <ul className="list-disc pl-8">
            <li className="mb-2">Processing travel bookings</li>
            <li className="mb-2">Customer communication</li>
            <li className="mb-2">Service improvements</li>
          </ul>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl text-blue-600 border-b border-gray-200 pb-2 mb-4">
            3. Data Protection
          </h2>
          <ul className="list-disc pl-8">
            <li className="mb-2">Encryption of personal data</li>
            <li className="mb-2">Secure payment gateways</li>
            <li className="mb-2">Compliance with data protection laws</li>
          </ul>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl text-blue-600 border-b border-gray-200 pb-2 mb-4">
            4. User Rights
          </h2>
          <ul className="list-disc pl-8">
            <li className="mb-2">Right to access personal data</li>
            <li className="mb-2">Option to delete account</li>
            <li className="mb-2">Data correction request</li>
          </ul>
        </section>
      </div>
      
      <div className="bg-gray-100 p-4 text-center font-bold rounded-lg mt-8">
        <p>By using TrekLen Travel services, you agree to our privacy practices.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;