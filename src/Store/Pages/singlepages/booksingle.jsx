import React from 'react';
import { booksData } from '../../data/books';
import { useParams, useNavigate } from 'react-router-dom';

const BookSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = booksData.find((item) => item.id == id);

  return (
    <div className="page-container">
      <header className="header">
        <h1>Book Details</h1>
      </header>

      <button 
        className="back-btn" 
        onClick={() => navigate('/bookspage')}  // Correctly using navigate here
      >
        &#8592; Back to Books
      </button>

      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <h3 className="product-author">Author: {product.author}</h3>
          <p className="product-description">{product.description}</p>
          <h2 className="product-price">Price: ₹{product.price}</h2>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      <div className="related-products">
        <h2>Related Books</h2>
        <div className="related-grid">
          {booksData.slice(0, 4).map((related) => (
            <div key={related.id} className="related-card">
              <img src={related.image} alt={related.title} />
              <h4>{related.title}</h4>
              <p>by {related.author}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Bookstore | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BookSingle;
