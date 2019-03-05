import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { Button } from "./Hero";

const rotate = keyframes`
  from {
    opacity: 0;
  }

  to {
	opacity: 1;
  }
`;
const back = keyframes`
  from {
    transform: translate(-50%, -50%);
  }

  to {
    transform: translate(-100%, -100%);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 0.3s linear, back 0.3s linear;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  transition: all 0.3s;
`;

const ModalContainer = styled.div`
  display: flex;
  color: #38f9d7;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 1) 37%,
    rgba(29, 84, 253, 1) 37%,
    rgba(69, 142, 252, 1) 72%
  ); */
  background: linear-gradient(to right, #0575e6, #021b79);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  z-index: 99;
  animation: ${rotate} 0.6s ease;
  @media (max-width: 500px) {
    width: auto;
  }
`;

const Title = styled.h1`
  color: ${props => (props.company ? "#43e97b" : "white")};
  font-weight: bold;
  margin: 0;
  margin-top: 5px;
`;

const ImageContainer = styled.div`
  width: 300px;
  img {
    width: 100%;
  }
`;
const Price = styled.h1`
  color: #4776e6;
  margin-right: 10px;
  margin-bottom: 40px;
  background: linear-gradient(to right, #bc4e9c, #f80759);
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.6);
  }
`;

const StyledButton = styled(Button)`
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  box-shadow: 0 3px 5px 2px rgba(67, 233, 123, 0.5);
  position: relative;
  z-index: 99;
  margin: 0;

  &:hover::before {
    transform: translate(-70%, -70%);
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.6);
    font-size: 1.5rem;
    content: "\f41b";
    align-items: center;
    justify-content: center;
    display: flex;
  }

  &::before {
    content: "";
    position: absolute;
    font-family: "Font Awesome 5 Brands";
    font-weight: 400;
    content: "";
    background: transparent;
    width: 3rem;
    height: 100%;
    border-radius: 50px;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.3s ease;
  }
`;

const Wrapper = styled.div`
  background: red;
`;

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <Wrapper>
                <ModalContainer>
                  <Title>Item Added to Cart</Title>
                  <ImageContainer>
                    <img src={img} alt="item" />
                  </ImageContainer>
                  <Title>{title}</Title>
                  <Price>
                    <em>${price}</em>
                  </Price>
                  <Link to="/store" style={{ textDecoration: "none" }}>
                    <StyledButton onClick={() => closeModal()}>
                      See the Cart
                    </StyledButton>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button onClick={() => closeModal()}>Store</Button>
                  </Link>
                </ModalContainer>
              </Wrapper>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
