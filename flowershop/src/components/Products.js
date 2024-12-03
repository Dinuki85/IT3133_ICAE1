import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import { flowers } from './FlowerDb';
import '../assets/CSS/layout.css'; 

export default function Products() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const qty = parseInt(quantity, 10);
    if (!qty || qty <= 0) return;

    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty }]);
    }
  };

  return (
    <>
      <div className="item1">
        <h1>Flower Shop</h1>
      </div>
      <div className="item2">
        <h4 className="card-title">Buy flowers</h4>
        <div className="grid-container">
          {flowers.map(flower => (
            <Product key={flower.id} flower={flower} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="item3">
        <Cart cartItems={cartItems} />
      </div>
    </>
  );
}
