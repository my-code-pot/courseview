import styled from "styled-components";
import CourseListItem from "./courseListItem";
const CoursesList = ({listOfCourses}) => {
    let leftItems=[]
    let rightItems=[]
    let i=0;
    for (;i<listOfCourses.length/2;i++){
        leftItems.push(<CourseListItem course={listOfCourses[i]}></CourseListItem>)
    }
    for (;i<listOfCourses.length;i++){
        rightItems.push(<CourseListItem course={listOfCourses[i]}></CourseListItem>)
    }
    return (
      <StyledCoursesList>
        <div className="float:left ">{leftItems}</div>
        <div className="float:right ">{rightItems}</div>
      </StyledCoursesList>
    )
  };
  const StyledCoursesList=styled.div`
    display:flex;
    height:1000px;
    position:relative;
    top:40px;
    width:130vh;
    margin:30px;
    align:center;
    overflow-y: scroll;
    `

  export default CoursesList; 