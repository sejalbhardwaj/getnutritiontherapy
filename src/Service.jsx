import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ServicesData from "./ServicesData";
import { Button } from "./styles/Button";

const Service = () => {
  return (
    <Wrapper>
      <div id="top" className="service-section">
        <div className="service-header">
          <span>Explore</span>
          <span>Our</span>
          <span>Programs</span>
        </div>

        <div className="service-categories">
          {ServicesData.map((service, index) => (
            <div className="category" key={index}>
              <span className="category-image">{service.image}</span>
              <span className="category-heading">{service.heading}</span>
              <span className="category-details">{service.details}</span>
              <NavLink to="https://forms.gle/taj6U6wsrmyz19zdA">
                <Button className="btn">Join Now</Button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.white};

  .service-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;
  }

  .service-header {
    display: flex;
    margin-top: -5rem;
    margin-bottom: 4rem;
    gap: 5rem;
    font-weight: bold;
    font-size: 3rem;
    justify-content: center;
    color: ${({ theme }) => theme.colors.bgc};
    text-transform: uppercase;
    font-style: italic;
  }

  .service-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .category {
    background-color: #808080;
    color: #fff;
    flex: 1 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: #22ab85;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      transform: scale(1.05);
    }
  }

  .category-image {
    display: block;
    margin: auto;
    object-fit: cover;
  }

  .category-heading {
    font-size: 2.5rem;
  }

  .category-details {
    font-size: 1.8rem;
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export default Service;
