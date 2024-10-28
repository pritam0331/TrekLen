import React from 'react';
import { Wind, Droplets, Home as HomeIcon } from 'lucide-react';
import homeimg from './Home imageTrek.jpg';
import tropical from './trop.jpeg';
import mountain from './mount.jpeg';
import city from './city.jpg';
import desert from './desert.jpg';
import Luxury from './lux.jpeg';
import adventure from './adv.jpeg';
import cultural from './cultural.jpeg';
import eco from './eco.jpeg';

import './home.css';

const Home = () => {
  const destination = [
    {
      title: "Tropical Paradise",
      image: tropical,
      description: "Experience the ultimate relaxation in our luxurious tropical resorts."
    },
    {
      title: "Mountain Retreat",
      image: mountain,
      description: "Escape to the serene beauty of our mountain lodges."
    },
    {
      title: "City Adventures",
      image: city,
      description: "Discover the excitement and culture of the world's greatest cities."
    },
    {
      title: 'Desert Oasis',
      image: desert,
      description: 'Unwind in the stunning beauty of the desert with breathtaking sunsets and unique landscapes.'
    }
  ];

  const stats = [
    { value: "10+", label: "Years Crafting Memories" },
    { value: "4000+", label: "Thrilled Adventurers" },
    { value: "80%", label: "Rated for Unparalleled Journeys" }
  ];

  const innovations = [
    {
      icon: <Wind className="icon" />,
      title: "Sun-Kissed Beaches",
      description: "Relax in the beauty of sun-drenched shores and crystal-clear waters.",
      color: "bg-teal"
    },
    {
      icon: <Droplets className="icon" />,
      title: "Urban Escapes",
      description: "Dive into the vibrant cultures and excitement of world-famous cities.",
      color: "bg-lime"
    },
    {
      icon: <HomeIcon className="icon" />,
      title: "Majestic Mountains",
      description: "Find peace and adventure in stunning mountain ranges.",
      color: "bg-orange"
    }
  ];

  const insights = [
    {
      image: Luxury,
      title: "Luxury Stays",
      description: "Experience the finest accommodations around the world."
    },
    {
      image: adventure,
      title: "Adventure Tours",
      description: "Thrilling adventures for the daring traveler."
    },
    {
      image: cultural,
      title: "Cultural Journeys",
      description: "Immerse yourself in diverse cultures and traditions."
    },
    {
      image: eco,
      title: "Eco-Friendly Trips",
      description: "Sustainable travel options for the environmentally conscious."
    }
  ];

  return (
    <div className="eco-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={homeimg} alt="Sustainable workplace" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Travel Beyond Limits, Experience Beyond Dreams</h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="destination-section">
        <h2 className="section-title">Our Destinations</h2>
        <div className="destination-cards">
          {destination.map((project, index) => (
            <div key={index} className="destination-card"> {/* Individual card for each destination */}
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-text">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button className="project-button">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Innovation Cards */}
      <section className="innovation-section">
        <h2 className="section-title">Our Featured Adventures</h2>
        <div className="innovation-cards">
          {innovations.map((item, index) => (
            <div key={index} className={`innovation-card ${item.color}`}>
              {item.icon}
              <h3 className="innovation-title">{item.title}</h3>
              <p className="innovation-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section className="insights-section">
        <h2 className="section-title">Discover and Explore Unique Travel Experiences</h2>
        <div className="insights-cards">
          {insights.map((insight, index) => (
            <div key={index} className="insight-item">
              <img src={insight.image} alt={insight.title} className="insight-image" />
              <h3 className="insight-title">{insight.title}</h3>
              <p className="insight-description">{insight.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
