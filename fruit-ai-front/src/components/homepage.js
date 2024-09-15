// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css'; // Ensure CSS is imported

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="title">Fruit.Ai</h1>
      <p className="subtitle">"Be Healthy!"</p>
      <div className="service-links">
        <Link to="/chatbot" className="button chat">Chat.</Link>
        <Link to="/translator" className="button translator">Tlator</Link>
        <Link to="/faq" className="button faq">FAQs</Link>
        <Link to="/about" className="button about">About</Link>
      </div>
    </div>
  );
};

export default HomePage;
