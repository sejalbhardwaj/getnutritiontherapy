import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const Hero = ({ name, image }) => {
  const firstName = useGlobalContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="section-hero-data">
            <h1 className="hero-heading">{name}</h1>
            <p className="hero-para">
              Welcome to Get Nutrition! We're here to empower you to make positive
              changes towards a healthier lifestyle. Our mission is to provide you
              with the knowledge, support, and guidance you need to achieve your
              wellness goals.
            </p>
            <Button className="btn BookNow-btn">
              <NavLink to="/Service">Book Now</NavLink>
            </Button>
          </div>

          <div className="section-hero-image">
            <picture>
              <img src={image} alt="hero image" className="hero-img" />
            </picture>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 2rem;

  .grid {
    display: grid;
    gap: 4rem;
  }

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4.4rem;
    color: ${({ theme }) => theme.colors.bgc};
  }

  .hero-para {
    margin-top: 0.5rem;
    margin-bottom: 1.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .hero-heading {
      font-size: 3rem;
    }

    .hero-para {
      max-width: 100%;
    }

    .hero-img {
      max-width: 100%;
    }
  }
`;

export default Hero;
