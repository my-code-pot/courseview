import React from 'react';
import { useRouter } from 'next/router';
import CoursesList from '../../components/CoursesList';
import SideBar from '../../components/Sidebar';
function index(props){
    const router = useRouter();
    const { department } = router.query;
  return (
    <div className='relative'>
      <SideBar departments={props.departments}/>
      <h1 className='ml-8 font-bold underline decoration-slate-700 decoration-2 underline-offset-2 w-3/4 color:red-800 text-center text-3xl px-2 py-3 text-red-700 rounded-lg'>{department} courses </h1>
      <CoursesList listOfCourses={props.courses}></CoursesList>
    </div>
  )
};
export async function getStaticPaths() {
  const response=await fetch('http://localhost:3000/api/getDepts');
  const departments=await response.json();
  const paths=departments.map(department=>{
    return {
      params: {department:department
      }
    }
  })
  return {
    paths: paths,
    fallback: true
  }
}

export async function getStaticProps(context) {
  const department=context.params.department;
  const res=await fetch('http://localhost:3000/api/getDepts');
  const departments=await res.json();
  console.log(department);
  const response=await fetch('http://localhost:3000/api/'+department);
  const courses=await response.json(); 
return {
  props: {courses,departments}, // will be passed to the page component as props
}
}

export default index;
