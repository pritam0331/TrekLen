import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css'; // Import the updated CSS file

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        className="faq-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="question">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, optional travel insurance is available for unexpected events like trip cancellations, medical emergencies, or lost luggage."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, debit cards, and PayPal."
    },
    {
      question: "Can I reserve a seat on the flight?",
      answer: "Yes, you can choose your seat during the booking process or manage your booking later, subject to availability."
    },
    {
      question: "What if I need to change or cancel my flight?",
      answer: "You can change or cancel your flight through our website or customer service. Fees may apply depending on your fare type and how close to departure you make the change."
    },
    {
      question: "Are there any additional fees or taxes not included in the displayed price?",
      answer: "The displayed price includes all mandatory taxes and fees. Optional services like baggage fees or seat selection may incur additional charges."
    },
    {
      question: "How far in advance should I book my flight to get the best price?",
      answer: "Generally, booking 3-6 months in advance for international flights and 1-3 months for domestic flights often yields the best prices, but this can vary."
    },
    {
      question: "What documents do I need to bring for my flight?",
      answer: "For domestic flights, a government-issued photo ID is required. For international flights, you'll need a valid passport and possibly a visa, depending on your destination."
    },
    {
      question: "Can I reserve a seat on the flight?",
      answer: "Reserve a seat by booking with the airline; use a photo ID for domestic or passport for international flights."
    }
  ];

  return (
    <div className="container">
      <div className="faq-wrapper">
      <a href='#' className="logo2">+ FAQ's</a> 
        <h1 className="title">Frequently Asked Questions</h1>
        <p className="subtitle">Answers to commonly asked questions for clarity and convenience.</p>
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
