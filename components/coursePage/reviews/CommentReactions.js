import React from 'react'
import styled from "styled-components";
const CommentReactions = ({likes,dislikes}) => {
    return (
        <Main>
         <ReactionsNumber className='bottom:10px'>{likes}</ReactionsNumber>
         <img width="60" height="60"  src="/like.jpeg"></img>
         <ReactionsNumber>{dislikes}</ReactionsNumber>
         <img width="60" height="60"  src="/like.jpeg"></img>
        </Main>
    )
  };
  const Main = styled.div.attrs({
    className: "flex",
  })`
    position: relative;
    left:6%;
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