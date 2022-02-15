import styled from "styled-components";
import Link from "next/link";
const CourseListItem = ({course}) => {
    return (
        <StyledCourseListItem >
            {course}
        </StyledCourseListItem>
    )
  };
  const StyledCourseListItem = styled.div.attrs({
    className: " hover:bg-red-100 font-bold text-2xl text-slate-700 rounded-lg",
  })`
    margin:13px;
    padding:3px;
  `
  export default CourseListItem;