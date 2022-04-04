import React from "react";
import styled from "styled-components";

const diffbar = () => {
  return <Bar>
      
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
const left = styled.div`
  width: 6vw;
  height: 5vh;
  border: 0.1px solid black;
  border-radius: 20px 0px 0px 20px;
`;
const right = styled.div`
  width: 6vw;
  height: 5vh;
  border: 0.1px solid black;
  border-radius: 0px 20px 20px 0px;
`;
const middle = styled.div`
  width: 6vw;
  height: 5vh;
  border: 0.1px solid black;
`;
