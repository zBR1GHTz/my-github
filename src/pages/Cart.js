import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Burger', price: 5.99, quantity: 1 },
    { id: 2, name: 'Pizza', price: 8.99, quantity: 2 },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item => (
      item.id === id ? { ...item, quantity: newQuantity } : item
    )));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <Navbar />
      <main>
        <h1>Your Cart</h1>
        {cartItems.length > 0 ? (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <h2>Total: ${total.toFixed(2)}</h2>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
