import styled from "styled-components";
import Link from "next/link";
import Comment from "./Comment";
const CommentsList = ({reviews}) => {
    const comments=[];
    for (let i=0;i<4;i++){
        comments.push(<Comment commentData={reviews[i]}></Comment>);
    }
    return (
        <StyledCommentsList >
            {comments}
        </StyledCommentsList>
    )
  };
  const StyledCommentsList = styled.div.attrs({
    className: "",
  })` 
        width:60%;
  `
  export default CommentsList;