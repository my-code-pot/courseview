import styled from "styled-components";
import Link from "next/link";
const CourseListItem = ({course}) => {
    return (
        <Link href={"/courses/"+course}>
        <StyledCourseListItem>
            {course}
        </StyledCourseListItem>
        </Link>
    )
  };
  const StyledCourseListItem = styled.div.attrs({
    className: " hover:bg-red-100 font-bold text-2xl text-slate-700 rounded-lg",
  })`
    margin:13px;
    padding:3px;
    cursor: pointer;
  `
  export default CourseListItem;