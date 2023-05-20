import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function Ponuda({ products }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products.filter(
      (proizvod) =>
        (proizvod.price >= parseInt(minPrice) || minPrice === '') &&
        (proizvod.price <= parseInt(maxPrice) || maxPrice === '') &&
        proizvod.name.toLowerCase().includes(productName.toLowerCase())
    );

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, productName, products, sortOrder]);

  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    setProductName('');
    setSortOrder('asc');
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
        <input
          type="text"
          placeholder="Naziv proizvoda"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Rastuća cena</option>
          <option value="desc">Opadajuća cena</option>
        </select>
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
