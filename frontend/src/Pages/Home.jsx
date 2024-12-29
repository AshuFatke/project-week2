import React, { useState } from 'react';

const productImages = [
  "https://media.istockphoto.com/id/173854827/photo/pink-cactus-flower-pot-isolated-plant-white-houseplant.jpg?s=2048x2048&w=is&k=20&c=7tm8Xlu2DtlA6S6SJgefzhyPegtGnafMyDqawBiUwJA=",
  "https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1731987866995-493112a978e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
];

const Home = () => {
  const [likedCards, setLikedCards] = useState(Array(78).fill(false));

  const handleAddToBasket = () => {
    // Add to basket logic here
    console.log('Added to basket');
  };

  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="card-container m-4">
          <div className="card">
            <div className="card-front">
              <img src={productImages[index % productImages.length]} alt="Product" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">Product Name</h2>
                <p className="card-price">₹999</p>
                <button className="card-button" onClick={handleAddToBasket}>Add to Basket</button>
              </div>
            </div>
            <div className="card-back">
              <h2 className="card-title">Product Details</h2>
              <p className="card-description">This is a detailed description of the product.</p>
              <button className="card-button" onClick={handleAddToBasket}>Add to Basket</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;