import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { Button } from "./Hero";

const Wrapper = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 37%,
    rgba(123, 223, 201, 1) 37%,
    rgba(43, 214, 176, 1) 74%
  );

  padding: 20px 20px 0 20px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px 1fr));
  align-content: center;
  justify-items: center;

  @media (max-width: 500px) {
    height: 100%;
    display: block;
    width: fit-content;
  }
`;

const Left = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 60px;
    flex-direction: column;
  }
`;
const Right = styled.div`
  /* flex: 2; */
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;

const Company = styled.h3`
  margin-right: 10px;
  color: #4776e6;
`;
const Title = styled.h1`
  margin-right: 10px;
`;
const Info = styled.p`
  margin-right: 5px;
  width: 60%;
  line-height: 1.5;
  color: #4776e6;

  @media (max-width: 500px) {
    width: 100%;
    text-align: justify;
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
  overflow-y: auto;

  @media (max-width: 500px) {
    margin: 10px auto;
    text-align: center;
    display: inline-block;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(to right, #4776e6, #8e54e9);
  position: relative;
  transition: all 0.3s ease;
  align-self: flex-end;
  margin-right: 80px;

  @media (max-width: 500px) {
    margin: 0;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 500px) {
    display: block;
    margin: 0;
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    display: block;
    margin: 0;
  }
`;

const ProductWrapper = styled.div`
  width: 100%;
`;
class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            price,
            title,
            inCart,
            info
          } = value.detailProduct;
          return (
            <Wrapper>
              <Left>
                <img src={img} alt="item" />
                <PriceWrapper>
                  <Buttons>
                    <Price>
                      {" "}
                      <em>${price}</em>
                    </Price>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <StyledButton
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "In Cart" : "Add to Cart"}
                      </StyledButton>
                    </Link>
                  </Buttons>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button>Back to products</Button>
                  </Link>
                </PriceWrapper>
              </Left>
              <Right>
                <Company>
                  Made by: <br />
                  {company}
                </Company>
                <Title>
                  Model: <br />
                  {title}
                </Title>
                <Info>{info}</Info>
              </Right>
            </Wrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
