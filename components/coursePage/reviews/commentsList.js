import styled from "styled-components";
import Link from "next/link";
import Comment from "./Comment";
import { BlackText, RedText } from "../../../styles/text.style";
const CommentsList = ({reviews}) => {
    const comments=[];
    for (let i=0;i<4;i++){
        comments.push(<Comment commentData={reviews[i]}></Comment>);
    }
    return (
        <StyledCommentsList >
            <RedText>Reviews:</RedText>
            <div>
            {comments}
            </div>
        </StyledCommentsList>
    )
  };
  const StyledCommentsList = styled.div.attrs({
    className: "",
  })` 
        width:60%;
        margin-top: 5%;
  `
  export default CommentsList;