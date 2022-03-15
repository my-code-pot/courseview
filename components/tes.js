export async function test() {
        const response=await fetch('http://localhost:3000/api/getAllCourses');
        const courses=await response.json();
        console.log(courses); 
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
  test.then(console.log())