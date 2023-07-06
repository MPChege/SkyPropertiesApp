import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Services from "./Services";
import LandingAbout from "./LandingAbout";

const BackgroundImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1635108199650-8115b597e283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc0fHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-position: center;
  min-height: 900px;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: white; /* Added white color */
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: white; /* Added white color */
  margin-bottom: 20px;
`;

const Quote = styled.p`
  font-style: italic;
  color: white; /* Added white color */
`;

const LandingHome = () => {
  return (
    <>
      <BackgroundImage>
        <ContentWrapper>
          <Title>SKY PROPERTIES</Title>
          <Subtitle>
            Welcome to our House Dealership. Find your dream home today
          </Subtitle>
          <Quote>"Home is where your story begins."</Quote>
        </ContentWrapper>
      </BackgroundImage>
      <Services />
      <LandingAbout />
      <Contact />
    </>
  );
};

export default LandingHome;
