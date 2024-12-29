import React from 'react';
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/Home');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to CallBasket</h1>
        <p className="welcome-description">Discover the best foods at unbeatable prices.</p>
        <button className="welcome-button" onClick={handleStartShopping}>Order Food</button>
      </div>
    </div>
  );
};

export default Welcome;