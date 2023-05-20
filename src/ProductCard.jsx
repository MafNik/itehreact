import React from 'react';

function ProductCard({ proizvod }) {
  return (
    <div className="kartica">
      <img src={proizvod.image} alt={proizvod.name} />
      <h3>{proizvod.name}</h3>
      <p>{proizvod.description}</p>
      <p>Cena: {proizvod.price} dinara</p>
      <button>Dodaj u korpu</button>
    </div>
  );
}

export default ProductCard;
