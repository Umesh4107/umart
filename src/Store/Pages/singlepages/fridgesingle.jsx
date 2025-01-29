import React from 'react';
import { fridgeData } from '../../data/fridge';
import { useParams, useNavigate } from 'react-router-dom';

const FridgeSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = fridgeData.find((item) => item.id == id);

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="page-container">
      <header className="header">
        <h1>Fridge Details</h1>
      </header>

      <button 
        className="back-btn" 
        onClick={() => navigate('/fridgepage')}
      >
        &#8592; Back to Fridges
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
        <h2>Related Fridges</h2>
        <div className="related-grid">
          {fridgeData.slice(0, 4).map((related) => (
            <div key={related.id} className="related-card">
              <img src={related.image} alt={related.name} />
              <h4>{related.name}</h4>
              <p>Price: ₹{related.price}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Fridge Store | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FridgeSingle;
