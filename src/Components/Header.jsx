import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <Logo src="/images/logo.png" alt="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 2rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bgc};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: auto;
  max-width: 40%;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    max-width: 80%;
    margin-bottom: 1rem;
  }
`;

export default Header;
