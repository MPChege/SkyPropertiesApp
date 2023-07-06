import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Quote = styled.p`
  font-style: italic;
`;

const LandingHome = () => {
  return (
    <BackgroundImage>
      <img
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        alt="Background"
      />
      <ImageOverlay>
        <ContentWrapper>
          <Title>SKYPROPERTIES</Title>
          <Subtitle>
            Welcome to our House Dealership. Find your dream home today.
          </Subtitle>
          <Quote>"Home is where your story begins."</Quote>
        </ContentWrapper>
      </ImageOverlay>
    </BackgroundImage>
  );
};

export default LandingHome;
