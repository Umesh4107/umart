import React from 'react';
import { acData } from '../../data/ac';
import { useParams, useNavigate } from 'react-router-dom';

const AcSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = acData.find((item) => item.id == id);

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="page-container">
      <header className="header">
        <h1>AC Details</h1>
      </header>

      <button
        className="back-btn"
        onClick={() => navigate('/acpage')}
      >
        &#8592; Back to ACs
      </button>

      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.model} />
        </div>
        <div className="product-details">
          <h2 className="product-company">{product.company}</h2>
          <h3 className="product-model">{product.model}</h3>
          <p className="product-description">{product.description}</p>
          <h2 className="product-price">Price: ₹{product.price}</h2>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      <div className="related-products">
        <h2>Related ACs</h2>
        <div className="related-grid">
          {acData.slice(0, 4).map((related) => (
            <div key={related.id} className="related-card">
              <img src={related.image} alt={related.model} />
              <h4>{related.company}</h4>
              <p>{related.model}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Cool AC Shop | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AcSingle;
