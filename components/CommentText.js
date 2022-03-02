import styled from "styled-components";
import Link from "next/link";
const CommentText = ({text}) => {
    return (
        <StyledCommentText>
            {text}
        </StyledCommentText>
    )
  };
  const StyledCommentText = styled.div.attrs({
    className: "",
  })`
    position: absolute;
    left:40px;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	text-decoration: none solid rgb(26, 26, 27);
	text-align: start;
	color: rgb(26, 26, 27);
  `
  export default CommentText;