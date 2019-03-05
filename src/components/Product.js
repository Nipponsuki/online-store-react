import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { Button } from "./Hero";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  border-radius: 10px;

  padding: 5px;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 1) 37%,
    rgba(29, 84, 253, 1) 37%,
    rgba(69, 142, 252, 1) 72%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 5px 2px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 3px 5px 2px rgba(255, 255, 255, 0.5);
    transform: scale(1.02);
  }
`;

const Title = styled.h1`
  color: ${props => (props.company ? "#43e97b" : "white")};
  font-weight: bold;
  margin: 0;
`;

const ImageContainer = styled.div`
  width: 300px;
  img {
    width: 100%;
  }
`;
const Price = styled.h1`
  color: white;
  font-weight: bold;
  margin: 0;
`;

const StyledButton = styled(Button)`
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  box-shadow: 0 3px 5px 2px rgba(67, 233, 123, 0.5);
  position: relative;
  z-index: 99;

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

class Product extends Component {
  render() {
    console.log(this.props.value.img);

    const { id, title, img, price, company, inCart } = this.props.value;
    return (
      <Wrapper>
        <Title company>{company}</Title>
        <ProductConsumer>
          {value => (
            <>
              <Link to="/details" style={{ textDecoration: "none" }}>
                <ImageContainer onClick={() => value.handleDetail(id)}>
                  <img src={img} alt="item" />
                </ImageContainer>
              </Link>
              <Title>{title}</Title>
              <Price>
                <em>${price}</em>
              </Price>
              <StyledButton
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
                disabled={inCart ? true : false}
              >
                {inCart ? (
                  <p disabled>Already Added</p>
                ) : (
                  <i className="fas fa-cart-plus" />
                )}
              </StyledButton>
            </>
          )}
        </ProductConsumer>
      </Wrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
