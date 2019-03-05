import React from "react";
import styled from "styled-components";
import heroImage from "../assets/images/hero.png";

const Header = styled.div`
  background: url(${heroImage}),
    linear-gradient(
      61deg,
      rgba(0, 0, 0, 1) 37%,
      rgba(29, 84, 253, 1) 37%,
      rgba(69, 142, 252, 1) 72%
    );
  height: 100vh;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 500px) {
    background: linear-gradient(
      61deg,
      rgba(0, 0, 0, 1) 37%,
      rgba(29, 84, 253, 1) 37%,
      rgba(69, 142, 252, 1) 72%
    );
    align-items: center;
    margin-top: 50px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Title = styled.h1`
  background: linear-gradient(to right, #4776e6, #8e54e9);
  text-transform: uppercase;
  padding: 5px;
  color: white;
  width: auto;
  margin: 0;
  font-size: 2.5rem;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  background: linear-gradient(to right, #4776e6, #8e54e9);

  padding: 5px;
  color: white;
  width: auto;
  line-height: 1.1;
  margin-bottom: 5px;
  font-size: 1.5rem;
`;

export const Button = styled.div`
  background: linear-gradient(to right, #bc4e9c, #f80759);
  border: 0;
  border-radius: 50px;
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.3);
  color: white;
  height: 48px;
  width: auto;
  padding: 0 30px;
  transition: all, 0.3s ease;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  align-self: center;
  margin-top: 10px;

  &:hover {
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }
`;

const Hero = () => {
  return (
    <Header>
      <Wrapper>
        <Title>Lorem ipsum dolor</Title>
        <Subtitle>Lorem ipsum is placeholder text commonly</Subtitle>
        <Subtitle>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        </Subtitle>

        <Button>Scroll to see our Products</Button>
      </Wrapper>
    </Header>
  );
};

export default Hero;
