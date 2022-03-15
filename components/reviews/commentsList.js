import styled from "styled-components";
import Link from "next/link";
import Comment from "./Comment";
const CommentsList = () => {
    const comments=[];
    for (let i=0;i<4;i++){
        comments.push(<Comment></Comment>);
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
  width:40%;
  position:relative;
  left:30%;
  `
  export default CommentsList;