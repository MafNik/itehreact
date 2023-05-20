import React, { useState } from 'react';
import ProductCard from './ProductCard';

function Ponuda({ products }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = () => {
    const filtered = products.filter(
      (proizvod) =>
        proizvod.price >= parseInt(minPrice) && proizvod.price <= parseInt(maxPrice)
    );
    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    setFilteredProducts(products);
  };

  return (
    <div className="ponuda">
      <h2>Ponuda slatkiša</h2>
      <div className="filter-container">
        <input
          type="number"
          placeholder="Min cena"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max cena"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={handleFilter}>Filtriraj</button>
        <button onClick={handleReset}>Resetuj</button>
      </div>
      <div className="kartice-container">
        {filteredProducts.map((proizvod) => (
          <ProductCard key={proizvod.id} proizvod={proizvod} />
        ))}
      </div>
    </div>
  );
}

export default Ponuda;
