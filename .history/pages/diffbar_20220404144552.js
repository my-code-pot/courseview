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
const levels = ["Very Easy", "Easy", "Medium", "Hard", "Very Hard"];
const diffbar = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [hovered, setHovered] = useState([false, false, false, false, false]);
  const [level, setLevel] = useState("");
  const [tempLevel, setTempLevel] = useState(["Very Easy", "Very Hard"]);
  const handleClick = (i) => {
    setTempLevel([]);
    setLevel(levels[i]);
    if ((i == 4 || clicked[i + 1] === false) && clicked[i] === true) {
      setTempLevel(["Very Easy", "Very Hard"]);
      setLevel("");
      setClicked(clicked.map((clk) => false));
    } else {
      setClicked(
        clicked.map((clk, j) => {
          if (j <= i) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  };
  const handleHover = (i) => {
    setClicked(clicked.map((clk) => false));
    setHovered(
      hovered.map((hv, j) => {
        if (j <= i) {
          return true;
        } else {
          return false;
        }
      })
    );
  };
  return (
    <>
      <Bar>
        <Left
          hover_color={colors.left}
          onClick={() => handleClick(0)}
          onMouseOver={() => handleHover(0)}
          onMouseLeave={() => setHovered(hovered.map((hv) => false))}
          clicked={clicked[0]}
          hovered={hovered[0]}
        ></Left>
        <Middle
          hover_color={colors.middle1}
          onClick={() => handleClick(1)}
          onMouseOver={() => handleHover(1)}
          onMouseLeave={() => handleClick(level)))}
          clicked={clicked[1]}
          hovered={hovered[1]}
        ></Middle>
        <Middle
          hover_color={colors.middle2}
          onClick={() => handleClick(2)}
          onMouseOver={() => handleHover(2)}
          onMouseLeave={() => setHovered(hovered.map((hv) => false))}
          clicked={clicked[2]}
          hovered={hovered[2]}
        ></Middle>
        <Middle
          hover_color={colors.middle3}
          onClick={() => handleClick(3)}
          onMouseOver={() => handleHover(3)}
          onMouseLeave={() => setHovered(hovered.map((hv) => false))}
          clicked={clicked[3]}
          hovered={hovered[3]}
        ></Middle>
        <Right
          hover_color={colors.right}
          onClick={() => handleClick(4)}
          onMouseOver={() => handleHover(4)}
          onMouseLeave={() => setHovered(hovered.map((hv) => false))}
          clicked={clicked[4]}
          hovered={hovered[4]}
        ></Right>
      </Bar>
      <Diff>
        <span>{tempLevel[0]}</span>
        <span>{level}</span>
        <span>{tempLevel[1]}</span>
      </Diff>
    </>
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
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.hovered && props.hover_color};
    filter: grayscale(60%);
  }
  background-color: ${(props) => props.clicked && props.hover_color};
`;
const Right = styled.div`
  width: 6vw;
  height: 5vh;
  border-radius: 0px 20px 20px 0px;
  margin-left: 2px;
  background-color: #f2f2f2;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.hovered && props.hover_color};
    filter: grayscale(60%);
  }
  /* ${(props) => props.clicked && `background-color: ${props.hover_color}`} */
  background-color: ${(props) => props.clicked && props.hover_color};
`;
const Middle = styled.div`
  width: 6vw;
  height: 5vh;
  margin-left: 2px;
  background-color: #f2f2f2;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.hovered && props.hover_color};
    filter: grayscale(60%);
  }
  background-color: ${(props) => props.clicked && props.hover_color};
`;

const Diff = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30vw;
  height: 5vh;
`;
