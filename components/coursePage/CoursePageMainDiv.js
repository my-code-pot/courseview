import styled from "styled-components";
import { BlackText } from "../../styles/text.style";
import CommentsList from "./reviews/commentsList";
import CourseDescription from "./CourseDescription";
import DataSummary from "./dataSummary/DataSummary";
const CoursePageMainDiv = (props) => {
    return (
        <StyledCoursePageMainDiv>
            <BlackText className="text-3xl" > {props.courseName}</BlackText>
            <CourseDescription></CourseDescription>
            <DataSummary></DataSummary>
            <CommentsList></CommentsList>
        </StyledCoursePageMainDiv>
    )
  };
  const StyledCoursePageMainDiv = styled.div.attrs({
    className: "",
  })`
     margin-top: 2%;
     margin-left: 8%;
     width: 60%;
  `
  export default CoursePageMainDiv;