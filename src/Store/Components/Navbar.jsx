import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Map search terms to category routes
  const categoryRoutes = {
    mobiles: '/mobilepage',
    ac: '/acpage',
    computers: '/computerspage',
    men: '/menpage',
    women: '/womanpage',
    furniture: '/furniturepage',
    kitchen: '/kitchenpage',
    fridge: '/fridgepage',
    books: '/bookspage',
    speakers: '/speakerspage',
    televisions: '/tvspage',
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      const query = searchTerm.toLowerCase().trim();

      // Check if the search term matches a category
      if (categoryRoutes[query]) {
        navigate(categoryRoutes[query]);
      } else {
        // Redirect to a generic search results page if no match
        navigate(`/search?query=${searchTerm}`);
      }
    }
  };

  return (
    <>
      <div className="navsection">
        <div className="title">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>U-Mart</h2>
          </Link>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch} // Handle search on pressing "Enter"
          />
          <button onClick={handleSearch}>Search</button> {/* Handle search on button click */}
        </div>
        <div className="user">
          <div className="userdetail">
            <Link to="/signinpage">
              <h2>Sign In/Sign Up</h2>
            </Link>
          </div>
          <div className="cart">
            <Link to="/cartpage">Cart</Link>
          </div>
        </div>
      </div>

      <div className="Menu">
        <ul>
          <li><Link to="/mobilepage">Mobiles</Link></li>
          <li><Link to="/acpage">AC</Link></li>
          <li><Link to="/computerspage">Computers</Link></li>
          <li><Link to="/menpage">Men Wear</Link></li>
          <li><Link to="/womanpage">Women Wear</Link></li>
          <li><Link to="/furniturepage">Furniture</Link></li>
          <li><Link to="/kitchenpage">Kitchen</Link></li>
          <li><Link to="/fridgepage">Fridge</Link></li>
          <li><Link to="/bookspage">Books</Link></li>
          <li><Link to="/speakerspage">Speakers</Link></li>
          <li><Link to="/tvspage">Televisions</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
