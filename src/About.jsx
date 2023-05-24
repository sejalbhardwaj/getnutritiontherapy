import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
const About = () => {
  return (
    <Wrapper>
     <AboutHeading>About Us</AboutHeading>
      <ContentWrapper>
      
        <AboutContent>
          <p>
            Welcome to Get Nutrition Therapy! I'm Aashita Bhardwaj, a highly
            qualified and passionate nutritionist dedicated to helping you
            achieve optimal health and wellness. With a Master's degree in
            Nutrition from Delhi University and currently pursuing my PhD from
            NIFTEM, Sonipat, I bring extensive knowledge and expertise in the
            field of nutrition and food science. My mission is to empower
            individuals like you to make informed choices about your diet and
            lifestyle, ultimately leading to a healthier and happier life.
          </p>
          <p>
            I believe that nutrition is not just about counting calories; it's
            about nourishing your body with the right nutrients and creating a
            sustainable and enjoyable relationship with food. Through
            personalized nutrition counseling and guidance, I will work closely
            with you to understand your unique needs, preferences, and goals.
            Together, we will develop practical and realistic strategies that
            fit seamlessly into your lifestyle, ensuring long-term success.
            Remember, your health is your most valuable asset, and investing in
            it today will reap benefits for a lifetime.
          </p>
          <Button className="about-btn">
          <NavLink to="/Service">
            Join Now
            </NavLink>
          </Button>
        </AboutContent>
        <AboutImage>
          <img src="/images/about.jpg" alt="About" />
        </AboutImage>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const AboutHeading = styled.h2`

  margin-top: 2rem;
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 900px; /* Adjust the max-width value to your preference */
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutContent = styled.div`
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    margin-bottom: 1.5rem;
  }

  .about-btn {
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 2rem;
  }
`;



const AboutImage = styled.div`
  img {
    width: 300px;
    border-radius: 5px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export default About;
