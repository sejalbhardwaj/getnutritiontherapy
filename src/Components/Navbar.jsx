import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.white};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  .menuIcon {
    display: none;
    cursor: pointer;
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      display: block;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .navbar-list {
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      background-color: ${({ theme }) => theme.colors.bgc};
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 1;

      &.open {
        display: flex;
      }
    }
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNav>
      <div className="menuIcon" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <NavLink className="navbar-link" to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/About" onClick={toggleMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/Service" onClick={toggleMenu}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/Testimonials" onClick={toggleMenu}>
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/Contact" onClick={toggleMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
