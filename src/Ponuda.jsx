import React from 'react'; 
import ProductCard from './ProductCard';

function Ponuda({ products }) {
  return (
    <div className="ponuda">
      <h2>Ponuda slatkiša</h2>
      <div className="kartice-container">
        {products.map((proizvod) => (
          <ProductCard key={proizvod.id} proizvod={proizvod} />
        ))}
      </div>
    </div>
  );
}

export default Ponuda;
