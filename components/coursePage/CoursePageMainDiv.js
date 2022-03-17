import styled from "styled-components";
import { Header } from "../../styles/header.style";
import CommentsList from "./reviews/commentsList";
import CourseDescription from "./CourseDescription";
import DataSummary from "./dataSummary/DataSummary";
const CoursePageMainDiv = (props) => {
    return (
        <StyledCoursePageMainDiv>
            <Header className="text-3xl" > {props.courseName}</Header>
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