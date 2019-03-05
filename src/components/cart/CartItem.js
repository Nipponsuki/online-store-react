import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  display: inline-block;
  box-shadow: 0px 2px 14px -1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 2px 4px;
  background: linear-gradient(45deg, #6a3093, #a044ff);
  color: white;
  font-weight: 300;
`;

const Titles = styled.div`
  grid-column: 1 / span 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  align-content: space-around;
  justify-items: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h3 {
    color: #a044ff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    font-weight: bold;
  }
  h1 {
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
  }

  i {
    color: white;
    transition: all 0.3s ease;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  img {
    width: 100%;
  }
`;
const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <Titles>
      <Product>
        <Title>Product</Title>
        <Content>
          <ImageContainer>
            <img src={img} alt="item" />
          </ImageContainer>
        </Content>
      </Product>
      <Product>
        <Title>Product Name</Title>
        <Content>
          <h3>{title}</h3>
        </Content>
      </Product>
      <Product>
        <Title>Price</Title>
        <Content>
          <h1>${price}</h1>
        </Content>
      </Product>
      <Product>
        <Title>Quantity</Title>
        <Content>
          <h1 onClick={() => decrement(id)}>
            <i class="fas fa-minus" />
          </h1>
          <h1>{count}</h1>
          <h1 onClick={() => increment(id)}>
            <i class="fas fa-plus" />
          </h1>
        </Content>
      </Product>
      <Product>
        <Title>Remove</Title>
        <Content>
          <h1 onClick={() => removeItem(id)}>
            <i class="fas fa-trash-alt" />
          </h1>
        </Content>
      </Product>
      <Product>
        <Title>Total</Title>
        <Content>
          <h1>Total: {total}$</h1>
        </Content>
      </Product>
    </Titles>
  );
};

export default CartItem;
