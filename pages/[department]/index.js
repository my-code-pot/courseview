import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

function index({courses}){
    const router = useRouter();
    const { department } = router.query;
    const coursesList=courses.map(course =>{
      return <div>{course}</div>;
    })
  return <div>
      {coursesList}
  </div>;
};
export async function getStaticPaths() {
  const response=await fetch('http://localhost:3000/api/getDepts');
  const departments=await response.json();
  const paths=departments.map(department=>{
    return {
      params: {department:department}
    }
  })
  return {
    paths: paths,
    fallback: true
  }
}

export async function getStaticProps(context) {
  const department=context.params.department;
  const response=await fetch('http://localhost:3000/api/'+department);
  const courses=await response.json(); 
return {
  props: {courses}, // will be passed to the page component as props
}
}

export default index;
