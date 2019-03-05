import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-end;
  margin-top: 10px;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 200px;
  }
`;

const Title = styled.h2`
  display: inline-block;
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 2px 4px;
  background: linear-gradient(45deg, #6a3093, #a044ff);
  color: white;
  font-weight: 300;
  margin-top: 5px;
`;

const Button = styled.button`
  background: linear-gradient(to right, #d31027, #ea384d);
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.3);
  color: white;
  height: 48px;
  width: auto;
  padding: 0 30px;
  transition: all, 0.3s ease;
  font-size: 1.5rem;
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

const Paypall = styled(Button)`
  background: linear-gradient(to right, #0052d4, #6fb1fc);
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.3);
  color: white;
  height: 48px;
  transition: all, 0.3s ease;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
  /* display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  align-self: center; */
  margin-top: 10px;
  display: block;

  i {
    font-size: 3rem;
  }

  &:hover {
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }
`;

const cartDetails = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <Wrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button onClick={() => clearCart()}>Clear Cart</Button>
      </Link>
      <Title>Subtotal: {cartSubTotal}$</Title>
      <Title>Tax: {cartTax}$</Title>
      <Title>Total: {cartTotal}$</Title>
      <Link to="/">
        <Paypall>
          <i class="fab fa-cc-paypal" />
        </Paypall>
      </Link>
    </Wrapper>
  );
};

export default cartDetails;
