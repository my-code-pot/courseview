import styled from "styled-components";
import { Header } from "../../styles/header.style";
import CommentsList from "./reviews/commentsList";
const CoursePageMainDiv = (props) => {
    return (
        <StyledCoursePageMainDiv>
            <Header className="text-3xl" > {props.courseName}</Header>
            <CommentsList></CommentsList>
        </StyledCoursePageMainDiv>
    )
  };
  const StyledCoursePageMainDiv = styled.div.attrs({
    className: "",
  })`
     margin-top: 2%;
     margin-left: 8%;
  `
  export default CoursePageMainDiv;