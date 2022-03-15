import React from "react";
import { useRouter } from 'next/router';
import CommentsList from '../../components/reviews/commentsList'
import SideBar from '../../components/Sidebar';
const course = (props) => {
  const router = useRouter();
  const { course } = router.query;
  return (
    <div className="absolute">
    <SideBar departments={props.data}></SideBar>
    <CommentsList ></CommentsList>
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
    fallback: true
  }
}
export async function getStaticProps(context) {
  const response=await fetch('http://localhost:3000/api/getDepts');
  const data=await response.json(); 
return {
  props: {data}, // will be passed to the page component as props
}
}
export default course;