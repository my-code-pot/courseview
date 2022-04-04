import React from "react";
import styled from "styled-components";

const diffbar = () => {
  return <Bar>
      <Left></Left>
      <Middle></Middle>
      <Middle
  </Bar>;
};

export default diffbar;
const Bar = styled.div`
  width: 30vw;
  border: 0.1px solid black;
  border-radius: 20px;
  height: 5vh;
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  width: 6vw;
  height: 5vh;
  border: 0.1px solid black;
  border-radius: 20px 0px 0px 20px;
`;
const Right = styled.div`
  width: 6vw;
  height: 5vh;
  border: 0.1px solid black;
  border-radius: 0px 20px 20px 0px;
`;
const Middle = styled.div`
  width: 6vw;
  height: 5vh;
  border: 0.1px solid black;
`;
