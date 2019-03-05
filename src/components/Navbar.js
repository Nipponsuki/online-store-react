import React, { Component } from "react";
import Logo from "./Logo";
import styled from "styled-components";
import cart from "../assets/images/cart.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: auto;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5px;

  @media (max-width: 500px) {
    top: 0;
    right: 0;
    margin-top: 5px;
  }
`;

const ImageContainer = styled.div`
  transition: all 0.3s ease;
  width: ${props => (props.cart ? "3rem" : "8rem")};
  height: ${props => (props.cart ? "3rem" : "none")};
  border-radius: ${props => (props.cart ? "50%" : "5px")};
  padding: ${props => (props.cart ? "15px" : "0")};
  cursor: pointer;
  margin-right: ${props => (props.cart ? "10px" : "0")};
  background: ${props =>
    props.cart
      ? "black"
      : "linear-gradient(45deg,rgba(29, 84, 253, 1) ,rgba(69, 142, 252, 1))"};
  @media (max-width: 500px) {
    margin-right: 10px;
  }

  &:hover {
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }
  img {
    width: 100%;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Link to="/">
          <ImageContainer>
            <img src={logo} alt="cart" />
          </ImageContainer>
        </Link>
        <Link to="/store">
          <ImageContainer cart>
            <img src={cart} alt="cart" />
          </ImageContainer>
        </Link>
      </Nav>
    );
  }
}

export default Navbar;
