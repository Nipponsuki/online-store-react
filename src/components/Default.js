import React, { Component } from "react";
import styled from "styled-components";
import notfound from "../assets/images/404.gif";

const Wrapper = styled.div`
  background-image: linear-gradient(
    -225deg,
    #ff057c 0%,
    #7c64d5 48%,
    #4cc3ff 100%
  );
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Default extends Component {
  render() {
    return (
      <Wrapper>
        <img
          src={notfound}
          alt="404"
          style={{
            borderRadius: "50%",
            boxShadow:
              "0 3px 5px 2px #4cc3ff, 0 3px 5px 2px #7c64d5, 0 3px 5px 2px #ff057c"
          }}
        />
      </Wrapper>
    );
  }
}

export default Default;
