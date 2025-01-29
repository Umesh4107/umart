import React from 'react';
import { mobileData } from '../../data/mobiles';
import { useParams, useNavigate } from 'react-router-dom';

const MobileSingle = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = mobileData.find((item) => item.id == id);

    if (!product) {
        return <div className="error-message">Product not found</div>;
    }

    return (
        <div className="page-container">
            <header className="header">
                <h1>Mobile Details</h1>
            </header>

            <button 
                className="back-btn" 
                onClick={() => navigate('/mobilepage')}
            >
                &#8592; Back to Mobiles
            </button>

            <div className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <h2 className="product-price">Price: ₹{product.price}</h2>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>

            <div className="related-products">
                <h2>Related Mobiles</h2>
                <div className="related-grid">
                    {mobileData.slice(0, 4).map((related) => (
                        <div key={related.id} className="related-card">
                            <img src={related.image} alt={related.name} />
                            <h4>{related.name}</h4>
                            <p>{related.description.slice(0, 50)}...</p>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 MobileStore | All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MobileSingle;
