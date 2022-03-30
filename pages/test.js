import React from 'react'
import connectToMongo from '../util/mongo'

function test(props) {
    console.log(props.msg)
  return (
    <div>Check Console</div>
  )
}

export async function getServerSideProps(){
    const client = await connectToMongo()  
    const db = client.db()
    const response=await fetch('http://localhost:3000/api/getAllCourses');
    const courses=await response.json(); 
    console.log(courses[0].slice(-2), )
    const dataSummary ={
      overallQuality:"3/5",
      difficulty:"2.4/5",
      willTakeAgain:"90",
      organization:"30",
    }
    const review ={
       name:"Ibrahim Hassouna",
       likes:"10",
       dislikes:"3",
       term:"fall21",
       professor:"Micheal",
       text:"This course was short but very informative and very helpful for an aspiring leader like myself. It also helped me understand how to view or understand when I receive feedback. I highly recommend it!!"
    }
    let reviews=[];
    for (let i=0;i<4;i++){
      reviews.push(review);
    }
    let docummentsToAdd=[];
    for (let course of courses){
      const document={
        name:course,
        reviews:reviews,
        dataSummary:dataSummary,
      }
      docummentsToAdd.push(document);
    }
    // db.collection("course_data").insertMany(docummentsToAdd, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document inserted");
    //   client.close();
    // });
    return {
        props: {
            msg: "Connected"
        }
    }
}
export default test