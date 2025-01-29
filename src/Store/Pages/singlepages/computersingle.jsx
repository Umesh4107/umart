import React from 'react';
import { computerData } from '../../data/computers';
import { useParams, useNavigate } from 'react-router-dom';

const Computersingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = computerData.find((item) => item.id == id);

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="page-container">
      <header className="header">
        <h1>Computer Details</h1>
      </header>

      <button 
        className="back-btn" 
        onClick={() => navigate('/computerspage')}
      >
        &#8592; Back to Computers
      </button>

      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={`${product.brand} - ${product.model}`} />
        </div>
        <div className="product-details">
          <h2 className="product-brand">{product.brand}</h2>
          <h3 className="product-model">{product.model}</h3>
          <p className="product-description">{product.description}</p>
          <h2 className="product-price">Price: ₹{product.price}</h2>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      <div className="related-products">
        <h2>Related Computers</h2>
        <div className="related-grid">
          {computerData.slice(0, 4).map((related) => (
            <div key={related.id} className="related-card">
              <img src={related.image} alt={`${related.brand} - ${related.model}`} />
              <h4>{related.brand}</h4>
              <p>{related.model}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Computer Store | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Computersingle;
