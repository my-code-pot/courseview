import React from "react";
import { useRouter } from 'next/router';
import SideBar from '../../components/sideBar/Sidebar';
import CoursePageMainDiv from "../../components/coursePage/CoursePageMainDiv";
const Course = ({departments,courseData}) => {
  const router = useRouter();
  const { course } = router.query;
  return (
    <div className="flex">
    <SideBar departments={departments}></SideBar>
    <CoursePageMainDiv courseData={courseData}></CoursePageMainDiv> 
    </div>
  );
};
export async function getStaticPaths() {
  const response=await fetch('http://localhost:3000/api/getAllCourses');
  const courses=await response.json(); 
  const paths=courses.map(course=>{
    return {
      params: {course:course
      }
    }
  })
  return {
    paths: paths,
    fallback: "blocking"
  }
}
export async function getStaticProps(context) {
  const response=await fetch('http://localhost:3000/api/getDepts');
  const departments=await response.json(); 
  const course=context.params.course;
  const courseData=await (await fetch('http://localhost:3000/api/courses/'+course)).json();
  return {
    props: {
      departments:departments,
      courseData:courseData
    }, // will be passed to the page component as props
  }
}
export default Course;