import styled from "styled-components";
import { BlackText } from "../../styles/text.style";
import CommentsList from "./reviews/commentsList";
import CourseDescription from "./CourseDescription";
import DataSummary from "./dataSummary/DataSummary";
const CoursePageMainDiv = ({courseData}) => {
    return (
        <StyledCoursePageMainDiv>
            <BlackText className="text-3xl" > {courseData.name}</BlackText>
            <CourseDescription></CourseDescription>
            <DataSummary dataSummary={courseData.dataSummary}></DataSummary>
            <CommentsList reviews={courseData.reviews}></CommentsList>
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