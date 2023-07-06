import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";

const Div = styled.div`
  background: #000;
  display: flex;
  padding: 1.5rem;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      width: 40px;
      height: 40px;
    }
    h2 {
      color: #fff;
      font-size: 1.2rem;
    }
  }
  .contact-info {
    color: #fff;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #1460e5;
    }
  }
  .creator {
    color: #fff;
    font-size: 1.2rem;
    a {
      text-decoration: none;
      color: #1460e5;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 1.2rem;
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      img {
        width: 40px;
        height: 40px;
      }
      h2 {
        color: #fff;
        font-size: 1.2rem;
      }
    }
    .contact-info {
      color: #fff;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #1460e5;
      }
    }
    .creator {
      color: #fff;
      font-size: 1rem;
      a {
        text-decoration: none;
        color: #1460e5;
      }
    }
  }
`;

const Contact = () => {
  return (
    <Div>
      <div className="footer">
        <h2>Sky Properties</h2>
        <div className="contact-info">
          <span>
            <FaEnvelope /> info@skyproperties.com
          </span>
          <span>
            <FaPhone /> +1 123-456-7890
          </span>
          <span>
            <FaMapMarker /> 123 Main St, City, State
          </span>
        </div>
      </div>
      <div className="creator">
        Created by <a href="https://github.com/lewis-ma">G3 Rails</a>
      </div>
    </Div>
  );
};

export default Contact;
