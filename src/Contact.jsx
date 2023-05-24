import React, { useState } from "react";
import styled from "styled-components";
import { isValidNumber } from 'libphonenumber-js';

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form{
      max-width: 50rem;
      margin: auto;
    
    .contact-inputs{
      display: flex;
      flex-direction: column;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.bgc};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
    }
  }
  }
`;

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    setPhoneNumber(inputValue);
    setIsValidPhoneNumber(isValidNumber(inputValue));
  };

  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to contact us</h2>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/moqzbgnq" method="POST" className="contact-inputs">
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <input
              type="tel"
              name="phonenumber"
              placeholder="Contact number"
              autoComplete="off"
              required
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {!isValidPhoneNumber && <p>Please enter a valid phone number.</p>}

            <textarea
              name="message"
              placeholder="Enter your message here"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <div className="btn-container"><input type="submit" value="Send" /></div>
            
          </form>
        </div>
      </div>
      <div className="Map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223360.23501138593!2d77.69896030000001!3d28.9872622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f457b66325%3A0x42faa83387a6be5e!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1684568973109!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
</div>
    </Wrapper>
  );
};

export default Contact;
