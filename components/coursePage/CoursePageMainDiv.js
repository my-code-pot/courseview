import styled from "styled-components";
import { BlackText } from "../../styles/text.style";
import CommentsList from "./reviews/commentsList";
import CourseDescription from "./CourseDescription";
import DataSummary from "./dataSummary/DataSummary";
import AddForm from "./addReviewForm/addForm";
const CoursePageMainDiv = ({ courseData }) => {
  let n=courseData.number_of_reviews;
  const dataSummary= {
    "overallQuality":Math.round(((courseData.sum_of_overall_quality/n)/5)*100),
    "organization":Math.round(((courseData.sum_of_organization/n)/5)*100),
    "willTakeAgain":Math.round((courseData.sum_of_will_take_again/n)*100),
    "difficulty":Math.round((courseData.sum_of_difficulty/n)/5*100),
  }
  return (
    <StyledCoursePageMainDiv>
      <BlackText className="text-3xl"> {courseData.name}</BlackText>
      <CourseDescription description={courseData.description} ></CourseDescription>
      <DataSummary dataSummary={dataSummary}></DataSummary>
      <AddForm courseName={courseData.title}></AddForm>
      <CommentsList reviews={courseData.reviews}></CommentsList>
    </StyledCoursePageMainDiv>
  );
};
const StyledCoursePageMainDiv = styled.div.attrs({
  className: "",
})`
  margin-top: 2%;
  margin-left: 8%;
  width: 60%;
`;
export default CoursePageMainDiv;
