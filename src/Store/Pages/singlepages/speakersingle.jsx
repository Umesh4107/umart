import React from 'react';
import { speakerData } from '../../data/speaker';
import { useParams, useNavigate } from 'react-router-dom';

const SpeakerSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = speakerData.find((item) => item.id == id);

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="page-container">
      <header className="header">
        <h1>Speaker Details</h1>
      </header>

      <button 
        className="back-btn" 
        onClick={() => navigate('/speakerspage')}
      >
        &#8592; Back to Speakers
      </button>

      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <h2 className="product-price">Price: ₹{product.price}</h2>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      <div className="related-products">
        <h2>Related Speakers</h2>
        <div className="related-grid">
          {speakerData.slice(0, 4).map((related) => (
            <div key={related.id} className="related-card">
              <img src={related.image} alt={related.name} />
              <h4>{related.name}</h4>
              <p>Price: ₹{related.price}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Speaker Store | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SpeakerSingle;
