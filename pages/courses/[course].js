import React from "react";
import { useRouter } from 'next/router';
import CommentsList from '../../components/reviews/commentsList'
import SideBar from '../../components/Sidebar';
const course = (props) => {
  const router = useRouter();
  const { course } = router.query;
  return (
    <div className="absolute">
    {/* <SideBar departments={props.data}></SideBar> */}
    <CommentsList ></CommentsList>
    </div>
  );
};

export async function getStaticPaths() {
  const response=await fetch('http://localhost:3000/api/getDepts');
  const departments=await response.json();
  const totalCourses=[];
  for (let department in departments){
    const response1=await fetch('http://localhost:3000/api/'+department);
    const departmentCourses=await response1.json();
    for (let course in departmentCourses){
      totalCourses.push(course);
    }
  }
  console.log(totalCourses); 
  const paths=totalCourses.map(course=>{
    return {
      params: {course:course
      }
    }
  })
  return {
    paths: paths,
    fallback: true
  }
}
export async function getStaticProps(context) {
  const response=await fetch('http://localhost:3000/api/getDepts');
  const data=await response.json();
  console.log(data) 
return {
  props: {data}, // will be passed to the page component as props
}
}
export default course;