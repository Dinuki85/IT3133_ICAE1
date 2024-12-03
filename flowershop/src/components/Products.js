import { flowers } from './FlowerDb';
import { useState } from 'react';
import Cart from './Cart';

export default function Products() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (flower, quantity) => {
    const itemIndex = cartItems.findIndex(item => item.id === flower.id);
    const updatedCart = [...cartItems];

    if (itemIndex > -1) {
      updatedCart[itemIndex].qty += quantity;
    } else {
      updatedCart.push({ ...flower, qty: quantity });
    }
    setCartItems(updatedCart);
  };

  const handleAddToCart = (flower, inputId) => {
    const quantity = parseInt(document.getElementById(inputId).value, 10);
    if (quantity > 0) {
      addToCart(flower, quantity);
      document.getElementById(inputId).value = ''; 
    } else {
      alert('Please enter a valid quantity.');
    }
  };

  return (
    <div className="products-cart-container">
      <div className="products-container">
        <h1>Flower Shop</h1>
        <div className="grid-container">
          {flowers.map(flower => (
            <div key={flower.id} className="flower-item">
              <img src={flower.img} alt={flower.name} />
              <h4>{flower.name} Price: {flower.price}</h4>
              <label>
                Quantity:
                <input
                  type="number"
                  id={`qty-${flower.id}`}
                  min="1"
                  className="quantity-input"
                />
              </label>
              <button onClick={() => handleAddToCart(flower, `qty-${flower.id}`)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}
