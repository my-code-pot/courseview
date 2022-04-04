import React from "react";
import {useState} from "react";
import styled from "styled-components";
const colors = {
  left: "#219653",
  middle1: "#8DCF6F",
  middle2: "#F1CA4B",
  middle3: "#F29949",
  right: "#EB5756",
};
const diffbar = () => {
    const [clicked, setClicked] = useState(false);
    // const [leftClick, setLeftClick] = useState(false);
    // const [rightClick, setRightClick] = useState(false);
    // const [leftClick, setLeftClick] = useState(false);
    // const [leftClick, setLeftClick] = useState(false);
    // const [leftClick, setLeftClick] = useState(false);
  return (
    <Bar>
      <Left hover_color={colors.left} onClick={() => setClicked(!clicked)} clicked={clicked}></Left>
      <Middle hover_color={colors.middle1}></Middle>
      <Middle hover_color={colors.middle2}></Middle>
      <Middle hover_color={colors.middle3}></Middle>
      <Right hover_color={colors.right}></Right>
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
    ${(props) => prop
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
`;
