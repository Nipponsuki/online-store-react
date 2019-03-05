import React, { Component } from "react";
import styled from "styled-components";
import { Title } from "./Hero";
import CardGrid from "./cart/CardGrid";
import CartDetails from "./cart/cartDetails";
import { ProductConsumer } from "../context";

const Wrapper = styled.div`
  /* background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%); */
  padding: 50px 20px 0 20px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const StyledTitle = styled(Title)`
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  @media (max-width: 500px) {
    margin-top: 40px;
  }
`;

const EmptyCart = styled.div`
  background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
  padding: 50px 20px 0 20px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
class Cart extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Wrapper>
                  <StyledTitle>Your Cart</StyledTitle>
                  <CardGrid value={value} />
                  <CartDetails value={value} />
                </Wrapper>
              );
            } else {
              return (
                <EmptyCart>
                  <StyledTitle>Your cart Currently Empty </StyledTitle>
                </EmptyCart>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;
