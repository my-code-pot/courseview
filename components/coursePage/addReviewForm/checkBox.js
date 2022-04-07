import React, { useState } from 'react'
import styled from 'styled-components';
const CheckBox = ({setRecommendation}) => {
    const [clicked, setClicked]= useState("");
    const [bgcolors,setBgColors]=useState(["None","None"]);
    const handleOnMouseLeave = ()=>{
        if (clicked===""){
            setBgColors(["None","None"])
        }
        else if (clicked==="yes")
        {
            setBgColors(["dark","None"]);
        }
        else{
            setBgColors(["None","dark"]);
        }
    }
  const handleClick = (clicked)=>{
      setClicked(clicked);
      setRecommendation(clicked)
      if (clicked==="yes"){
        setBgColors(["dark","None"]);
      }
      else{
        setBgColors(["None","dark"]);
      }
  }
  const handleHover = (hovered)=>{
    if (hovered==="yes"){
        setBgColors(["light","None"]);
      }
      else{
        setBgColors(["None","light"]);
      }
  }
  const getBgColor =(bgColor,decision)=>{
      if (bgColor==="dark" ){
          if (decision=="yes"){
            return "green";
          }
          else{
              return "red";
          }
      }
      else if (bgColor==="None"){
          return "None"
      }
      else 
      {
        if (decision=="yes"){
            return "#90ee90";
          }
          else{
              return "#FF7F7F";
          }
      }
  }
  return (
    <Wrapper>
    <div className='mr-6'>
        <Circle 
        bgColor={getBgColor(bgcolors[0],"yes")} onClick={()=>handleClick("yes")}
        onMouseOver={()=>handleHover("yes")}
        onMouseLeave={() => handleOnMouseLeave()}
        ></Circle>
        <YesText >Yes</YesText>
    </div>
    <div>
        <Circle 
        bgColor={getBgColor(bgcolors[1],"no")} onClick={()=>handleClick("no")}
        onMouseOver={()=>handleHover("no")}
        onMouseLeave={() => handleOnMouseLeave()}
        ></Circle>
        <NoText> No</NoText>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
   display: flex;
   margin-left: 50%;
   margin-top: 5%;
`;
const YesText = styled.div`
   font-size: medium;
   margin-left: 10%;
`;
const NoText = styled.div`
   font-size: medium;
   margin-left: 20%;
`;
const Circle = styled.div`
   border-radius: 50%;
   border-width: 1px;
   width: 40px;
   height:40px;
   border-color:gray;
   border-style: solid;
   background-color: ${(props) => props.bgColor};
`;
export default CheckBox