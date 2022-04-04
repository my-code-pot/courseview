import styled from "styled-components";
import { BlackText } from "../../styles/text.style";
import CommentsList from "./reviews/commentsList";
import CourseDescription from "./CourseDescription";
import DataSummary from "./dataSummary/DataSummary";
import AddForm from "./addReviewForm/addForm";
import Rate from "./addReviewForm/rate";
const CoursePageMainDiv = ({courseData}) => {
    return (
        <StyledCoursePageMainDiv>
            <BlackText className="text-3xl" > {courseData.name}</BlackText>
            <CourseDescription></CourseDescription>
            <DataSummary dataSummary={courseData.dataSummary}></DataSummary>
            <AddForm></AddForm>
            <CommentsList reviews={courseData.reviews}></CommentsList>
            {/* <Rate></Rate> */}
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