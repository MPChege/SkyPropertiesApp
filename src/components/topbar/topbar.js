import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../profile/profile';
import Houses from '../houses/houses';
import Search from '../search/search';

const TopbarWrapper = styled.div`
  background: #f2f2f2;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const MenuIcon = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  padding: 0;
`;

const MenuItems = styled.div`
  background: #fff;
  padding: 20px;
`;

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <TopbarWrapper>
      <Container>
        <Logo>
          <a href="/">Real Estate</a>
        </Logo>
        <MenuIcon onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </MenuIcon>
      </Container>
      {isMenuOpen && (
        <MenuItems>
          <Profile />
          <Houses />
          <Search />
        </MenuItems>
      )}
    </TopbarWrapper>
  );
}
