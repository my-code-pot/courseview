import styled from "styled-components";
import Link from "next/link";
import CommentHead from "./CommentHead";
import CommentText from "./CommentText";
import CommentReactions from "./CommentReactions";
const Comment = ({commentData}) => {
    return (
        <StyledComment>
            <CommentHead name={commentData.name} term={commentData.semester} professor={commentData.professor}></CommentHead>
            <CommentText text={commentData.text}></CommentText>
            <CommentReactions likes={commentData.likes} dislikes={commentData.dislikes}></CommentReactions>
        </StyledComment>
    )
  };
  const StyledComment = styled.div.attrs({
    className: "",
  })`
     background-color:#fafafa;
     margin-top:5%;
     border-radius: 25px;
  `

  
  export default Comment;