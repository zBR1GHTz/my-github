import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuItem from '../components/Menuitem';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Burger', price: 5.99, image: '/images/burger.jpg' },
    { id: 2, name: 'Pizza', price: 8.99, image: '/images/pizza.jpg' },
    { id: 3, name: 'Pasta', price: 7.99, image: '/images/pasta.jpg' },
    { id: 4, name: 'Salad', price: 4.99, image: '/images/salad.jpg' },
    { id: 5, name: 'Sushi', price: 12.99, image: '/images/sushi.jpg' },
  ];

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart.`);
  };

  return (
    <div className="menu">
      <Navbar />
      <main>
        <h1>Our Menu</h1>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
