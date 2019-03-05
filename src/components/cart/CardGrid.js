import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  align-content: space-around;
  justify-items: center;
`;

const CardGrid = ({ value }) => {
  console.log(value);
  const { cart } = value;

  return (
    <Wrapper>
      {cart.map(item => (
        <CartItem key={item.id} item={item} value={value} />
      ))}
    </Wrapper>
  );
};

export default CardGrid;
