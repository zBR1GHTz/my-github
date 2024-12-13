import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff5722;
`;

const Links = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;

  a {
    text-decoration: none;
    color: #333333;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #ff5722;
    }
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>FoodWagon</Logo>
    <Links>
      <li><a href="/">Home</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/cart">Cart</a></li>
    </Links>
  </NavbarContainer>
);

export default Navbar;
