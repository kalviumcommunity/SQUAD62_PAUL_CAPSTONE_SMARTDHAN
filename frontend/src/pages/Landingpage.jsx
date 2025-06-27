// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to SMART DHAN</h1>
        <p>Your personal guide to financial literacy, saving, and smart investing.<br></br>
        Whether you're just getting started with savings or looking to invest wisely, SMART DHAN is your gateway to financial independence.
          Learn from expertly crafted capsules, track your progress, and connect with mentors — all in one place.</p>
        <button onClick={() => navigate('/signup')}>signup</button>
      </div>
      <footer>© 2025 SMART DHAN. All rights reserved.</footer>
    </div>
  );
};

export default LandingPage;