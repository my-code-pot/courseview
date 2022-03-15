import React from 'react'
import styled from "styled-components";
const CommentReactions = () => {
    return (
        <Main>
         <ReactionsNumber className='bottom:10px'>10</ReactionsNumber>
         <img width="60" height="60"  src="/like.jpeg"></img>
         <ReactionsNumber>10</ReactionsNumber>
         <img width="60" height="60"  src="/like.jpeg"></img>
        </Main>
    )
  };
  const Main = styled.div.attrs({
    className: "flex",
  })`
    position: relative;
    left:40px;
    padding:3px;
  `
  const ReactionsNumber = styled.div.attrs({
    className: "flex",
  })`
    font-size:15px;
    position: relative;
    top:6px;
    color:#385898 ;
  `
  export default CommentReactions;