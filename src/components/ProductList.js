import React, { Component } from "react";
import Product from "./Product";
import styled from "styled-components";
import { Title } from "./Hero";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
import Modal from "./Modal";

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  margin: 20px;
  align-content: center;
  justify-items: center;
`;

const StyledTitle = styled(Title)`
  display: block;
  text-align: center;
  background: transparent;
  /* border: solid 10px transparent; */
  border-image: linear-gradient(to right, #4776e6, #8e54e9);
  border-image-slice: 1;
  border-bottom: 5px solid red;
  marging: 10px 0;
`;

class ProductList extends Component {
  state = {
    products: storeProducts
  };

  render() {
    return (
      <>
        <StyledTitle>Our Products</StyledTitle>

        <Grid>
          <ProductConsumer>
            {value => {
              return value.products.map(item => (
                <Product key={item.id} value={item} />
              ));
            }}
          </ProductConsumer>
          <Modal />
        </Grid>
      </>
    );
  }
}

export default ProductList;
