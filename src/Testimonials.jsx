import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "./TestimonialsData";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Set slidesToShow to 3 to display three testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index}>
            <TestimonialImage src={testimonial.image} alt={testimonial.name} />
            <TestimonialContent>
              <TestimonialName>{testimonial.name}</TestimonialName>
              <TestimonialText>{testimonial.testimonial}</TestimonialText>
            </TestimonialContent>
          </Testimonial>
        ))}
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin: 2rem;
`;

const Testimonial = styled.div`
  margin: 1rem;
  width: 400px;
  max-width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 1rem;
  border-radius: 5px;
`;

const TestimonialContent = styled.div`
  margin-bottom: 1rem;
`;

const TestimonialName = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const TestimonialText = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
`;

export default Testimonials;
