import React from 'react';
import { womanData } from '../../data/woman';
import { useParams, useNavigate } from 'react-router-dom';

const Womansingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = womanData.find((item) => item.id == id);

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="page-container">
      <header className="header">
        <h1>Product Details</h1>
      </header>

      <button 
        className="back-btn" 
        onClick={() => navigate('/womanpage')}
      >
        &#8592; Back to Women Products
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
        <h2>Related Products</h2>
        <div className="related-grid">
          {womanData.slice(0, 4).map((related) => (
            <div key={related.id} className="related-card">
              <img src={related.image} alt={related.name} />
              <h4>{related.name}</h4>
              <p>Price: ₹{related.price}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Women’s Store | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Womansingle;
