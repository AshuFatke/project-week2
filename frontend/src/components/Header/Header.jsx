import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();

  const dirMenu = () => {
    setIsMenuVisible(true);
    setTimeout(() => {
      navigate('/Menu');
    }, 500); // Delay navigation to allow animation to complete
  };

  return (
    <div className={`  header-container ${isMenuVisible ? 'slide-up' : ''}`}>
      <div className="header bg-cover bg-center flex items-center justify-center text-center text-white ">
        <div className="header-contents p-8 bg-black bg-opacity-75 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Order Your Favorite Food Here</h2>
          <p className="text-lg mb-6">Discover the best food from our wide selection of menu items.</p>
          <button  onClick={dirMenu} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 transform active:scale-90">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;