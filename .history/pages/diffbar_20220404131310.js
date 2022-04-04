import React from "react";
import { useState } from "react";
import styled from "styled-components";
const colors = {
  left: "#219653",
  middle1: "#8DCF6F",
  middle2: "#F1CA4B",
  middle3: "#F29949",
  right: "#EB5756",
};
const diffbar = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleClick0 = () => {
    setClicked([!clicked[0], false, false, false, false]);
  };
  const handleClick1 = () => {
    setClicked([!clicked[0], !clicked[1], false, false, false]);
  };
   const handleClick2 = () => {
     setClicked([!clicked[0], !clicked[1], !clicked[2], false, false]);
   };
    const handleClick3 = () => {
      setClicked([!clicked[0], !clicked[1], !clicked[2], !clicked[3], false]);
    };
     const handleClick5 = () => {
       setClicked(clicked.map(clk => !clk));
     };
  return (
    <Bar>
      <Left
        hover_color={colors.left}
        onClick={handleClick}
        clicked={clicked[0]}
      ></Left>
      <Middle
        hover_color={colors.middle1}
        onClick={handleClick2}
        clicked={clicked[1]}
      ></Middle>
      <Middle
        hover_color={colors.middle2}
        onClick={handleClick2}
        clicked={clicked[1]}
      ></Middle>
      <Middle
        hover_color={colors.middle3}
        onClick={handleClick2}
        clicked={clicked[1]}
      ></Middle>
      <Right
        hover_color={colors.right}
        onClick={handleClick2}
        clicked={clicked[1]}
      ></Right>
    </Bar>
  );
};

export default diffbar;

const Bar = styled.div`
  width: 30vw;
  border-radius: 20px;
  height: 5vh;
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  width: 6vw;
  height: 5vh;
  border-radius: 20px 0px 0px 20px;
  background-color: #f2f2f2;
  &:hover {
    background-color: ${(props) => props.hover_color};
    filter: grayscale(30%);
  }
  ${(props) => props.clicked && `background-color: ${props.hover_color}`}
`;
const Right = styled.div`
  width: 6vw;
  height: 5vh;
  border-radius: 0px 20px 20px 0px;
  margin-left: 2px;
  background-color: #f2f2f2;
  &:hover {
    background-color: ${(props) => props.hover_color};
  }
`;
const Middle = styled.div`
  width: 6vw;
  height: 5vh;
  margin-left: 2px;
  background-color: #f2f2f2;
  &:hover {
    background-color: ${(props) => props.hover_color};
  }
  ${(props) => props.clicked && `background-color: ${props.hover_color}`}
`;
