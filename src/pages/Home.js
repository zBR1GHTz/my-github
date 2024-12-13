import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuItem from '../components/Menuitem';

// Styled Components
const Main = styled.main`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Home = () => {
  const menuItems = [
    { id: 1, name: 'Burger', price: 5.99, image: '/images/burger.jpg' },
    { id: 2, name: 'Pizza', price: 8.99, image: '/images/pizza.jpg' },
    { id: 3, name: 'Sushi', price: 12.99, image: '/images/sushi.jpg' },
  ];

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart.`);
  };

  return (
    <div className="home">
      <Navbar />
      <Main>
        <h1>Welcome to FoodWagon</h1>
        <MenuGrid>
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </MenuGrid>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
