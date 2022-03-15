import styled from "styled-components";
import Link from "next/link";
import CommentHead from "./CommentHead";
import CommentText from "./CommentText";
import CommentReactions from "./CommentReactions";
const Comment = () => {
    return (
        <StyledComment>
            <CommentHead></CommentHead>
            <CommentText text="I don't know what has gotten into him to be acting like this. I was in utter shock upon discovering the thiWngs that he had done in such a short period of time. e know he suffered from depression around the time my daughter in law was pregnant."></CommentText>
            <CommentReactions></CommentReactions>
        </StyledComment>
    )
  };
  const StyledComment = styled.div.attrs({
    className: "relative",
  })`
     background-color:#fafafa;;
     margin:30px;
     border-radius: 25px;
  `

  
  export default Comment;