import React, { useState } from 'react';
import '../assets/CSS/layout.css'; // Adjust with your CSS file path

export default function Product({ flower, addToCart }) {
  const [quantity, setQuantity] = useState('');

  const handleAddToCart = () => {
    addToCart(flower, quantity);
    setQuantity(''); 
  };

  return (
    <div className="product-card">
      <img src={flower.img} alt={flower.name} className="product-img" />
      <h4>{flower.name} Price: {flower.price}</h4>
      <div>
        Quantity: 
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
