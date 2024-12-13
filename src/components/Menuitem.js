import React from 'react';
import styled from 'styled-components';

// Styled Components
const MenuItemContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;

  h3 {
    font-size: 1.2rem;
    color: #333333;
    margin: 0 0 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666666;
    margin: 0 0 1rem;
  }
`;

const Button = styled.button`
  background: #ff5722;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #e64a19;
  }
`;

const MenuItem = ({ name, price, image, onAddToCart }) => (
  <MenuItemContainer>
    <Image src={image} alt={name} />
    <Info>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <Button onClick={onAddToCart}>Add to Cart</Button>
    </Info>
  </MenuItemContainer>
);

export default MenuItem;
