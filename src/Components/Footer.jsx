import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="contact-short-btn">
            <NavLink to="https://forms.gle/taj6U6wsrmyz19zdA">
              <Button>Get started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Get Nutrition Therapy</h3>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" required autoComplete="off" placeholder="Email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <a href="https://wa.me/6284723801" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icons" />
              </a>
              <a href="https://www.instagram.com/aashita.bhardwaj" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icons" />
              </a>
            </div>
          </div>

          {/* 4th column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 6284723801</h3>
          </div>
        </div>
        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Getnutritiontherapy. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5rem;
    border: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.colors.white};
    transform: translateY(50%);
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.bgc};

    h3 {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 2.4rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.bgc};
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      padding: 2rem 1rem;
      max-width: 95vw;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    .grid-four-column {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default Footer;
