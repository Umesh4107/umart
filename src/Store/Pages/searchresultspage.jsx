import React from 'react';
import { useLocation } from 'react-router-dom';

// Example product data
const productData = [
  { id: 1, name: 'iPhone 13', category: 'Mobiles' },
  { id: 2, name: 'Samsung Galaxy S22', category: 'Mobiles' },
  { id: 3, name: 'LG Refrigerator', category: 'Fridge' },
  { id: 4, name: 'Dell XPS 15', category: 'Computers' },
  { id: 5, name: 'Nike Running Shoes', category: 'Men Wear' },
  { id: 6, name: 'Kitchen Mixer', category: 'Kitchen' },
  { id: 7, name: 'Sony Bravia 55" TV', category: 'Televisions' },
];

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query')?.toLowerCase();

  // Filter products based on the search query
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Results for "{query}"</h1>
      <div style={{ marginTop: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
            </div>
          ))
        ) : (
          <p>No products found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
