import React from "react";
import { useState } from "react";
import styled from "styled-components";

// Style constants
const colors = ["#219653", "#8DCF6F", "#F1CA4B", "#F29949", "#EB5756"];
const hover_colors = ["#9acbab", "#c8e7b9", "#f8e4aa", "#facca7", "#f8adac"];
const levels = ["Very Easy", "Easy", "Medium", "Hard", "Very Hard"];

const DifficultyBar = () => {
  const [bgColors, setBgColors] = useState([
    "None",
    "None",
    "None",
    "None",
    "None",
  ]);
  const [level, setLevel] = useState("");
  const [currentHoverLevel, setCurrentHoverLevel] = useState("");
  const [tempLevel, setTempLevel] = useState(["Very Easy", "Very Hard"]);

  const handleClick = (i) => {
    setTempLevel([]);
    setLevel(levels[i]);
    if ((i == 4 || bgColors[i + 1] === "None") && bgColors[i] === "dark") {
      setTempLevel(["Very Easy", "Very Hard"]);
      setLevel("");
      setBgColors(bgColors.map((clk) => "None"));
    } else {
      setBgColors(
        bgColors.map((clk, j) => {
          if (j <= i) {
            return "dark";
          } else {
            return "None";
          }
        })
      );
    }
  };
  const handleHover = (i) => {
    setCurrentHoverLevel(levels[i]);
    // setClicked(clicked.map((clk) => false));
    setBgColors(
      bgColors.map((hv, j) => {
        if (j <= i) {
          return "light";
        } else {
          return "None";
        }
      })
    );
  };
  const getBgColor = (i) => {
    if (bgColors[i] === "light") {
      return hover_colors[i];
    } else if (bgColors[i] === "dark") {
      return colors[i];
    } else {
      return "None";
    }
  };
  const handleOnMouseLeave = (i) => {
    setCurrentHoverLevel(click)
    if (bgColors[i] === "dark") {
      return;
    } else {
      if (level === "") {
        setBgColors(bgColors.map((clk) => "None"));
      } else {
        let j = levels.indexOf(level);
        setBgColors(
          bgColors.map((clk, x) => {
            if (x <= j) {
              return "dark";
            } else {
              return "None";
            }
          })
        );
      }
    }
  };
  return (
    <>
      <Bar>
        <Left
          hover_color={colors.left}
          onClick={() => handleClick(0)}
          onMouseOver={() => handleHover(0)}
          onMouseLeave={() => handleOnMouseLeave(0)}
          bgColor={getBgColor(0)}
        ></Left>
        <Middle
          hover_color={colors.middle1}
          bgColor={getBgColor(1)}
          onClick={() => handleClick(1)}
          onMouseOver={() => handleHover(1)}
          onMouseLeave={() => handleOnMouseLeave(1)}
        ></Middle>
        <Middle
          hover_color={colors.middle2}
          onClick={() => handleClick(2)}
          onMouseOver={() => handleHover(2)}
          onMouseLeave={() => handleOnMouseLeave(2)}
          bgColor={getBgColor(2)}
        ></Middle>
        <Middle
          hover_color={colors.middle3}
          onClick={() => handleClick(3)}
          onMouseOver={() => handleHover(3)}
          onMouseLeave={() => handleOnMouseLeave(3)}
          bgColor={getBgColor(3)}
        ></Middle>
        <Right
          hover_color={colors.right}
          onClick={() => handleClick(4)}
          onMouseOver={() => handleHover(4)}
          onMouseLeave={() => handleOnMouseLeave(4)}
          bgColor={getBgColor(4)}
        ></Right>
      </Bar>
      <Diff>
        <span>{tempLevel[0]}</span>
        <span>{currentHoverLevel}</span>
        <span>{tempLevel[1]}</span>
      </Diff>
    </>
  );
};

export default DifficultyBar;

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
  background-color: ${(props) => props.bgColor};
`;
const Right = styled.div`
  width: 6vw;
  height: 5vh;
  border-radius: 0px 20px 20px 0px;
  margin-left: 2px;
  background-color: #f2f2f2;
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props) => props.bgColor};
`;
const Middle = styled.div`
  width: 6vw;
  height: 5vh;
  margin-left: 2px;
  background-color: #f2f2f2;
  transition: background-color 0.2s ease-in-out;

  background-color: ${(props) => props.bgColor};
`;

const Diff = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30vw;
  height: 5vh;
`;
